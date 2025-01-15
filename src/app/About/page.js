// import React from 'react'
// import Image from 'next/image'
// import About from "/public/images/about us.jpg"
// import Card from '../(components)/Testimonial/Testimonial';
// import { FcSalesPerformance } from "react-icons/fc";
// import { BsCurrencyDollar } from "react-icons/bs";
// import { FaShoppingBag } from "react-icons/fa";
// import profiledata from "../(components)/Profile/profiles.json"
// import Profile from '../(components)/Profile/Profile';

// const Page = () => {
//    const testimonialData = [
//       {
//         icon: <FcSalesPerformance />,
//         value: '10.5k',
//         description: 'Sellers active on our site',
//         link: '/',
//       },
//       {
//         icon: <BsCurrencyDollar />,
//         value: '33k',
//         description: 'Monthly Product Sale',
//         link: '/',
//       },
//       {
//         icon: <FaShoppingBag />,
//         value: '45.5k',
//         description: 'Customers active on our site',
//         link: '/',
//       },
//     ];
   
//   return (
//     <>
//    <main className='p-20'>
//    <div className="container flex">
//         <div className="left lg:w-1/2 p-3">
//             <h1 className='text-4xl mb-4'>Our Story</h1>
//             <p className='mb-2 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque esse aperiam! Sequi, blanditiis natus corporis pariatur impedit et quam eius magnam ut, maxime excepturi ipsam optio porro provident ea.</p>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur itaque, autem ipsum, eos nihil ab impedit molestiae pariatur?</p>
//         </div>
//         <div className="right hidden lg:block">
//           <Image src={About} alt="about us" width="100%" height="100%"/>
//         </div>
//     </div>

//     <div className="testimonial">
//          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-16 border-b-2 border-gray-200 mb-20">
//           {testimonialData.map((data, index) => (
//             <Card key={index} data={data} />
//           ))
//           }
//         </div>

        
//     </div>

//     <div className="profiles flex flex-col sm:flex-row gap-20 items-center justify-center flex-wrap">
//       {
//           profiledata.map((curele , index)=>{
//             return <Profile key={index} data={curele}/>
//           })
//       }
//     </div>
//    </main>
//     </>

//   )
// }

// export default Page

import React from 'react';
import Image from 'next/image';
import About from '/public/images/about us.jpg';
import Card from '../(components)/Testimonial/Testimonial';
import { FcSalesPerformance } from 'react-icons/fc';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import profiledata from '../(components)/Profile/profiles.json';
import Profile from '../(components)/Profile/Profile';

const Page = () => {
  const testimonialData = [
    {
      icon: <FcSalesPerformance />,
      value: '10.5k',
      description: 'Sellers active on our site',
      link: '/',
    },
    {
      icon: <BsCurrencyDollar />,
      value: '33k',
      description: 'Monthly Product Sale',
      link: '/',
    },
    {
      icon: <FaShoppingBag />,
      value: '45.5k',
      description: 'Customers active on our site',
      link: '/',
    },
  ];

  return (
    <>
      <main className="px-6 sm:px-10 lg:px-20 py-10">
        {/* About Section */}
        <div className="container flex flex-col lg:flex-row items-center gap-10">
          <div className="left lg:w-1/2 p-3">
            <h1 className="text-3xl sm:text-4xl mb-4 font-bold">Our Story</h1>
            <p className="mb-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              eaque esse aperiam! Sequi, blanditiis natus corporis pariatur
              impedit et quam eius magnam ut, maxime excepturi ipsam optio porro
              provident ea.
            </p>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              tenetur itaque, autem ipsum, eos nihil ab impedit molestiae
              pariatur?
            </p>
          </div>
          <div className="right lg:w-1/2">
            <Image
              src={About}
              alt="about us"
              className="rounded-lg shadow-lg"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonialData.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </div>

        {/* Profiles Section */}
        <div className="profiles flex flex-col sm:flex-row gap-32 items-center justify-center flex-wrap py-10">
          {profiledata.map((curele, index) => (
            <Profile key={index} data={curele} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;

