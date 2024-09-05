import React from 'react'
import Logo from '../assets/output-onlinepngtools (1).png'
function navbar() {
  return (
    <div className='w-full flex flex-row px-10 h-[10vh]  fixed top-0 text-2xl  z-2'>
        <div className='logo w-[10%]  h-[100%] flex flex-row items-center justify-around'> <img src={Logo} alt="" className='w-[20%] h-[35%] '/>
        <h2 className='font-["logo"] text-[1vw] tracking-tighter'>NEEV AGARWAL</h2>
        </div>
    </div>
  )
}

export default navbar