import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuthStore } from '../state/useStore'; // Import your token refresh function
import { useMemo } from 'react';
import * as Device from 'expo-device';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { UserType } from '@spark-monorepo/spark-shared';
import { auth } from '../firebase-config';
import { createClient } from 'graphql-ws';

const {
  EXPO_PUBLIC_HASURA_ENDPOINT_EMULATOR,
  EXPO_PUBLIC_HASURA_ENDPOINT_DEVICE,
  EXPO_PUBLIC_HASURA_ENDPOINT_PROD,
} = process.env;

// const HASURA_URL = Device.isDevice
//   ? EXPO_PUBLIC_HASURA_ENDPOINT_DEVICE
//   : EXPO_PUBLIC_HASURA_ENDPOINT_EMULATOR;

const HASURA_URL = EXPO_PUBLIC_HASURA_ENDPOINT_PROD;

export const useGraphQlClient = () => {
  const { user } = useAuthStore((state) => state);
  let token: UserType['stsTokenManager'] | null;

  const authLink = setContext(async (_, { headers }) => {
    token = (user as UserType)?.stsTokenManager;

    await refreshTokenIfExpired(token);

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token.accessToken?.toString()}` : '',
      },
    };
  });

  const httpLink = createHttpLink({
    uri: HASURA_URL,
  });
  const wsLink = new GraphQLWsLink(
    createClient({
      on: {
        connected: () => console.log('socket connected'),
        closed: () => console.log('socket closed'),
        error: (error) => console.error({ error }),
      },
      url: `wss://${HASURA_URL?.replaceAll('https://', '')}`,
      connectionParams: async () => {
        token = (user as UserType)?.stsTokenManager;

        await refreshTokenIfExpired(token);

        return {
          headers: {
            authorization: token
              ? `Bearer ${token?.accessToken?.toString()}`
              : '',
          },
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

  const client = useMemo(
    () =>
      new ApolloClient({
        link: splitLink,
        cache: new InMemoryCache(),
      }),
    [user],
  );
  return client;
};

const refreshTokenIfExpired = async (token: {
  accessToken: string | undefined;
  expirationTime: string;
}) => {
  if (+token?.expirationTime <= +new Date().getTime()?.toString()) {
    token.accessToken = await auth.currentUser?.getIdToken(true);
    console.log('Token refreshed');
  }
};
