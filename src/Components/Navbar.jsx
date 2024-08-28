import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    return (<div className="flex items-center justify-between">
        <div className=" flex justify-evenly">
            <GiHamburgerMenu className=' ' />
            <img className='w-24' src="https://imgs.search.brave.com/L8Uc0Y8Zs2sO_dSbYLFamzQu1iYYCSrwmTY_gtypaqE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzhn/emNyNlJwR1N0dlpG/QTJxUnQ0djYtMzIw/LTgwLmpwZw" alt="yt logo" />
        </div>
        <div className="flex justify-evenly">
            <input type="text"  className=''/>
        </div>
        <div className=" flex justify-evenly">
            <div className="button">A</div>
            <div className="button">B</div>
            <div className="button">C</div>
        </div>
    </div>)
}

export default Navbar