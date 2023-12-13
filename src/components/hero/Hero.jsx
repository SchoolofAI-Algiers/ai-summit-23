import React from 'react'

const Hero = () => {
  return (
    <div className='w-full mt-10 mb-16' >
        <div className='px-4 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex-1 flex flex-col items-center md:items-start gap-2' >
                <p className='font-kanit' >School of ai Algiers</p>
                <h1 className='text-4xl sm:text-5xl text-center md:text-start lg:text-6xl xl:text-7xl font-bold font-kanit uppercase' >new edition</h1>
                <h1 className='text-4xl sm:text-5xl text-center md:text-start lg:text-6xl xl:text-7xl uppercase text-ai-blue font-bold font-kanit'>AI SUMMIT <span className='text-ai-orange' >2023</span> Is here</h1>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyyQMAs1RPVyzlfjJVW6v4Q22ndBhpAbdY6agE8QSV3gi8TQ/viewform?pli=1" target="_blank" rel="noopener noreferrer">
  <button class="bg-orange-400 hover:bg-orange-500 px-8 py-1 text-white rounded-md border-none w-fit">Register Now</button>
</a>

            </div>
            <div className='flex-1 flex items-center justify-center' >
                <img src="/images/hero-photo.png" alt="hero" className='w-[15rem] sm:w-[25rem] md:w-[25rem] lg:w-[32rem]' />
            </div>
            

        </div>

    </div>
  )
}

export default Hero