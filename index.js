import express from 'express';
const app = express();
import Connect from './db/mongo.js';
import 'express-async-errors';
import './middleware/auth.js';
import passport from 'passport';
import session from './utils/session.js';
import './middleware/auth.js'; 

import authRoute from './routes/authRoute.js'
import SongsRoute from './routes/song.js'

import cors from './utils/cors.js'

import { getYtInfo } from './src/yt.js';
import { getNextSuggestion } from './src/get-next-suggestion.js';
import { getytUrlDetail } from './src/yt-details.js';
import { getYtInfov1 } from './src/yt-v1.js';

app.use(express.json());
const port = process.env.PORT || 5000;;
app.use(cors)

app.get('/video',getYtInfov1)
app.get('/video/next', getNextSuggestion)
app.get('/video/info',getytUrlDetail)
// Search for music by a query

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth',authRoute)
app.use('/',SongsRoute)

const start = async ()=>{
  try {
    await Connect()
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error)
  }
}
start()