import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../Constants/youtube';
import axios from 'axios'
import { useEffect } from 'react';
const Watch = () => {
    const [singleVideo, setSingleVideo] = useState('')
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get('v')

    const getSingleVideo = async () => {
        const resData = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2cstatistics&id=${videoId}&key=${API_KEY}`)
        setSingleVideo(resData?.data.items[0])
        
    }
    useEffect(() => { getSingleVideo() }, [])
    // console.log(singleVideo)
    // console.log('snippet info',singleVideo?.snippet?.title)
    return (
        <div className='ml-2'>
            <iframe
                width="600" height="450"
                src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
            <h1 className='font-bold mt-2 text-lg'>{`${singleVideo?.snippet?.title}`}</h1>
        </div>
    )
}

export default Watch