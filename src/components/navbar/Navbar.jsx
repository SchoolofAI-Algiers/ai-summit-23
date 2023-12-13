import React from 'react'
import { links } from './links'
import MobileNav from './MobileNav'

const Navbar = () => {

    const handleScroll = (event) => {
        event.preventDefault();
    
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      };

  return (
    <nav className='px-4 lg:px-10 py-2' >
        <div className='flex items-center justify-between gap-4 font-kanit' >
            <img src="/images/logo.png" alt="logo" className='w-[50px] sm:w-[60px] md:w-[70px]' />
            <ul className='hidden md:flex flex-row items-center md:gap-x-6 lg:gap-x-10'>
                {links.map((link,index)=>(
                    <li key={index} className='text-xl font-bold hover:text-ai-blue'  >
                        <a href={`#${link.toLowerCase()}`} onClick={handleScroll}>{link}</a>
                    </li>
                ))}
            </ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyyQMAs1RPVyzlfjJVW6v4Q22ndBhpAbdY6agE8QSV3gi8TQ/viewform?usp=send_form" target='_blank'  rel="noreferrer">
            <button className='bg-ai-blue hover:bg-blue-900 px-8 py-1 text-white rounded-md border-none' >Register</button>
            </a>
            <MobileNav />
        </div>
    </nav>
  )
}

export default Navbar