import React from 'react'
import BGVideo from '../assets/backgroundvid.mp4'
import LandingNavbar from '../components/LandingNavbar'


const Landing = () => {
  return (
    <div className='relative w-screen min-h-screen z-10 overflow-hidden'>
      <LandingNavbar />
      <video src={BGVideo} type="video/mp4" autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-90' />
    </div>
  )
}

export default Landing