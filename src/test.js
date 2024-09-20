import {
    searchMusics,
    searchAlbums,
    searchPlaylists,
    getSuggestions,
    listMusicsFromAlbum,
    listMusicsFromPlaylist,
    searchArtists,
    getArtist,
  } from 'node-youtube-music';
  import fs from 'fs'
  
  const playlists = await searchPlaylists('Jazz');
//   console.log(playlists)
  const playlistSongs = await listMusicsFromPlaylist('VLPLWffCr9rZIfWw9YRz4ZFLtHfsofwToh_W');
  fs.writeFileSync('./src/data.json',  JSON.stringify(playlistSongs))