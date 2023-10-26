import React, { useState } from 'react'

import logo from '../assets/images/logo.svg'
import Icon_menu from '../assets/images/icon-menu.svg'
import Icon_menu_close from '../assets/images/icon-menu-close.svg'


export default function navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(true)
    }

    const handleClickClose = () => {
        setIsOpen(false)
    }


  return (
    <section>
        <div className=' flex justify-between items-center w-full'>
            <img src={logo} alt="logo" />
            <nav className=' hidden lg:block lg:text-[hsl(236,13%,42%)]'>
                <ul className=' flex w-[435px] justify-between'>
                    <li><a href="" className=' hover:text-[hsl(5,85%,63%)]'>Home</a></li>
                    <li><a href="" className=' hover:text-[hsl(5,85%,63%)]'>New</a></li>
                    <li><a href="" className=' hover:text-[hsl(5,85%,63%)]'>Popular</a></li>
                    <li><a href="" className=' hover:text-[hsl(5,85%,63%)]'>Trending</a></li>
                    <li><a href="" className=' hover:text-[hsl(5,85%,63%)]'>Categories</a></li>
                </ul>
            </nav>
            <button onClick={handleClickOpen} className=' lg:hidden'><img src={Icon_menu} alt="hambugar-icon" className=' h-5'/></button>
            {isOpen && (
                <>
                    <div className=' w-full h-screen bg-[hsl(240,100%,5%)]/50 absolute inset-0'></div>

                    <div className=' bg-[hsl(36,100%,99%)] h-screen w-2/3 absolute top-0 right-0 flex flex-col px-5'>
                        <button onClick={handleClickClose} className=' mt-4 mb-[90px] flex w-full justify-end'> <img src={Icon_menu_close} alt="icon-close" /></button>
                        <ul className=' h-[210px] flex flex-col justify-between tracking-wide font-inter-bold'>
                            <li>Home</li>
                            <li>New</li>
                            <li>Popular</li>
                            <li>Trending</li>
                            <li>Categories</li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    </section>
  )
}
