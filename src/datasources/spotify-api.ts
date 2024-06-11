import { RESTDataSource } from '@apollo/datasource-rest';
import { Playlist } from '../code-gen/types';

type GetPlaylistResponse = {
  playlists: {
    items: Array<Playlist>;
  };
};

// Here we define a class with helper methods to be as the data source in the graphql server

/*
Because it's a very common task to fetch data from REST when building a GraphQL API,
 Apollo Server provides a dedicated DataSource class for just that:
the RESTDataSource.
Src: https://www.apollographql.com/tutorials/intro-typescript/06-spotify-rest-api
*/

export class SpotifyAPI extends RESTDataSource {
  baseURL = 'https://spotify-demo-api-fe224840a08c.herokuapp.com/v1/';
  featurePlayListsEndpoint = 'browse/featured-playlists';

  async getFeaturedPlaylists(): Promise<Array<Playlist>> {
    const response = await this.get<GetPlaylistResponse>(
      this.featurePlayListsEndpoint
    );
    return response?.playlists?.items ?? [];
  }
}
