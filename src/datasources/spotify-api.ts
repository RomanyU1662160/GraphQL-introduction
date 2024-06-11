import { RESTDataSource } from '@apollo/datasource-rest';
import { AddItemsToPlayListInput, Artist, Playlist } from '../code-gen/types';
import {
  PlaylistModel,
  PlaylistTracks,
  SnapShootOrErrorResponse,
  TrackModel,
} from '../models';

type GetPlaylistsResponse = {
  playlists: {
    items: Array<PlaylistModel>;
  };
};

// Here we define a class with helper methods to be as the data source in the graphql server

/*
Because it's a very common task to fetch data from REST when building a GraphQL API,
 Apollo Server provides a dedicated DataSource class for just that:
the RESTDataSource.
Src: https://www.apollographql.com/tutorials/intro-typescript/06-spotify-rest-api
*/

/*
Swagger API : https://spotify-demo-api-fe224840a08c.herokuapp.com/v1/docs/#/Playlists/get-playlist
*/

const endPoints = {
  getFeaturedPlaylists: 'browse/featured-playlists',
  getPlaylist: 'playlists',
  getPlaylistTracks: 'tracks',
  getArtists: 'artists',
};

export class SpotifyAPI extends RESTDataSource {
  baseURL = 'https://spotify-demo-api-fe224840a08c.herokuapp.com/v1/';

  async getFeaturedPlaylists(): Promise<Array<PlaylistModel>> {
    const response = await this.get<GetPlaylistsResponse>(
      endPoints.getFeaturedPlaylists
    );
    const tracks = response?.playlists?.items?.map((track) => track);
    return tracks;
  }

  async getPlaylistById(id: string): Promise<PlaylistModel> {
    const response = await this.get<PlaylistModel>(`playlists/${id}`);
    return response;
  }

  async getPlaylistTracks(playlistId: string): Promise<TrackModel[]> {
    const response = await this.get<PlaylistTracks>(
      `playlists/${playlistId}/tracks`
    );
    return response.items.map((item) => item.track) ?? [];
  }

  // async getArtists(artists_ids: string): Promise<[Artist]> {
  //   const response = await this.get<[Artist]>(`${endPoints.getArtists}`, {
  //     params: {
  //       artists_ids,
  //     },
  //   });
  //   return response;
  // }

  async getArtistById(id: string): Promise<Artist> {
    const response = this.get<Artist>(`artists/${id}`);
    return response;
  }

  async addItemsToPlayList(payload: AddItemsToPlayListInput) {
    const { playlistId, uris } = payload;
    const response = await this.post<SnapShootOrErrorResponse>(
      `playlists/${playlistId}/tracks`,
      {
        params: {
          uris: uris.join(','),
        },
      }
    );
    return response;
  }
}
