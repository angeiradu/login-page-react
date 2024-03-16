import React from 'react'
import { FaCircleHalfStroke } from "react-icons/fa6";
import Image from '../assets/image.png'

const login = () => {
  return (
    <div className='section'>
      <div className='sub-section'>
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-2 ' >
          <div className='bg-[#f8fdfc] col1'>
            <div className='flex gap-4 px-2 xl:px-20 lg:px-20  text-[#275556] text-3xl font-bold'>
              <div className='text-[#00a6ab] h0 text-2xl'>
                <FaCircleHalfStroke />
              </div>
              <h2  className='h1'>Ontime.</h2>
            </div>
            <div>
              <p className='py-11 text-[#275556] text-4xl font-bold p1'>Unlock Your</p>
              <h1 className='py-11 text-[#275556] text-4xl font-bold p2' >Team <span className='text-[#00a6ab]'>Performance</span></h1>
              <img className='img object-cover' src={Image} alt="/"/>
            </div>
          </div>
          <div className='col2'>
            <p className='text-[#275556] text-2xl font-bold p3'>Welcome to Online</p>
            <p className='text-[#a0b8b8] py-2  font-bold'>Unlock your team performance</p>
            <p className='text-[#a0b8b8] py-6 p4'>Email address</p>
            <p className='border p-3 w-80 p5 text-[#275556] font-bold'>a.iradukund2@alustudent.com</p>
            <p className='text-[#a0b8b8] py-6 p6'>Password</p>
            <p className='border p-3 w-80 p8 text-[#a0b8b8] '>Enter password</p>
            <p className='font-bold text-[#275556] p7'>Forgot password?</p>
            <p className='border p-3 w-80 p9 text-[#ffff] bg-[#00a6ab] font-bold'>Login</p>
            <p className='p10 text-[#275556] font-bold'>Don't have an account? <span className='text-[#00a6ab] '>Register</span></p>
            <p className='text-[#a0b8b8] p11 font-bold'>©2021 all rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login