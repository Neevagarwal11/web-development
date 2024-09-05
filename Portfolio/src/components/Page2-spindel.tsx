import React, { useEffect, useRef , useLayoutEffect } from 'react'
import {gsap} from 'gsap';
import Spindel from '../assets/Page2-spindel.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function spindel() {
     const spindelRef = useRef(null)


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          const t = gsap.timeline({
            scrollTrigger: {
              trigger: spindelRef.current, // Set trigger to the reference element
              scrub: 1,
            },
          });
    
          t.to("#rotate img", { // Properly scoped selector within the context
            rotate: '350deg',
            duration: 10,
            scrub:1,
          });
        }, spindelRef); // Ensure gsap context is using the correct reference
    
        return () => ctx.revert();
      }, []);
   
    return ( 


    <div className='flex items-center w-full justify-center flex-col h-[20%] '>
    <div  className=' w-[70%] z-0 w-full h-[0%] flex items-center justify-center'>
        <div ref={spindelRef}  id='rotate'>
        <img src={Spindel} id='img' alt="Spindel" />
        </div>
    </div>
    </div>
  )
}

export default spindel