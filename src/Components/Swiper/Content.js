import React from 'react'
import DPP from "../Assets/Ellipse 3.png"

const Content = () => {
  return (
    <div className=' h-[25rem] items-center flex flex-col justify-center '>
        <div className='hover:text-[#F2F4F7] font-rob text-[18px] text-[#344054]  leading-[25px] p-[23px] max-md:p-[18px]  bg-[#F9FAFB] h-[266px] max-md:h-[285px] w-[428px] max-md:w-[95%] hover:bg-[#EF6820] rounded-r-[30px] rounded-tl-[30px] flex flex-col text-center justify-center'>
           <p className=' max-md:text-center text-start'>“Create an ecommerce website, send updates and promotions, combine all your DMs into one inbox. website, send updates and promotions, combine all your DMs into one inbox. combine all your DMs into one inbox. website”</p>


           <div className=' flex mt-[33px] space-x-[4px]  max-md:items-center max-md:justify-center'>
             <img src={DPP} alt=''className=' w-[40px] h-[40px]'/>  

             <div className=''>
                <p className=' font-rob text-[16px]'>Create an ecommerce</p>  
                <p className='text-[#D0D5DD] text-[14px]'>Create an ecommerce</p>  
             </div>
           </div>
        </div>
    </div> 
    )
}

export default Content;
