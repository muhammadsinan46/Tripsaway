import React from 'react'
import {TbBrandTripadvisor} from 'react-icons/tb';

function Footer() {
  return (
    <div  className='max-w-[114px] w-full py-8 m-auto border-t-4 '>
        <div className=' flex flex-col items-center m-auto justify-center ' >
            <TbBrandTripadvisor size={30} className='text-[var-(--primary-dark)] mr-2 ' />
    
            <h1 className='text-2xl font-bold text-gray-700 '>TRIPSAWAY</h1>
            <p className='text-gray-700 p-2  '>Copyright@2023</p>
        </div>
    </div>
  )
}

export default Footer