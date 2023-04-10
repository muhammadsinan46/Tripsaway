import React from 'react'
import heroImage from '../assets/heroPic.jpg'

function Hero() {
  return (
    <div className='w-full h-[90vh] '>
        <img src={heroImage} alt='heroImage' className='w-full h-full object-cover' />
        <div className='max-w-[1140px] m-auto'>
          <div className='absolute top-[40%] w-full md:-[60%] max-w-[800px] h-full flex flex-col text-white'>
            <h1 className='flex text-5xl justify-center '> Kerala Holiday Trips</h1>
            <p className='flex justify-center py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
           
          </div>
        </div>
    </div>
  )
}
export default Hero