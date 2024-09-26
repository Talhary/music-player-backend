import pkg from "nayan-media-downloader"
const {ytdown} = pkg
 const urlToName = async (url)=>{
let URL = await ytdown(url)
return URL.data.title
}

import { searchMusics } from 'node-youtube-music';


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
