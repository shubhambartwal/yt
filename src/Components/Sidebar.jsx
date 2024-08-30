import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
export const Sidebar = () => {
    const sidebarItems = [
        { id: 1, icon: <IoMdHome size={"20px"} />, title: "Home" },
        { id: 2, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        { id: 3, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
        { id: 4, icon: <IoMdHome size={"20px"} />, title: "Home" },
        { id: 5, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        { id: 6, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
        { id: 7, icon: <IoMdHome size={"20px"} />, title: "Home" },
        { id: 8, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        { id: 9, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
        { id: 10, icon: <IoMdHome size={"20px"} />, title: "Home" },
        { id: 12, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        { id: 13, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
        { id: 11, icon: <IoMdHome size={"20px"} />, title: "Home" },
        { id: 14, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        { id: 15, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" }, 
        { id: 16, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        { id: 17, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
        // { id: 1, icon: <IoMdHome size={"20px"} />, title: "Home" },
        // { id: 2, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        // { id: 3, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
        // { id: 4, icon: <IoMdHome size={"20px"} />, title: "Home" },
        // { id: 5, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        // { id: 6, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
        // { id: 7, icon: <IoMdHome size={"20px"} />, title: "Home" },
        // { id: 8, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        // { id: 9, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
        // { id: 10, icon: <IoMdHome size={"20px"} />, title: "Home" },
        // { id: 12, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        // { id: 13, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
        // { id: 11, icon: <IoMdHome size={"20px"} />, title: "Home" },
        // { id: 14, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        // { id: 15, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" }, { id: 1, icon: <IoMdHome size={"20px"} />, title: "Home" },
        // { id: 16, icon: <SiYoutubeshorts size={"20px"} />, title: "Shorts" },
        // { id: 17, icon: <MdSubscriptions size={"20px"} />, title: "Subscription" },
    ]
    const open=useSelector((store)=>store.app.open)
console.log(open)
    return (
        <div className={`left-0 relative  mt-20  ${open?'w-[24%]':'w-[8%]'} overflow-y-scroll h-[calc(100vh-4.625rem)]  justify-center`}>
            {sidebarItems.map((item) =>
            (<div key={item.id} className='flex my-2 mx-2 '>
                {item.icon}
                <p className={`mx-5 ${open?"":'hidden'} `}>{item.title}</p>
            </div>)
            )
            }
        </div>
    )
}
