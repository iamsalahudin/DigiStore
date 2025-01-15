"use client"
import React from 'react'

import pik2 from "/public/images/loginimage.avif"
const page = () => {

  const handleform = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <>
      <div className="container overflow-hidden h-[80vh] flex items-center justify-center md:gap-1 ">
        <div
          className="left hidden md:block min-h-full w-1/2"
          id="notu"
          style={{ backgroundImage: `url(${pik2.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        </div>
        <div className="container flex flex-col items-center md:w-1/2 p-3">
          <div className="right flex flex-col space-y-7">
            <h1 className='text-4xl font-bold'>Login to Exclusive</h1>
            <h2 className='text-xl'>Enter your details below</h2>
            <form action={handleform} className='flex flex-col space-y-5 '>
              <input className='border-2 pb-2 border-b-yellow-400 border-transparent' type="text" name='EmailPhone' placeholder='Email or Phone number' required />
              <input className='border-2 pb-2 border-b-yellow-400 border-transparent' type="password" name='password' placeholder='Password' required />
              <div className='flex justify-between items-center pb-5'>
                <button className='bg-red-600 p-3 rounded-md font-bold text-white'>Login</button>
                <button className='text-red-600'>Forget password?</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default page
