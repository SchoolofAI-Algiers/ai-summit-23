import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { links } from './links'

const MobileNav = () => {
    const [isOpen,setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen((prev)=>!prev)
    }

    const handleScroll = (event) => {
        event.preventDefault();
        setIsOpen(false)
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
    <div className='md:hidden relative' >
        <FaBars className='text-3xl' onClick={handleOpen} />
        {isOpen && (
            <div className='absolute top-8 right-0 py-4 flex flex-col gap-y-6 z-50 items-center justify-center bg-ai-blue text-white w-40' >
                {links.map((link,index)=>(
                    <li key={index} className='text-xl list-none	'  >
                        <a href={`#${link.toLowerCase()}`} onClick={handleScroll} >{link}</a>
                    </li>
                ))}
            </div>
        )}
    </div>
  )
}

export default MobileNav