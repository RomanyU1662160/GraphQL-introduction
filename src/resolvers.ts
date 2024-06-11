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
import { FeaturePlaylistTracks, PlaylistTracks } from './models';

const isPlayListTrack = (
  tracks: FeaturePlaylistTracks | PlaylistTracks
): tracks is PlaylistTracks => {
  return 'items' in tracks;
};

export const resolvers: Resolvers = {
  Query: {
    featuredPlaylists: (parent, args, contextValue, info) => {
      console.log('contextValue:::>>>', contextValue);
      const { dataSources } = contextValue;
      return dataSources.spotifyAPI.getFeaturedPlaylists();
    },

    playlist: (parent, args, contextValue) => {
      const { dataSources } = contextValue;
      return dataSources.spotifyAPI.getPlaylistById(args.id);
    },

    // artists: (_, args, contextValue) => {
    //   const { dataSources } = contextValue;
    //   return dataSources.spotifyAPI.getArtists(args.artists_ids);
    // },

    artist: (_, args, contextValue) => {
      const { dataSources } = contextValue;
      return dataSources.spotifyAPI.getArtistById(args.id);
    },
  },

  Playlist: {
    tracks: (parent, _, contextValue) => {
      console.log('parent:::>>>', parent);
      // if (parent typeof FeaturePlaylistsModel){}
      const { tracks, id } = parent;
      if (isPlayListTrack(tracks)) {
        // if we call the getPlaylist endpoint items will be in the response
        return tracks.items.map((item) => item.track);
      }
      // if we call the featuredPlaylists end point, we get the tracks by calling another endpoint using the id
      return contextValue.dataSources.spotifyAPI.getPlaylistTracks(id);
    },
  },

  // We map the duration_ms from the rest response to the graphQl schema
  Track: {
    durationMs: (parent) => parent.duration_ms,
  },

  Mutation: {
    addItemsToPlayList: async (_, args, contextValue) => {
      try {
        const { input } = args;
        const response =
          await contextValue.dataSources.spotifyAPI.addItemsToPlayList(input);
        console.log('response:::>>>', response);
        if ('snapshot_id' in response) {
          return {
            code: 200,
            success: true,
            message: 'successfully added track to playlist',
            playlistId: response.snapshot_id,
          };
        } else {
          throw new Error('something went wrong');
        }
      } catch (error) {
        console.log('error:::>>>', error);
        return {
          code: error.extensions.response.status,
          success: false,
          message: JSON.stringify(error.extensions.response.body),
          playlistId: null,
        };
      }
    },
  },
  AddItemsToPlayListResponse: {
    playlist: async (parent, args, contextValue) => {
      // const playlist = contextValue.dataSources.spotifyAPI.getPlaylistById(
      //   args.
      // );
      console.log('parent:::>>>', parent);
      console.log('args:::>>>', args.playlistId);
      return null;
    },
  },
};
