


import ytdl from '@distube/ytdl-core';
import { cookies } from './cookies.js';
const agent = ytdl.createAgent(cookies);



export const getytUrlDetail = async (req, res) => {
    let { id} = req.query;
   
    if (!id) {
        res.status(400).json({ status: 400, message: 'we need id mf' });
        return;
    }
    const url = 'https://www.youtube.com/watch?v='+id;
    try {
        let infoYt = await ytdl.getInfo(url, { agent });
        let titleYt = infoYt.videoDetails
        res.json({status:200,...titleYt,url:'http://localhost:5000/video?url='+url})

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 500, message: 'An error occurred', error: error.message || error.msg });
    }
};
