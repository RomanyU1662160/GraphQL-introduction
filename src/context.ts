import { SpotifyAPI } from './datasources/spotify-api';

/* 
Here we define a typescript type for the context that shared across all queries, so code-gen cab create the correct type for the context 
This type is linked to the contextType in the codegen config. 
look file codegen.ts file
 
```
config: {
        contextType: '../context#DataSourceContext',
      },
```
*/

export type DataSourceContext = {
  dataSources: {
    spotifyAPI: SpotifyAPI;
  };
};
