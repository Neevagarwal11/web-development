import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";

function cards() {
  return (
    <div className='w-full h-screen flex gap-5 px-20 '>
        <div className=' relative card-container h-[50vh] w-1/2'>
            <div className='card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center' >
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" className='w-36'/>
                <button className='cursor-pointer absolute left-10 bottom-10 border-[1px] rounded-full px-4 py-[0.2vw] flex gap-0 border-[#CDEA68] text-[#CDEA68] font-["neue"]'> <MdOutlineCopyright className='text-2xl text-[#CDEA68]'/>2019-2022</button>
            </div>
        </div>


        <div className='flex gap-5 h-[50vh] card-container w-1/2'>
            
        <div className='card w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center relative'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" className='w-36' />
            <button className='cursor-pointer absolute left-6 bottom-8 border-[1px] rounded-full px-4 py-[0.2vw] flex gap-0 border-zinc-300 text-zinc-300 font-["neue"] capatalize ' >Rating 5.0 on clutch</button>
        </div>
        <div className='card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center relative'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className='w-32' />
            <button className='cursor-pointer absolute left-6 bottom-8 border-[1.5px] rounded-full px-4 py-[0.2vw] flex gap-0 border-zinc-300 text-zinc-300 font-["neue"] capatalize ' >Business Bootcamp alumini</button>
        </div>

        </div>
    </div>
  )
}

export default cards