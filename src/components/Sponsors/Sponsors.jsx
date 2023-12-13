import React from 'react'
import bkfire from './bkfire.jpg'
import rect from './rect.png'
import rectt from './rectt.png'

const Sponsors = () => {
  return (
    <div id='sponsors' className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-start items-center space-y-12 mt-7 ' >
       <h1 className='text-5xl  font-kanit font-bold'> Sponsors </h1>
          <div className='flex flex-col justify-end items-center h-[60%] w-[55%] md:w-[40%] lg:w-[33%] rounded-[35px] border-2 border-blue shadow-lg shadow-blue' >
                <img src={bkfire} alt="" className='w-full h-[70%] rounded-tl-[35px] rounded-tr-[35px]' />
                <div className='flex h-[30%] w-full rounded-br-[32px] rounded-bl-[32px] justify-center items-center border-t-2 border-blue bg-blue'>
                  <p className='text-3xl font-bold font-kanit text-white'> BK Fire </p>
                </div>
               
          </div>

          <img src={rectt} alt="" className='absolute bottom-5 left-0 invisible md:visible' />
          <img src={rect} alt="" className='absolute bottom-20  left-0 invisible md:visible' />
         
    </div>
  )
}

export default Sponsors