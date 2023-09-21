// import { IMsalContext, useMsal } from '@azure/msal-react';
// import { GraphQLClient } from 'graphql-request';
// import {
//   PatchedRequestInit,
//   RequestDocument,
//   RequestOptions,
// } from 'graphql-request/dist/types';
// import { Headers } from 'graphql-request/dist/types.dom';
// import { useContext, useMemo } from 'react';
// import { getToken } from '../core/utils/auth-utils';
// import { IAppConfig } from '../model/config/IAppConfig';
// import { IAppContext } from '../model/context/IAppContext';
// import { AppContext } from '../providers/AppContextProvider';
// export class AuthorizedGraphQLClient extends GraphQLClient {
//   constructor(
//     url: string,
//     options?: PatchedRequestInit,
//     private context?: IMsalContext,
//     private config?: IAppConfig
//   ) {
//     super(url, options);
//   }
//   override async request<T>(...args: any[]): Promise<T> {
//     const { document, variables } = args[0] as RequestOptions;
//     const { instance, accounts } = this.context as IMsalContext;
//     const account = accounts.length > 0 ? accounts[0] : undefined;
//     const token = await getToken(instance, this.config, account);
//     const headers = { Authorization: `Bearer ${token?.accessToken}` };
//     return super.request(
//       document as RequestDocument,
//       variables,
//       headers as (Headers | string[][] | Record<string, string>) | undefined
//     );
//   }
// }
// export const useGraphQlClient = () => {
//   const msal = useMsal();
//   const { config } = useContext<IAppContext>(AppContext);

//   const client = useMemo(
//     () =>
//       new AuthorizedGraphQLClient(config.gqlEndpoint, undefined, msal, config),
//     [config, msal]
//   );

//   return client;
// };
