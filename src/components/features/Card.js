import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

export const Card = ({ title, desc, icon }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg flex items-center bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className='h-72 overflow-y-hidden'>

        <div className='flex h-full flex-col gap-8 translate-y-16 group-hover:translate-y-0 transition-transform duration-500'>

          <div className="w-10 h-8 flex flex-col justify-between" >
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
          <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
          <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
          <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
          <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>

          <div className='flex flex-col gap-6'>
            <h2 className='text-xl md:text-2xl  font-titleFont font-bold text-gray-300'>
              {title}
            </h2>
          </div>
        
            <p className='base'>{desc}</p>
            <span className='text-2xl text-designColor'>
              {<HiArrowRight />}
            </span>

        </div>
      </div>
    </div>
  )
}

