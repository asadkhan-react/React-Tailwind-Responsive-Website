import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
    <div className='max-w-[95%] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-9 text-gray-300'>
        <div className=''>
            <h1 className='w-full text-3xl font-bold text-white'>PORTFOLIO.</h1>
            <p className='py-4 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare className='hover:scale-125 duration-500 cursor-pointer bg-white text-[#262cbe]' size={30} />
                <FaInstagram className='hover:scale-125 duration-500 cursor-pointer bg-white text-[#262cbe]' size={30} />
                <FaTwitterSquare className='hover:scale-125 duration-500 cursor-pointer bg-white text-[#262cbe]' size={30} />
                <FaGithubSquare className='hover:scale-125 duration-500 cursor-pointer bg-white text-[#262cbe]' size={30} />
                <FaDribbbleSquare className='hover:scale-125 duration-500 cursor-pointer bg-white text-[#262cbe]' size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex flex-wrap justify-between '>
            <div className='mb-5'>
                <h6 className='font-medium md:text-[18px] text-white'>News & Info</h6>
                <ul>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Press Releases</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>About Portfolio</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Service Support</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Newsletter</li>
                </ul>
            </div>            
            <div className='mb-5'>
                <h6 className='font-medium md:text-[18px] text-white'>Pages</h6>
                <ul>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Home</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Services</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>About</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Contact</li>
                </ul>
            </div>            
            <div className='mb-5'>
                <h6 className='font-medium md:text-[18px] text-white'>Locations</h6>
                <ul>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Lahore</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Karachi</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Multan</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Bahawalnagar</li>
                </ul>
            </div>            
            <div className='mb-5'>
                <h6 className='font-medium md:text-[18px] text-white'>Legal</h6>
                <ul>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Claim</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Policy</li>
                    <li className='hover:scale-125 duration-500 py-2 text-white cursor-pointer text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
    );
  };
  
  export default Footer;