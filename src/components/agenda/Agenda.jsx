import React from 'react'
import bg from './bg.png'
import blobRight from './blob right.png'
import blobLeft from './blob left.png'
import { agenda } from '../../data/agenda'

const Agenda = () => {
  return (
    <section className=' relative py-40 md:py-0' id='agenda'>
        <img src={bg} alt="" className='hidden md:block py-8 h-[60vh] md:h-auto w-full -z-10'/>
        <img src={blobRight} className='hidden md:absolute lg:h-auto h-28 right-0 top-0' alt="" />
        <img src={blobLeft} className='hidden md:absolute lg:h-auto  h-28 left-0 bottom-0' alt="" />
        <div className=' md:mt-0 lg:pt-8 absolute h-full flex flex-col items-center justify-center md:justify-normal space-y-4 top-0 left-0 w-full text-center'>
            <h1 className='title md:mt-28 text-ai-blue md:text-white font-kanit text-3xl lg:text-6xl xl:text-7xl font-bold'>Agenda</h1>
            <div className='md:bg-white shadow-lg bg-ai-blue rounded-xl w-[75%] md:h-[55%] md:w-[55%] p-2 lg:p-8 flex flex-col items-center justify-between '>
                {agenda.map(e=>(
                    <div className='flex gap-4 justify-between text-sm sm:text-xl md:text-2xl lg:text-3xl w-full  font-source-sans font-[700] '>
                        <div className='text-white flex-1 flex items-center justify-center md:text-ai-orange '>
                            {e.from} - {e.to}
                        </div>
                        <div className=' text-white md:text-ai-blue flex items-center justify-center flex-1'>{e.title}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Agenda