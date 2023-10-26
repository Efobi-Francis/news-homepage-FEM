import React from 'react'

import web3_mobile from '../assets/images/image-web-3-mobile.jpg'
import web3_desktop from '../assets/images/image-web-3-desktop.jpg'

export default function Hero() {
  return (
    <div className=' mt-5 lg:mt-0'>
        <img src={web3_mobile} alt="mobile hero image" className=' lg:hidden' />
        <img src={web3_desktop} alt="mobile hero desktop" className=' hidden lg:block' />
        <div className=' lg:flex lg:mt-8 lg:gap-20'>
          <h1 className=' font-inter-extrabold text-5xl font-extrabold my-5 lg:hidden'>The Bright Future of Web 3.0?</h1>
          <h1 className=' hidden lg:block font-inter-extrabold font-extrabold text-6xl whitespace-nowrap '>The Bright <br />Future of <br />Web 3.0?</h1>
          <div>
            <p className=' mb-5 tracking-wide text-[hsl(236,13%,42%)] lg:mb-9'>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?
            </p>
            <button className=' bg-[hsl(5,85%,63%)] text-[hsl(36,100%,99%)] py-3 px-6  uppercase font-normal tracking-[0.4em] hover:bg-[hsl(240,100%,5%)]'>Read more</button>
          </div>
        </div>
    </div>
  )
}
