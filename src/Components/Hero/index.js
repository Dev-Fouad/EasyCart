import React from 'react'
import {FiArrowRight} from "react-icons/fi";
import pap from "../Assets/Mobile app store badge.png"
import japp from "../Assets/Mobile app store badge.jpg"
import Appss from "../Assets/_Play button.png"
import "./style.css"

const Hero = () => {
  return (
    <div className='justify-center h-[90rem] flex flex-col items-center '>
      
      <div className='border-2 w-[305px] rounded-[16px] py-[3px] px-[2px] bg-[#FFF4ED] flex space-x-[12px] font-inter  mr-[3rem]'>
        <p className=' font-medium leading-5 text-[14px] bg-[#EF6820] w-[55px] text-[#FFFFFF] h-[24px] rounded-[16px] text-center pt-[2px]'>New!</p>
        <p className='flex items-center'>Download the new iOS app<i><FiArrowRight style={{ color: "#667085",marginLeft: "6px"}}/></i></p>
      </div>

      <h2 className=' text-[#000000] font-bold text-[30px] leading-[38px] w-[90%] mt-[1rem]'>Sell, Market, and with your customers in one app for free</h2>
      <p className='  font- leading-[23px] text-[#000000] text-[20px] mt-[28px]  w-[90%]'>Create an ecommerce website, send updates and promotions, combine all your DMs into one inbox.</p>

      <div className='flex mt-[38px] w-[90%] space-x-[19px]'>
        <img src={pap} alt="" className=' w-[148px]'></img>
        <img src={japp} alt="" className=' w-[148px]'></img>
      </div>
      
      
      <div className='Back relative'>
        <img src={Appss} alt="" ></img>

        <div className=' max-w-[345px] h-[125px] bg-[#ffff] p-[10px] absolute bottom-[23px]'>
          <p className='text-[15px] leading-[17px] font-inter'>I've become more conscious of how I spend my money and also about investing. Now, I feel comfortable spending knowing my Cowrywise account is there.</p>
          <div className='flex space-x-[10px]  pt-[5px]'>
            <h2 className=' font-semibold text-[#344054] flex'>C.E.O Ankara Stores</h2>
            <h6 className=' flex  font-semibold text-[#667085] text-[14px] leading-[16px]'>Folake Akinoso</h6>
          </div>
        </div>
      
      </div>
   


    </div>
  )
}

export default Hero;
