import React from 'react'
import { FaCircleHalfStroke } from "react-icons/fa6";
import Image from '../assets/image.png'

const login = () => {
  return (
    <div className='bg-[#d8edee] text-center pt-24 pb-24 pl-20 pr-20'>
      <div className='bg-[#ffffff] rounded-[60px]'>
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-2  ' >
          <div className='bg-[#f8fdfc] height-[500px] rounded-l-[60px] '>
            <div className='flex gap-4 px-2 xl:px-20 lg:px-20  text-[#275556] text-3xl font-bold ml-[69px] pt-[25px]'>
              <div className='text-[#00a6ab] mt-[28px] text-2xl ml-[-35px] '>
                <FaCircleHalfStroke />
              </div>
              <h2  className='mt-[20px]'>Ontime.</h2>
            </div>
            <div>
              <p className='py-11 text-[#275556] text-4xl font-bold ml-[-137px]'>Unlock Your</p>
              <h1 className='py-11 text-[#275556] text-4xl font-bold ml-[-28px] mt-[-85px] ' >Team <span className='text-[#00a6ab]'>Performance</span></h1>
              <img className='mt-[-62px] h-[630px] object-cover' src={Image} alt="/"/>
            </div>
          </div>
          <div>
            <p className='text-[#275556] text-2xl font-bold pt-[100px] ml-[-100px]'>Welcome to Online</p>
            <p className='text-[#a0b8b8] py-2  font-bold  ml-[-100px]'>Unlock your team performance</p>
            <p className='text-[#a0b8b8] py-6 ml-[-225px]'>Email address</p>
            <input type='text' name='eamil' placeholder='Enter email address'  className='border  border-[#00a6ab] rounded-md p-3 w-80  text-left  text-[#275556] font-bold'/>
            <p className='text-[#a0b8b8] py-6 ml-[-250px]'>Password</p>
            <input type='text' name='password' placeholder='Enter password' className='border p-3 w-80  text-left rounded-[5px] text-[#a0b8b8]' /> 
            <p className='font-bold text-[#275556] ml-[180px] pt-[20px]'>Forgot password?</p>
            <button type='button' className='border p-3 w-80 mt-[20px]  text-center rounded-[5px] text-[#ffff] bg-[#00a6ab] font-bold'>Login</button>
            <p className='  text-[#275556] font-bold '>Don't have an account? <span className='text-[#00a6ab] '>Register</span></p>
            <p className='text-[#a0b8b8]  mt-[120px] font-bold '>©2021 all rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login