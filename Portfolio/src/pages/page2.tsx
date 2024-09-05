import React, { useEffect, useRef , useLayoutEffect } from 'react'
import Page2Spindel from '../components/Page2-spindel'
import {gsap} from 'gsap';
import img from '../assets/Explore Me.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function page2() {
  gsap.registerPlugin(ScrollTrigger);
  const btnRef = useRef(null)
  useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        const t = gsap.timeline({
          scrollTrigger: {
            trigger:btnRef.current, // Set trigger to the reference element
            scrub: 1,
          },
        });
  
        t.to("#img>img", { // Properly scoped selector within the context
          rotate: '360deg',
          duration:40,
          scrub:2,
        });
      }, btnRef); // Ensure gsap context is using the correct reference
  
      return () => ctx.revert();
    }, []);

  return (
    <div className='h-screen z-10 w-full bg-[#1D1917]  text-white border-2 border-t-[#B09E94] '>
      <Page2Spindel></Page2Spindel>


    <div className='p2-container w-full h-[70%]  absolute flex flex-row'>

      <div className='left flex items-center justify-center font-["degular"] w-[50%] h-[100%] relative left-0'>
        <p className='w-[50%] font-[400] text-2xl'>I'm an Indian undergraduate student and a passionate web developer, specializing in creating dynamic and responsive websites. I'm always eager to learn new technologies and improve my skills in both front-end and back-end development. </p>
      </div>


      <div className='right w-[50%] h-[100%] relative right-0  flex items-center justify-center' >

        <div id='container' className='btn container flex items-center justify-center h-[40%] w-[30%] '>
          <div ref={btnRef} id='img' className='rotate-img absolute flex items-center justify-center'>
          <img src={img} alt="" ></img> 
          </div>
          <div className='rounded-[200px] w-[50%] p-[1em] h-[50%] text-2xl'>PUSH ME!</div>
        </div>

      </div>
    </div>

    </div>
  )
}

export default page2