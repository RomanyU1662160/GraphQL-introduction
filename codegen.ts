import type { CodegenConfig } from '@graphql-codegen/cli';

// this file automatically generated when run `graphql-code-generator init` command
// src: https://the-guild.dev/graphql/codegen/docs/getting-started/installation

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/Schema.graphql',
  generates: {
    'src/code-gen/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'], // this is the plugins used to create the types
      config: {
        contextType: '../context#DataSourceContext',
        mappers: {
          Playlist: '../models#PlaylistModel',
          Track: '../models#TrackModel',
        },
      },
    },
    './src/code-gen/graphql.schema.json': {
      plugins: ['introspection'], //this plugin will generate graphQL json schema in the path specified
    },
  },
};

export default config;
