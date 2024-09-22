import { ytmp3 } from 'ruhend-scraper'
import fs from 'fs';
import path from 'path';
import { URL } from 'url';
import axios from 'axios'


export const getYtInfov1 = async (req, res) => {
    let { url} = req.query;

    if (!url) {
        return res.status(400).json({ status: 400, message: 'URL is required.' });
    }

    try {
        
    
      const parsedurl = new URL(url);
      const videoId = parsedurl.searchParams.get('v') 
     
        const downloadsDir = path.resolve('downloads');
        if (!fs.existsSync(downloadsDir)) {
            fs.mkdirSync(downloadsDir);
        }

        const file = path.resolve(downloadsDir, `${videoId}.mp3`);

       
        const oldFiles = fs.readdirSync(downloadsDir);
        if (oldFiles.includes(`${videoId}.mp3`)) {
            res.setHeader('content-type', 'audio/mp3');
           return res.sendFile(file);
        }


        const data3 = await ytmp3(url)
        const {data} = await axios.get(data3.audio,{responseType:'arraybuffer'})
        fs.writeFileSync(file,data)
        res.setHeader('content-type', 'audio/mp3');
        res.sendFile(file);
        
        setTimeout(() => {
            if (fs.existsSync(file)) fs.unlinkSync(file);
        }, 1 * 60 * 60 * 1000); 

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 500, message: 'An error occurred.', error: error.message });
    }
};