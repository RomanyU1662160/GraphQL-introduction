import { GraphQLResolveInfo } from 'graphql';
import { PlaylistModel, TrackModel, AddItemsToPlayListResponseModel } from '../models';
import { DataSourceContext } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddItemsToPlayListInput: AddItemsToPlayListInput;
  AddItemsToPlayListResponse: ResolverTypeWrapper<AddItemsToPlayListResponseModel>;
  Artist: ResolverTypeWrapper<Artist>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Playlist: ResolverTypeWrapper<PlaylistModel>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<TrackModel>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddItemsToPlayListInput: AddItemsToPlayListInput;
  AddItemsToPlayListResponse: AddItemsToPlayListResponseModel;
  Artist: Artist;
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Playlist: PlaylistModel;
  Query: {};
  String: Scalars['String']['output'];
  Track: TrackModel;
};

export type AddItemsToPlayListResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['AddItemsToPlayListResponse'] = ResolversParentTypes['AddItemsToPlayListResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playlist?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addItemsToPlayList?: Resolver<ResolversTypes['AddItemsToPlayListResponse'], ParentType, ContextType, RequireFields<MutationAddItemsToPlayListArgs, 'input'>>;
};

export type PlaylistResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistArgs, 'id'>>;
  featuredPlaylists?: Resolver<Array<Maybe<ResolversTypes['Playlist']>>, ParentType, ContextType>;
  playlist?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType, RequireFields<QueryPlaylistArgs, 'id'>>;
};

export type TrackResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  durationMs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  explicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  AddItemsToPlayListResponse?: AddItemsToPlayListResponseResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Playlist?: PlaylistResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
};

