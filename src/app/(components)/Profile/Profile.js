import React from 'react'
import Image from 'next/image'
import Hussain from "/public/images/hussain.jpg"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Profile = ({ data }) => {
    const { img , name, desig, twitter, instagram, linkedin } = data
    const icon = {
        FaXTwitter: <FaXTwitter />,
        FaInstagram: <FaInstagram />,
        FaLinkedinIn: <FaLinkedinIn />
    }
    return (
        <>
            <div className="card">
                <div className="img mb-3">
                    <Image src={Hussain} alt="img" width={200} height={100} />
                </div>

                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-lg font-semibold'>{desig}</p>
                <div className='flex space-x-5 mt-3 mb-3 text-2xl'>
                    <p>{icon[twitter]}</p>
                    <p>{icon[instagram]}</p>
                    <p>{icon[linkedin]}</p>
                </div>
            </div>
        </>
    )
}

export default Profile
