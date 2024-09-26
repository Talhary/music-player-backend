import pkg from "nayan-media-downloader"
const {ytdown} = pkg
export const urlToName = async (url)=>{
let URL = await ytdown(url)
return URL.data.title
}