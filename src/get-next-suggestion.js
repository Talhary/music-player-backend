
import ytdl from '@distube/ytdl-core';

import { cookies } from './cookies.js';
const agent = ytdl.createAgent(cookies);

export const getNextSuggestion = async (req, res) => {
    let { id } = req.query;
   
    if (!id) {
        res.status(400).json({ status: 400, message: 'we need id mf' });
        return;
    }
    const url  = 'https://www.youtube.com/watch?v='+id
    try {

        let infoYt = await ytdl.getInfo(url, { agent });
        // fs.writeFileSync('info.json',JSON.stringify(infoYt))
        const ytinfo = await ytdl.getInfo(`https://music.youtube.com/watch?v=${infoYt.related_videos[0].id}`,{agent})
         return res.json({ status: 200, message: 'Success', ...ytinfo.videoDetails });
        let details = infoYt.videoDetails
        return res.json({status:200,...details,url:`http://localhost:3000/video?url=${url}`})

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 500, message: 'An error occurred', error: error.message || error.msg });
    }
};

