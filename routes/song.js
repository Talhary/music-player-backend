
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
const cookies = [
  {
      "domain": ".youtube.com",
      "expirationDate": 1758122996.620848,
      "hostOnly": false,
      "httpOnly": false,
      "name": "__Secure-1PAPISID",
      "path": "/",
      "sameSite": "unspecified",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "hpnn2Zu6HqtKXZNc/ANxQ1ey7ospPwBG5-",
      "id": 1
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1758122996.621535,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-1PSID",
      "path": "/",
      "sameSite": "unspecified",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "g.a000mwifhiPgpai2VOySwecxKGLOugoWhSEaMBFapIQcS6LwFnS6DXx-IK05hjVhdX23tnQBaAACgYKAS4SARUSFQHGX2MizTHUTcknGkAehwQpIQCQlxoVAUF8yKrJ6vWywapABFL5dz2OVfAW0076",
      "id": 2
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1755464249.255818,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-1PSIDCC",
      "path": "/",
      "sameSite": "unspecified",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "AKEyXzVn84AQfSmZDVmDkrmHepkYIUsHrg0TUnvMgCEdIxFN2mQdChCawH4gCBc1sOr-v1UltI4",
      "id": 3
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1754832096.419913,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-1PSIDTS",
      "path": "/",
      "sameSite": "unspecified",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "sidts-CjEBUFGoh89v8aeaJ7vFK5Wp6bpBqNqXFuFWne62AGnP2o-zqaEwt9jremvsicNZFoCfEAA",
      "id": 4
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1758122996.620943,
      "hostOnly": false,
      "httpOnly": false,
      "name": "__Secure-3PAPISID",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "hpnn2Zu6HqtKXZNc/ANxQ1ey7ospPwBG5-",
      "id": 5
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1758122996.621633,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-3PSID",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "g.a000mwifhiPgpai2VOySwecxKGLOugoWhSEaMBFapIQcS6LwFnS6dPALLqhl5xqSB_aA9Tn1-QACgYKAfsSARUSFQHGX2MisaEVOxJBqP1L8MoRsP25lxoVAUF8yKrxgUsbqPGziOb3_eFY2jDg0076",
      "id": 6
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1755464249.255893,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-3PSIDCC",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "AKEyXzWTvG0r4Fpg9YIwnrfRAglCn6Aee6LxUNL9r5WGsZct1sccmlsfI880Z1AcvaZSE8GJWg",
      "id": 7
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1754832096.42014,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-3PSIDTS",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "sidts-CjEBUFGoh89v8aeaJ7vFK5Wp6bpBqNqXFuFWne62AGnP2o-zqaEwt9jremvsicNZFoCfEAA",
      "id": 8
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1724940232,
      "hostOnly": false,
      "httpOnly": false,
      "name": "_gcl_au",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "1.1.1160943843.1717164232",
      "id": 9
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1758122996.62065,
      "hostOnly": false,
      "httpOnly": false,
      "name": "APISID",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "Mm4jK1odbhLRtgpS/A4CedpprVlOiHJVUb",
      "id": 10
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1758122996.620367,
      "hostOnly": false,
      "httpOnly": true,
      "name": "HSID",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "AhR4NqC7UoNylrhqI",
      "id": 11
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1753040425.13675,
      "hostOnly": false,
      "httpOnly": true,
      "name": "LOGIN_INFO",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "AFmmF2swRQIgOhFaZCPaXNkZO6JkldcRviMzLD7K-VPe4i4lAalza2UCIQDr-O3qjMYIA-6nJQAj3K6Pfkmw2V8LNGNhIW7_Ey0r4Q:QUQ3MjNmejVGVmw3eUhqRTlEZ2FEQUJMLTl6Yk1XdXE2dkRSMGV6anlJNEV2VU45SzZIZ01wa3hpWTNQY05PS05zVGV5ampaTkgxV0RwRmRMdnRNQjJ0dl9oZm41WmF0eFViNlUyMzdtVnBUZ3J4cnV2V0s2UHc1WUgyTDcySDh1Qksxd0JEdkxwamlFeXNPTkZ2OHkyUGZsV2g3UjIyV09n",
      "id": 12
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1758488247.165703,
      "hostOnly": false,
      "httpOnly": false,
      "name": "PREF",
      "path": "/",
      "sameSite": "unspecified",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "f6=40000000&volume=56&f7=4100&tz=Asia.Karachi&repeat=NONE&autoplay=true&f5=20000",
      "id": 13
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1758122996.620755,
      "hostOnly": false,
      "httpOnly": false,
      "name": "SAPISID",
      "path": "/",
      "sameSite": "unspecified",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "hpnn2Zu6HqtKXZNc/ANxQ1ey7ospPwBG5-",
      "id": 14
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1758122996.621445,
      "hostOnly": false,
      "httpOnly": false,
      "name": "SID",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "g.a000mwifhiPgpai2VOySwecxKGLOugoWhSEaMBFapIQcS6LwFnS6pGvBYboU7nkauWWLrYjtlgACgYKAbUSARUSFQHGX2MiNUaACA_ppFyQPJPTPkRiZBoVAUF8yKq6tDadePAZ3GORb4yt82p10076",
      "id": 15
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1755464249.255693,
      "hostOnly": false,
      "httpOnly": false,
      "name": "SIDCC",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "AKEyXzXBNRIvFRLrFcwyVSq6zW0olRdhkoh0Rze0dOUhO5O5qkt9w93W6hKgV8SN_l4nu_E5co0",
      "id": 16
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1758122996.62055,
      "hostOnly": false,
      "httpOnly": true,
      "name": "SSID",
      "path": "/",
      "sameSite": "unspecified",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "AF9l2vwP1hlNJkFsF",
      "id": 17
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1723928252,
      "hostOnly": false,
      "httpOnly": false,
      "name": "ST-tladcw",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "session_logininfo=AFmmF2swRQIgOhFaZCPaXNkZO6JkldcRviMzLD7K-VPe4i4lAalza2UCIQDr-O3qjMYIA-6nJQAj3K6Pfkmw2V8LNGNhIW7_Ey0r4Q%3AQUQ3MjNmejVGVmw3eUhqRTlEZ2FEQUJMLTl6Yk1XdXE2dkRSMGV6anlJNEV2VU45SzZIZ01wa3hpWTNQY05PS05zVGV5ampaTkgxV0RwRmRMdnRNQjJ0dl9oZm41WmF0eFViNlUyMzdtVnBUZ3J4cnV2V0s2UHc1WUgyTDcySDh1Qksxd0JEdkxwamlFeXNPTkZ2OHkyUGZsV2g3UjIyV09n",
      "id": 18
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1723928253,
      "hostOnly": false,
      "httpOnly": false,
      "name": "ST-xuwub9",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "session_logininfo=AFmmF2swRQIgOhFaZCPaXNkZO6JkldcRviMzLD7K-VPe4i4lAalza2UCIQDr-O3qjMYIA-6nJQAj3K6Pfkmw2V8LNGNhIW7_Ey0r4Q%3AQUQ3MjNmejVGVmw3eUhqRTlEZ2FEQUJMLTl6Yk1XdXE2dkRSMGV6anlJNEV2VU45SzZIZ01wa3hpWTNQY05PS05zVGV5ampaTkgxV0RwRmRMdnRNQjJ0dl9oZm41WmF0eFViNlUyMzdtVnBUZ3J4cnV2V0s2UHc1WUgyTDcySDh1Qksxd0JEdkxwamlFeXNPTkZ2OHkyUGZsV2g3UjIyV09n",
      "id": 19
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1733376276.275258,
      "hostOnly": false,
      "httpOnly": true,
      "name": "VISITOR_INFO1_LIVE",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "MEIk0-2m5KU",
      "id": 20
  },
  {
      "domain": ".youtube.com",
      "expirationDate": 1733376276.275312,
      "hostOnly": false,
      "httpOnly": true,
      "name": "VISITOR_PRIVACY_METADATA",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "CgJQSxIEGgAgDw%3D%3D",
      "id": 21
  }
]
import ytdl from '@distube/ytdl-core';
const agent = ytdl.createAgent(cookies);
const getytUrlDetail = async (req, res) => {
  let { url} = req.query;
 
  if (!url) {
      res.status(400).json({ status: 400, message: 'we need url mf' });
      return;
  }
  
  try {
      let infoYt = await ytdl.getInfo(url, { agent });
      let details = infoYt.videoDetails
      return res.json({...details,url:'http:localhost:5000/video?url='+url})
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
      req.query.url = `https://music.youtube.com/watch?v=${suggestions[1].youtubeId}`
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
  