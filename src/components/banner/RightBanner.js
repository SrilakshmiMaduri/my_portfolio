import React from 'react';
import { bannerImg } from '../../assets/index';

export const RightBanner = () => {
  return (
    <div className='flex items-center justify-center w-full lgl:w-1/2'>
    <div>
        <img className="w-[580px] h-[400px] lgl:w-[500px] lgl:h-[460px] rounded-lg" 
        src={bannerImg} alt="bannerImg"></img>
    </div>
    </div>
  )
}
