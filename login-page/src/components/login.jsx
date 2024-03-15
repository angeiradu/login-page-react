import React from 'react'
import { FaCircleHalfStroke } from "react-icons/fa6";
import Image from '../assets/image.png'

const login = () => {
  return (
    <div className='section'>
      <div className='sub-section'>
        <div className='grid grid-cols-2' >
          <div className='bg-[#f8fdfc] col1'>
            <div className='flex gap-4 px-20 text-[#275556] text-3xl font-bold'>
              <div className='text-[#00a6ab] text-2xl'>
                <FaCircleHalfStroke />
              </div>
              <h2  className='h1'>Ontime.</h2>
            </div>
            <div>
              <p className='py-11 text-[#275556] text-4xl font-bold p1'>Unlock Your</p>
              <h1 className='py-11 text-[#275556] text-4xl font-bold p2' >Team <span className='text-[#00a6ab]'>Performance</span></h1>
              <img src={Image} alt="/"/>
            </div>
          </div>
          <div>
            <p className='text-[#275556] text-2xl font-bold'>Welcome to Online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login