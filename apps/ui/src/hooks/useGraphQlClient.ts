import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuthStore, useErrorStore } from '../state/useStore';
import { useMemo, useRef, useCallback } from 'react';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { UserType } from '@spark-monorepo/spark-shared';
import { auth } from '../../firebase-config';
import { createClient } from 'graphql-ws';

const HASURA_URL = process.env.EXPO_PUBLIC_HASURA_ENDPOINT_PROD;

interface TokenManager {
  accessToken: string | undefined;
  expirationTime: string | number;
}

/**
 * Check if the token is expired
 */
function isTokenExpired(expirationTime: string | number | undefined): boolean {
  if (expirationTime === undefined || expirationTime === null) {
    return true;
  }

  const expTime =
    typeof expirationTime === 'string'
      ? parseInt(expirationTime, 10)
      : expirationTime;

  if (isNaN(expTime)) {
    return true;
  }

  return expTime <= Date.now();
}

/**
 * Get a fresh access token, refreshing if expired
 */
async function getAccessToken(
  tokenManager: TokenManager | null | undefined,
): Promise<string | null> {
  if (!tokenManager?.accessToken) {
    return null;
  }

  if (isTokenExpired(tokenManager.expirationTime)) {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      return null;
    }

    try {
      const newToken = await currentUser.getIdToken(true);
      if (__DEV__) {
        console.log('Token refreshed');
      }
      return newToken;
    } catch (error) {
      if (__DEV__) {
        console.error('Failed to refresh token:', error);
      }
      return null;
    }
  }

  return tokenManager.accessToken;
}

/**
 * Get WebSocket URL from HTTP URL
 */
function getWsUrl(httpUrl: string | undefined): string {
  if (!httpUrl) {
    return '';
  }
  return `wss://${httpUrl.replace(/^https?:\/\//, '')}`;
}

// Shared cache instance to prevent losing cached data on re-renders
const sharedCache = new InMemoryCache();

export const useGraphQlClient = () => {
  const { setError } = useErrorStore((state) => state);
  const { user } = useAuthStore((state) => state);

  // Keep track of user ID for cache invalidation
  const userIdRef = useRef<string | null>(null);
  const currentUserId = user?.uid ?? null;

  // Reset cache when user changes (login/logout)
  if (userIdRef.current !== currentUserId) {
    if (userIdRef.current !== null) {
      // User changed, reset cache
      sharedCache.reset();
    }
    userIdRef.current = currentUserId;
  }

  // Memoize the getAuthHeaders function
  const getAuthHeaders = useCallback(async () => {
    const tokenManager = (user as UserType | null)?.stsTokenManager ?? null;
    const accessToken = await getAccessToken(tokenManager);

    return {
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    };
  }, [user]);

  // Memoize the client creation
  const client = useMemo(() => {
    const httpLink = createHttpLink({
      uri: HASURA_URL,
    });

    const authLink = setContext(async (_, { headers }) => {
      const authHeaders = await getAuthHeaders();
      return {
        headers: {
          ...headers,
          ...authHeaders,
        },
      };
    });

    const wsLink = new GraphQLWsLink(
      createClient({
        on: {
          connected: () => {
            if (__DEV__) {
              console.log('WebSocket connected');
            }
          },
          closed: () => {
            if (__DEV__) {
              console.log('WebSocket closed');
            }
          },
          error: (error) => {
            setError(error);
          },
        },
        url: getWsUrl(HASURA_URL),
        connectionParams: async () => {
          const authHeaders = await getAuthHeaders();
          return {
            headers: authHeaders,
          };
        },
      }),
    );

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      authLink.concat(httpLink),
    );

    return new ApolloClient({
      link: splitLink,
      cache: sharedCache,
    });
  }, [getAuthHeaders, setError]);

  return client;
};
