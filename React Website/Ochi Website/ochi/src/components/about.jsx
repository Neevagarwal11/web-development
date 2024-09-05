import React from 'react'

function about() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-rl-3xl text-black  '>
        <h1 className='font-["neue"] text-[4.2vw] leading-[4vw] tracking-tight text-light'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

        <div className='w-full pt-8 border-t-[1px] flex gap-5 border-[#A6BD58] mt-20' >
            <div className='w-1/2 '>
                <h1 className='text-5xl font-["neue"] leading-[1.5vw] '>Our approach:</h1>
                <button className=' flex gap-10 items-center px-7 mt-10 py-4 bg-zinc-900 rounded-[50px] text-white text-xl font-["neue"]' >Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh]'><img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt=""  className='rounded-2xl h-[100%] w-[100%]'/></div>
        </div>
    </div>
  )
}

export default about