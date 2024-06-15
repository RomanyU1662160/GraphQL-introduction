import React from 'react';
import GlobalStyles from './styles';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Playlists from './components/Playlists';

function App() {
  // const { data, error, loading } = useQuery(FEATURED_PLAYLIST_QUERY);

  return (
    <div className='App'>
      <GlobalStyles />
      <Playlists />
    </div>
  );
}

export default App;
