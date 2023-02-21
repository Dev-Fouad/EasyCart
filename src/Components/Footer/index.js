import React from 'react'
import pap from "../Assets/Mobile app store badge (2).png"
import japp from "../Assets/Mobile app store badge (1).png"
import japps from "../Assets/iPhone 14.png"
import Papp from "../Assets/Vector 3 (2).png"
import Amps from "../Assets/Vector 4 (2).png"
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className=' h-[407px] bg-[#000000] text-[#FFFFFF] relative items-center flex  justify-center space-x-[140px] max-md:flex-col max-md:h-[41rem] max-md:space-x-0 max-md:mt-7'>
        <div className=' z-50'>
          <h2 className='text-[48px] font-rob leading-[52.8px] font-bold max-md:w-[300px]  max-md:text-[35px] max-md:text-center'>Get a free easycart account</h2>
          <p className='text-[#EAECF0] mt-[8px] text-[20px] font-inter '>Ready to start selling for free?</p>

          <div className='flex space-x-6 mt-[32px]'>
            <img src={pap} alt="" className=' w-[148px]'></img>
            <img src={japp} alt="" className=' w-[148px]'></img>
          </div>
        </div>

        <img src={japps} alt="" className=' w-[400px] max-md:w-[350px] max-md:mt-[5rem] max-lg:w-[350px] z-50'></img>
        <img src={Papp} alt="" className=' absolute right-[1192px] top-7 max-md:hidden max-lg:hidden'></img>
        {/* <img src={Amps} alt="" className=' absolute left-[700px] max-md:hidden max-lg:hidden max-xl:hidden'></img> */}
      </div>

      <div className=' h-[9rem] flex  items-center justify-evenly max-md:flex-col'>
        <p>EasyCart © 2022. All Rights Reserved.</p>

        <div className='flex space-x-[24px]'>
          <p className=' text-base'>Privacy Policy</p>
          <p className=' text-base text-[#000000]'>Terms of service</p>
        </div>

        <div className='flex space-x-6 text-[#667085]'>
          <BsFacebook  st/>
          <BsTwitter />
          <BsInstagram />
          <BsLinkedin />
        </div>


      </div>

    </>
  )
}

export default Footer