import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'http://localhost:8083/v1/graphql': {
      headers: { 'x-hasura-admin-secret': 'jijikos' },
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
