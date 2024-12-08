 
"use client"
import React from 'react'
import img from "/public/images/dinner_set_a601.jpg"
import Image from 'next/image'

const Login = () => {
  const handleform = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);   
  };
  return (
    <>
      <div className="container flex items-center justify-center md:gap-28 mb-5 lg:gap-60">
        <div className="left hidden md:block" id='notu'>
          <Image src={img} alt="logo" width={200} height={100}/>
        </div>
        <div className="right ">
          <form action={handleform} className='flex flex-col items-center space-y-4'>
           <div className='flex flex-col items-center m-6'>
           <h1 className='text-4xl font-bold mb-4'>Create an account</h1>
           <h5 className=''>Enter your details below</h5>
           </div>
            <input className='outline-none border-2 border-b-yellow-300 border-transparent p-1' type="text" name="name" placeholder='Name' />
            <input className='outline-none border-2 border-b-yellow-300 border-transparent p-1' type="text" name="name" placeholder='Enter email or phone' />
            <input className='outline-none border-2 border-b-yellow-300 border-transparent p-1' type="password" name="password" placeholder='Password' />
            <button className='bg-orange-600 text-white p-3'>Create Account</button>
            <button className=' p-4 border-2 border-gray-300'><i className="fa-brands fa-google fa-beat mr-2"></i>Sign up with Google</button>
            <p>Already have an account? <span className='font-bold cursor-pointer border-2 border-b-black border-transparent p-1 '>log in</span></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login


