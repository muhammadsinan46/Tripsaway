import React from 'react';
import {HiOutlineClock} from 'react-icons/hi';
import {TbBrandTripadvisor} from 'react-icons/tb';
import {BsPhone} from 'react-icons/bs';

function TopBar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>

        <TbBrandTripadvisor size={30} className='text-[var-(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold text-gray-700'>TRIPSAWAY</h1>
        </div>
        <div className='flex '>
            <div className='hidden md:flex items-center px-6'>
                <HiOutlineClock size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>10 AM - 6AM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <BsPhone size={20} className='mr-2 text-[var(--primary-dark)]'/> 
                <p className='text-sm text-gray-700'>+91 888-99-777-66</p>
            </div>
            <button className='rounded hover:rounded-lg'>Get a Free Quote</button>
        </div>
    </div>
  )
}

export default TopBar