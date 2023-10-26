import React from 'react'

import image_retro_pcs from '../assets/images/image-retro-pcs.jpg'
import image_top_laptops from '../assets/images/image-top-laptops.jpg'
import image_gaming_growth from '../assets/images/image-gaming-growth.jpg'

export default function ArticleHighlight() {
  return (
    <article className=' flex flex-col gap-8 lg:flex-row lg:gap-0 lg:justify-between'>
        <section className=' flex gap-5 lg:w-[332px]'>
            <img src={image_retro_pcs} alt="image-retro-pcs" className=' h-32'/>
            <div className=' h-32 flex flex-col justify-between'>
                <h2 className=' text-[hsl(233,8%,79%)] text-3xl font-inter-bold'>01</h2>
                <h4 className=' text-[hsl(240,100%,5%)] text-xl font-inter-extrabold lg:text-[15px]'><a href="" className=' hover:text-[hsl(5,85%,63%)]'>Reviving Retro PCs</a></h4>
                <p className=' text-[hsl(236,13%,42%)]'>What happens when old PCs are given modern upgrades?</p>
            </div>
        </section>

        <section className=' flex gap-5 lg:w-[332px]'>
            <img src={image_top_laptops} alt="image-top-laptops" className=' h-32'/>
            <div className=' h-32 flex flex-col justify-between'>
                <h2 className=' text-[hsl(233,8%,79%)] text-3xl font-inter-bold'>02</h2>
                <h4 className=' text-[hsl(240,100%,5%)] text-xl font-inter-extrabold lg:text-[15px]'><a href="" className=' hover:text-[hsl(5,85%,63%)]'>Top 10 Laptops of 2022</a></h4>
                <p className=' text-[hsl(236,13%,42%)]'>Our best picks for various needs and budgets.</p>
            </div>
        </section>

        <section className=' flex gap-5 lg:w-[332px]'>
            <img src={image_gaming_growth} alt="image-gaming-growth" className=' h-32'/>
            <div className=' h-32 flex flex-col justify-between'>
                <h2 className=' text-[hsl(233,8%,79%)] text-3xl font-inter-bold'>03</h2>
                <h4 className=' text-[hsl(240,100%,5%)] text-xl font-inter-extrabold lg:text-[15px]'><a href="" className=' hover:text-[hsl(5,85%,63%)]'>The Growth of Gaming</a></h4>
                <p className=' text-[hsl(236,13%,42%)]'>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </section>
    </article>
  )
}
