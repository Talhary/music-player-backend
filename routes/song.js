
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
import express from 'express'
const router = express.Router()
const app = router;

import pkg from "nayan-media-downloader"
const {ytdown} = pkg
 const urlToName = async (url)=>{
let URL = await ytdown(url)
return URL.data.title
}



export const getytUrlDetail = async (req, res) => {
    let { url} = req.query;
   
    if (!url) {
        res.status(400).json({ status: 400, message: 'we need url mf' });
        return;
    }
    try {
        const title = await urlToName(url);
        const songs =await searchMusics(title)
        
        res.json({...songs[0],url:'http://localhost:5000/video?url='+url})

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 500, message: 'An error occurred', error: error.message || error.msg });
    }
};

app.get('/search/musics', async (req, res) => {
    try {
      const query = req.query.q;
      const musics = await searchMusics(query);
      res.json(musics);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message });
    }
  });
  
  // Search for albums by a query
  app.get('/search/albums', async (req, res) => {
    try {
      const query = req.query.q;
      const albums = await searchAlbums(query);
      res.json(albums);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Search for playlists by a query
  app.get('/search/playlists', async (req, res) => {
    try {
      const query = req.query.q;
      const playlists = await searchPlaylists(query);
      res.json(playlists);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get suggestions based on a YouTube music ID
  app.get('/suggestions', async (req, res) => {
    try {
      const youtubeId = req.query.youtubeId;
      
      const suggestions = await getSuggestions(youtubeId);
      
      req.query.url = `https://www.youtube.com/watch?v=${suggestions[1].youtubeId}`
      
      return getytUrlDetail(req,res)
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // List all songs from a specific album
  app.get('/album/songs', async (req, res) => {
    try {
      const albumId = req.query.albumId;
      const albumSongs = await listMusicsFromAlbum(albumId);
      res.json(albumSongs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // List all songs from a specific playlist
  app.get('/playlist/songs', async (req, res) => {
    try {
      const playlistId = req.query.playlistId;
      const playlistSongs = await listMusicsFromPlaylist(playlistId);
      res.json(playlistSongs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Search for artists by a query
  app.get('/search/artists', async (req, res) => {
    try {
      const query = req.query.q;
      const artists = await searchArtists(query);
      res.json(artists);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get detailed information about a specific artist
  app.get('/artist', async (req, res) => {
    try {
      const artistId = req.query.artistId;
      const artist = await getArtist(artistId);
      res.json(artist);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
export default app
  