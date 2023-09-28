import {
  GraphQLClient,
  RequestDocument,
  RequestOptions,
} from 'graphql-request';
import { useMemo } from 'react';
export class AuthorizedGraphQLClient extends GraphQLClient {
  override async request<T>(...args: any[]): Promise<T> {
    const { document, variables } = args[0] as RequestOptions;
    return super.request(document as RequestDocument, variables);
  }
}

export const useGraphQlClient = () => {
  const client = useMemo(
    () =>
      new AuthorizedGraphQLClient(
        process.env.EXPO_PUBLIC_HASURA_ENDPOINT as string,
        {
          headers: {
            'x-hasura-admin-secret': process.env
              .EXPO_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET as string,
          },
        }
      ),
    []
  );
  return client;
};
