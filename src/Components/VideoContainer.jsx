import React, { useEffect } from 'react'
import axios from 'axios'
import { YOUTUBE_VIDEO_API } from '../Constants/youtube'
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videos, setVideos] = React.useState([])
    const fetchYoutubeVideo = async () => {
        try {
            const res = await axios.get(YOUTUBE_VIDEO_API)
            console.log(res?.data?.items);
            setVideos(res?.data?.items)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchYoutubeVideo()
    }, [])
    return (
        <div className="grid grid-cols-3 gap-3 py-2">
          {  videos.map(()=>{
                return <VideoCard />
            })
        }

        </div>
    )
}

export default VideoContainer