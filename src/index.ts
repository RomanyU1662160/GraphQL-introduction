import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { startStandaloneServer } from '@apollo/server/standalone';
import path from 'path';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';
import { SpotifyAPI } from './datasources/spotify-api';

// get the schema and query defined in the schema files as string
const typeDefs = readFileSync(path.resolve(__dirname, './schema.graphql'), {
  encoding: 'utf-8',
});

// start an Apollo server and use the defined schema
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      // this returned object becomes our resolver's contextValue, the third positional argument in the resolvers
      return {
        dataSources: {
          spotifyAPI: new SpotifyAPI({ cache }),
        },
      };
    },
  });
  console.log(`GraphQL server is running on ${url} `);
}

startApolloServer();
