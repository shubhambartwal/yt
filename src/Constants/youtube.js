const API_KEY="AIzaSyDWFm7nnlY7xMaHP-zF3sRDH0yRT6odMRI"
const BASE_URL="https://www.googleapis.com/youtube/v3"
const YOUTUBE_VIDEO_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
export {YOUTUBE_VIDEO_API,BASE_URL,API_KEY};