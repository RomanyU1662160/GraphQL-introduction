import React from 'react';
import { gql } from '../__generated__';
import { useQuery } from '@apollo/client';
import Layout from './Layout';

const FEATURED_PLAYLIST = gql(`
query FeaturedPlaylists {
  featuredPlaylists {
    id,
    name,
    tracks {
      durationMs
      explicit
      id
      name
      uri
    }
  }
}`);

function Playlists() {
  const { data, loading, error } = useQuery(FEATURED_PLAYLIST);
  return (
    <Layout>
      {loading && <>...loading </>}
      {error && <> {error.message}</>}
      {data &&
        data.featuredPlaylists.map((pl) => {
          return <p key={pl?.id}> {pl?.name}</p>;
        })}
    </Layout>
  );
}

export default Playlists;
