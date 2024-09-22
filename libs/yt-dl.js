import { ytmp3, ytmp3v2, ytmp3v3 } from 'ruhend-scraper'
import axios from 'axios'
import fs from 'fs'
const url = 'https://music.youtube.com/watch?v=DvwwcQd7OjI&list=RDAMVMDvwwcQd7OjI'
const data3 = await ytmp3(url)
const {data} = await axios.get(data3.audio,{responseType:'arraybuffer'})
console.log(data)
fs.writeFileSync('./libs/file.mp3',data)

