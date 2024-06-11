import type { CodegenConfig } from '@graphql-codegen/cli';

// this file automatically generated when run `graphql-code-generator init` command
// src: https://the-guild.dev/graphql/codegen/docs/getting-started/installation

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/Schema.graphql',
  generates: {
    'src/code-gen/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '../context#DataSourceContext',
      },
    },
    './src/code-gen/graphql.schema.json': {
      plugins: ['introspection'], //this plugin will graphQL json schema in the path specified
    },
  },
};

export default config;
