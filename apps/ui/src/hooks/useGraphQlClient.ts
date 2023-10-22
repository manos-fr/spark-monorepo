import {
  GraphQLClient,
  RequestDocument,
  RequestOptions,
} from 'graphql-request';
import { useAuthStore } from '../state/useStore';
import { useMemo } from 'react';

export class AuthorizedGraphQLClient extends GraphQLClient {
  override async request<T>(...args: any[]): Promise<T> {
    const { document, variables } = args[0] as RequestOptions;
    return super.request(document as RequestDocument, variables);
  }
}

export const useGraphQlClient = () => {
  const { user } = useAuthStore((state) => state);
  const client = useMemo(() => {
    console.log('useGraphQlClient');
    const headers = {
      Authorization: `Bearer ${(
        user as any
      )?.stsTokenManager?.accessToken?.toString()}`,
    };

    const client = new AuthorizedGraphQLClient(
      process.env.EXPO_PUBLIC_HASURA_ENDPOINT as string,
      { headers }
    );
    return client;
  }, [user]);

  return client;
};
