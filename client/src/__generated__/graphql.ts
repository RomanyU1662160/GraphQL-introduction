/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddItemsToPlayListInput = {
  /** The ID of the playlist. */
  playlistId: Scalars['ID']['input'];
  /** A comma-separated list of Spotify URIs to add. */
  uris: Array<Scalars['String']['input']>;
};

export type AddItemsToPlayListResponse = {
  __typename?: 'AddItemsToPlayListResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** The playlist that contains the newly added items */
  playlist?: Maybe<Playlist>;
  /** Boolean Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

export type Artist = {
  __typename?: 'Artist';
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  popularity?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add one or more items to a user's playlist. */
  addItemsToPlayList: AddItemsToPlayListResponse;
};


export type MutationAddItemsToPlayListArgs = {
  input: AddItemsToPlayListInput;
};

/** The Playlist Schema to define a collection of tracks for a specific activity */
export type Playlist = {
  __typename?: 'Playlist';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tracks: Array<Track>;
};

/** In Query we define the endpoints and parameters required */
export type Query = {
  __typename?: 'Query';
  artist?: Maybe<Artist>;
  /** This will return the playlists to be featured for all users */
  featuredPlaylists: Array<Maybe<Playlist>>;
  /** return a playlist with id */
  playlist?: Maybe<Playlist>;
};


/** In Query we define the endpoints and parameters required */
export type QueryArtistArgs = {
  id: Scalars['ID']['input'];
};


/** In Query we define the endpoints and parameters required */
export type QueryPlaylistArgs = {
  id: Scalars['ID']['input'];
};

/** The Track object */
export type Track = {
  __typename?: 'Track';
  /** The track length in milliseconds. */
  durationMs: Scalars['Int']['output'];
  /** Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown) */
  explicit: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The name of the track */
  name: Scalars['String']['output'];
  /** The URI for the track, usually a Spotify link. */
  uri: Scalars['String']['output'];
};

export type FeaturedPlaylistsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedPlaylistsQuery = { __typename?: 'Query', featuredPlaylists: Array<{ __typename?: 'Playlist', id: string, name: string, tracks: Array<{ __typename?: 'Track', durationMs: number, explicit: boolean, id: string, name: string, uri: string }> } | null> };


export const FeaturedPlaylistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FeaturedPlaylists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredPlaylists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"explicit"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}}]} as unknown as DocumentNode<FeaturedPlaylistsQuery, FeaturedPlaylistsQueryVariables>;