/*
Swagger API : https://spotify-demo-api-fe224840a08c.herokuapp.com/v1/docs/#/Playlists/get-playlist
*/

export type TrackModel = {
  id: string;
  name: string;
  uri: string;
  explicit: boolean;
  duration_ms: number;
};

export type ItemModel = {
  added_at: string;
  is_local: string;
  track: TrackModel;
};

export type FeaturePlaylistTracks = {
  href: string;
  total: number;
};

export type PlaylistTracks = {
  items: ItemModel[];
};

// Represents a response from the REST API /featured-playlists or /playlist/{id}
export type PlaylistModel = {
  id: string;
  name: string;
  description: string;
  tracks: PlaylistTracks | FeaturePlaylistTracks;
};

export type SnapShootOrErrorResponse = {
  snapshot_id?: string;
  error?: string;
};

export type AddItemsToPlayListResponseModel = {
  code: number;
  success: boolean;
  message: string;
  playlistId?: string;
};
