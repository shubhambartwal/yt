import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "react-avatar";
import { CiVideoOn } from "react-icons/ci";
const Navbar = () => {
    return (<div className="flex justify-between ">
        <div className=" flex items-center justify-between  w-[10%]">
            <GiHamburgerMenu className='ml-2 ' size={"24px"} />
            <div><img className='w-20 py-2' src="https://imgs.search.brave.com/L8Uc0Y8Zs2sO_dSbYLFamzQu1iYYCSrwmTY_gtypaqE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzhn/emNyNlJwR1N0dlpG/QTJxUnQ0djYtMzIw/LTgwLmpwZw" alt="yt logo" />
            </div>
        </div>
        <div className="flex  w-[40%] items-center">

            <div className=' w-full '>
                <input type="text" placeholder='Search' className=' border outline-none border-stone-500 w-full pl-2 rounded-l-full py-1' /></div>
            <button   className=' border px-3 py-1 rounded-r-full'><CiSearch size={"24px"}/></button>
        </div>
        <div className="px-2 flex justify-between items-center w-[8%]">
            <CiVideoOn size={"30px"} />
            <IoIosNotifications size={"30px"} className=''/>
            <Avatar src="https://imgs.search.brave.com/m3AjEyYqrqs66D2V3HzEOVsAP9yRCKGsKsLCf-_NFgo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzYyLzYzLzY1/LzM2MF9GXzQ2MjYz/NjUwMl85Y0RBWXV5/VnZCWTRxWUpsSGpX/N3ZxYXI1SFlTOGg4/eC5qcGc" size={"32px"} round={true} />
        </div>
    </div>)
}

export default Navbar