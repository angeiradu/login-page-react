import React from 'react'
import { FaCircleHalfStroke } from "react-icons/fa6";
import Image from '../assets/image.png'

const login = () => {
  return (
    <div className='section'>
      <div className='sub-section'>
        <div className='grid grid-cols-2' >
          <div className='bg-[#f8fdfc] col1'>
            <div className='flex gap-4 px-20  text-[#275556] text-3xl font-bold'>
              <div className='text-[#00a6ab] text-2xl'>
                <FaCircleHalfStroke />
              </div>
              <h2  className='h1'>Ontime.</h2>
            </div>
            <div>
              <p className='py-11 text-[#275556] text-4xl font-bold p1'>Unlock Your</p>
              <h1 className='py-11 text-[#275556] text-4xl font-bold p2' >Team <span className='text-[#00a6ab]'>Performance</span></h1>
              <img className='img' src={Image} alt="/"/>
            </div>
          </div>
          <div>
            <p className='text-[#275556] text-2xl font-bold p3'>Welcome to Online</p>
            <p className='text-[#a0b8b8] py-2'>Unlock your team performance</p>
            <p className='text-[#a0b8b8] py-6 p4'>Email address</p>
            <p className='border p-3 w-80 p5 text-[#275556]'>a.iradukund2@alustudent.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login