"use client"
import React from 'react'
import img1 from "/public/images/signup.svg"

const Login = () => {
  const handleform = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);   
  };
  
  return (
    <>
      <div className="container p-10 overflow-hidden h-[80vh] flex items-center justify-center md:gap-1 ">
      <div 
  className="left hidden md:block min-h-full w-1/2" 
  id="notu" 
  style={{ backgroundImage: `url(${img1.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      </div>


        <div className="right pb-10 md:w-1/2">
          <form action={handleform} className='flex flex-col items-center space-y-4'>
           <div className='flex flex-col items-center m-6'>
           <h1 className='text-4xl font-bold'>Create an account</h1>
           <h5 className=''>Enter your details below</h5>
           </div>
            <input className='outline-none border-2 border-b-yellow-300 border-transparent p-1' type="text" name="name" placeholder='Name' required/>
            <input className='outline-none border-2 border-b-yellow-300 border-transparent p-1' type="text" name="email" placeholder='Enter email or phone' required/>
            <input className='outline-none border-2 border-b-yellow-300 border-transparent p-1' type="password" name="password" placeholder='Password' required />
            <button className='bg-orange-600 text-white p-3'>Create Account</button>
            <button className=' p-4 border-2 border-gray-300'><i className="fa-brands fa-google fa-beat mr-2"></i>Sign up with Google</button>
            <p className='pb-9'>Already have an account? <span className='font-bold cursor-pointer border-2 border-b-black border-transparent p-1 '>log in</span></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login


