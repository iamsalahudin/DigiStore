import React from 'react'
import Image from 'next/image'
import About from "/public/images/about us.jpg"
import Card from '../(components)/Testimonial/Testimonial'
import { FaSellsy } from "react-icons/fa";

const Page = () => {
   const testimonialData = 
      {
        icon: <FaSellsy />,
        value: '10.5k',
        description: 'Sellers active on our site',
        link: '/',
      }
    
  
  return (
    <>
    <div className="container flex">
        <div className="left lg:w-1/2 p-8">
            <h1 className='text-4xl'>Our Story</h1>
            <p className='mb-2 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque esse aperiam! Sequi, blanditiis natus corporis pariatur impedit et quam eius magnam ut, maxime excepturi ipsam optio porro provident ea.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur itaque, autem ipsum, eos nihil ab impedit molestiae pariatur?</p>
        </div>
        <div className="right hidden lg:block">
          <Image src={About} alt="about us" width="100%" height="100%"/>
        </div>
    </div>

    <div className="testimonial">
      <Card data={testimonialData}/>
    </div>
    </>

  )
}

export default Page
