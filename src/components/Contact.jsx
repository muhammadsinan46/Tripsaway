import React from 'react';
import image from '../assets/sampleIMg.jpg'

function Contact() {
  return (
    <div id='contact' className='max-w-[1140px] w-full m-auto p-4 py-16 '>
        <h2 className='text-center text-gray-700'>Sent us a message</h2>
        <p className='text-center text-gray-700'>
            We' re standing by!
        </p>
        <div className='grid md:grid-cols-2' >
            <img
             src={image} 
             alt='/'
              className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' 
             />
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2' type='text' placeholder='Firstname '/>
                    <input className='border m-2 p-2' type='text' placeholder='Lastname '/>
                    <input className='border m-2 p-2' type='email' placeholder='Email '/>
                    <input className='border m-2 p-2' type='tel' placeholder='Phone'/>
                    <input className='border col-span-2 p-2 m-2 ' type='text' placeholder='Address'/>
                    <textarea className='boder col-span-2 p-2 m-2'  id="" cols="30" rows="10" placeholder='Type Here......'></textarea>
                    <button className='col-span-2 '>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact