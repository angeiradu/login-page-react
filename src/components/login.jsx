import React from 'react'
import { FaCircleHalfStroke } from "react-icons/fa6";
import Image from '../assets/image.png'

const login = () => {
  return (
    <div className='bg-[#d8edee] text-center p-2 md:p-10 lg:p-10 lx:p-10'>
      <div className='bg-[#ffffff] lg:rounded-[60px] xl:rounded-[60px] '>
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-2  ' >
          <div className='bg-[#f8fdfc] height-[500px] rounded-l-[60px] '>
            <div className='flex gap-4 px-2 xl:px-20 lg:px-20  text-[#275556] text-3xl font-bold ml-[69px] pt-[25px]'>
              <div className='text-[#00a6ab] mt-[28px] text-2xl ml-[-35px] '>
                <FaCircleHalfStroke />
              </div>
              <h2  className='mt-[20px]'>Ontime.</h2>
            </div>
            <div>
              <p className='py-11 text-[#275556] text-4xl font-bold md:ml-[-137px]'>Unlock Your</p>
              <h1 className='py-11 text-[#275556] text-4xl font-bold md:ml-[-28px] mt-[-85px] ' >Team <span className='text-[#00a6ab]'>Performance</span></h1>
              <img className='mt-[-62px] h-[630px] object-cover ' src={Image} alt="/"/>
            </div>
          </div>
          <div className='px-[10px] md:px-[50px] lg:px-[100px] xl:px-[100px]'>
            <p className='text-[#275556] text-2xl font-bold pt-[100px] text-left  '>Welcome to Online</p>
            <p className='text-[#a0b8b8] py-2  font-bold text-left '>Unlock your team performance</p>
            <p className='text-[#a0b8b8] py-6 text-left '>Email address</p>
            <input type='text' name='eamil' placeholder='Enter email address'  className=' w-full border  border-[#00a6ab] rounded-md p-3  text-left  text-[#275556] font-bold'/>
            <p className='text-[#a0b8b8] py-6   text-left'>Password</p>
            <input type='text' name='password' placeholder='Enter password' className=' w-full border p-3   text-left rounded-[5px] text-[#a0b8b8] ' /> 
            <p className=' pr-5 font-bold text-[#275556]  pt-[20px]  text-right'>Forgot password?</p>
            <button type='button' className=' w-full border p-3  mt-[20px]  text-center rounded-[5px] text-[#ffff] bg-[#00a6ab] font-bold'>Login</button>
            <p className='  text-[#275556] font-bold pt-8'>Don't have an account? <span className='text-[#00a6ab] '>Register</span></p>
            <p className='text-[#a0b8b8]  mt-[120px] font-bold '>©2021 all rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login