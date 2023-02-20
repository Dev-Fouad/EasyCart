import React from 'react'
import {FiArrowRight} from "react-icons/fi";
import pap from "../Assets/Mobile app store badge.png"
import japp from "../Assets/Mobile app store badge.jpg"
import Appss from "../Assets/_Play button.png"
import "./style.css"

const Hero = () => {
  return (
    <div className='h-[69rem] flex flex-col items-center justify-center  pt-[8rem] lg:flex-row lg:h-[50rem] lg:pt-0'>
      
      <div className='flex flex-col items-center lg:items-start'>
        <div className=' w-[305px] rounded-[16px] py-[3px] px-[2px] bg-[#FFF4ED] flex space-x-[12px] font-inter max-sm:mr-[2.3rem]'>
          <p className=' font-medium leading-5 text-[14px] bg-[#EF6820] w-[55px] text-[#FFFFFF] h-[24px] rounded-[16px] text-center pt-[2px]'>New!</p>
          <p className='flex items-center'>Download the new iOS app<i><FiArrowRight style={{ color: "#667085",marginLeft: "6px"}}/></i></p>
        </div>

        <h2 className=' text-[#000000] font-bold text-[30px] leading-[38px] w-[90%] mt-[1rem] lg:w-[655px] lg:text-[55px] lg:leading-[60px]'>Sell, Market, and Chat, with your customers in one app for free</h2>
        <p className='  font- leading-[23px] text-[#000000] text-[20px] mt-[28px]  w-[90%] lg:w-[578px]'>Create an ecommerce website, send updates and promotions, combine all your DMs into one inbox.</p>

        <div className='flex mt-[38px] w-[90%] space-x-[19px]'>
          <img src={pap} alt="" className=' w-[148px]'></img>
          <img src={japp} alt="" className=' w-[148px]'></img>
        </div>
      </div>
      
      <div className='Back relative'>
        <img src={Appss} alt="" ></img>

        <div className=' lg:w-[459px] w-[93%] h-[120px] bg-[#ffff] py-[12px]  px-[14px] absolute bottom-[23px]'>
          <p className='text-[16px] leading-[17px] '>I've become more conscious of how I spend my money and also about investing. Now, I feel comfortable spending knowing my Cowrywise account is there.</p>
          <div className='flex space-x-[10px]  pt-[5px]'>
            <h2 className=' font-bold text-[#344054] flex'>C.E.O Ankara Stores</h2>
          </div>
        </div>
      
      </div> 
    </div>
  )
}

export default Hero;
