import { motion } from 'framer-motion'
import React from 'react'

function marquee() {
  return (
    <div className='w-full py-20  rounded-t-3xl bg-[#004D43] text-[white]'>
        <div className='text border-t-2 flex whitespace-nowrap border-b-2 gap-10 overflow-hidden' >
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity , duration:9}} className='text-[17vw] leading-none font-["founders"] font-semibold uppercase -mb-4 -mt-1 '>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity , duration:9}} className='text-[17vw] leading-none font-["founders"] font-semibold uppercase -mb-4 -mt-1'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity , duration:9}} className='text-[17vw] leading-none font-["founders"] font-semibold uppercase -mb-4 -mt-1'>We are Ochi</motion.h1>
        </div>        
    </div>
  )
}

export default marquee