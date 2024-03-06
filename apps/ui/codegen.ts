import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'https://alert-bullfrog-61.hasura.app/v1/graphql': {
      headers: {
        'x-hasura-admin-secret':
          'aoLIuaU1zZ2Puz3hx5QhZtnaiDzNaRSse6bcn8qkfsAARijonogBCE7GdnWSKyhf',
      },
    },
  },
  documents: ['./src/**/gql-model.ts', './src/graphql/models'],
  generates: {
    './src/graphql/__generated__/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        skipTypename: false,
      },
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
};

export default config;
