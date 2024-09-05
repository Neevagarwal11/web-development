import React from 'react'
import Navbar from './components/navbar';
import Landing from './components/landing';
import Marquee from './components/marquee';
import About from './components/about';
import Eyes from './components/eyes';
import Feature from './components/feature'
import Cards from './components/cards'
import Footer from './components/footer'
function App() {
  return (
    <div className='w-full min-h-screen bg-[#F3F3F3] text-black '>
      <Navbar></Navbar>
      <Landing></Landing>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
      <Feature></Feature>
      <Cards></Cards>
      <Footer></Footer>
    </div>

  )
}

export default App