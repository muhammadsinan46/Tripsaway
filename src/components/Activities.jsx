import React from 'react';
import resorts from '../assets/resortsImage.jpg';
import cruises from '../assets/houseboats.jpg';
import fishing from '../assets/fishing.jpg'

function Activities() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px] '>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold  '>Resorts</h3>
            <img className='w-full h-full relative object-cover border-4 border-white shadow-lg' src={resorts} alt='resortImage'/>
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold  '>Leisure Trips</h3>
            <img className='w-full h-full relative object-cover border-4 border-white shadow-lg' src={cruises} alt='cruises'/>
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Excursions</h3>
            <img className='w-full h-full relative object-cover border-4 border-white shadow-lg' src={fishing} alt='excursions'/>
        </div>



    </div>
  )
}

export default Activities