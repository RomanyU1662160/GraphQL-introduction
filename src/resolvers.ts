/*
Course Src : https://www.apollographql.com/tutorials/intro-typescript/07-resolvers
Let's go over each parameter briefly to understand what they're responsible for:

parent:
parent is the returned value of the resolver for this field's parent. 
This will be useful when dealing with resolver chains.

args:
args is an object that contains all GraphQL arguments  eg(id: 1).

contextValue:
contextValue is an object shared across all resolvers that are executing for a particular operation. 
The resolver needs this argument to share state, like authentication information, a database connection,
 or in our case the RESTDataSource.

info:
info contains information about the operation's execution state, 
including the field name, the path to the field from the root, and more.
 It's not used as frequently as the others, 
 but it can be useful for more advanced actions like setting cache policies at the resolver level.
*/

import { Resolvers } from './code-gen/types';

export const resolvers: Resolvers = {
  Query: {
    featuredPlaylists: ({ parent, args, contextValue, info }: any) => {
      console.log('contextValue:::>>>', contextValue);
      const { dataSources } = contextValue;
      return dataSources.spotifyAPI.getFeaturedPlaylists();
    },
  },
};
