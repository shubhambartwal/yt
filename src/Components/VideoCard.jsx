import React from 'react'
import Avatar from "react-avatar";
const VideoCard = () => {
    return (
        <div className=' cursor-pointer'>
            <img className="rounded-xl " src='https://imgs.search.brave.com/pOaBQnGdotrnHtF_0NMASNCS6LazIYQ19AmbcrWTQmE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNtaXRoLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL1RT/Qy10aHVtYm5haWwt/ZXhhbXBsZS0xMDI0/eDU3Ni5wbmc' alt=" tumnail" />
            <div>
                <div className='flex mt-2 '>
                    <Avatar className='' src="https://imgs.search.brave.com/m3AjEyYqrqs66D2V3HzEOVsAP9yRCKGsKsLCf-_NFgo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzYyLzYzLzY1/LzM2MF9GXzQ2MjYz/NjUwMl85Y0RBWXV5/VnZCWTRxWUpsSGpX/N3ZxYXI1SFlTOGg4/eC5qcGc" size={"32px"} round={true} />
                    <div className='ml-2'>
                        <h1 className='font-bold'>Video Title is here abcdsdfsdf </h1>
                        <p className='text-small text-gray-500'>Shubham Bartwal</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoCard