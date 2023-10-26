import React from 'react'

export default function Trending() {
  return (
    <div className=' bg-[hsl(240,100%,5%)] my-10 px-5 py-5 tracking-wider lg:my-0 font-inter-regular lg:tracking-normal'>
        <h3 className=' text-[hsl(35,77%,62%)] text-3xl font-bold mb-10 font-inter-bold'>New</h3>
        <section>
            <p className=' text-[hsl(233,8%,79%)]'>
                <h4 className=' text-[hsl(36,100%,99%)] text-xl mb-2 font-bold'><a href="" className=' hover:text-[hsl(35,77%,62%)]'>Hydrogen VS Electric Cars</a></h4>
                Will hydrogen-fueled cars ever catch up to EVs?
            </p>

            <div className=' h-[2px] w-full bg-[hsl(236,13%,42%)] my-5'></div>

            <p className=' text-[hsl(233,8%,79%)]'>
                <h4 className=' text-[hsl(36,100%,99%)] text-xl mb-2 font-bold'><a href="" className=' hover:text-[hsl(35,77%,62%)]'>The Downsides of AI Artistry</a></h4>
                What are the possible adverse effects of on-demand AI image generation?
            </p>

            <div className=' h-[2px] w-full bg-[hsl(236,13%,42%)] my-5'></div>

            <p className=' text-[hsl(233,8%,79%)]'>
                <h4 className=' text-[hsl(36,100%,99%)] text-xl mb-2 font-bold'><a href="" className=' hover:text-[hsl(35,77%,62%)]'>Is VC Funding Drying Up?</a></h4>
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </p>
        </section>
    </div>
  )
}
