import React from 'react';

export const Title = ({title, des}) => {
  return (
 
     <div className='flex flex-col gap-4 font-titleFont mb-14'>
      <h3 className='text-sm font-light text-designColor uppercase tracking-wide'>
     {title} 
      </h3>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-300 capitalize'>
        {des}
        </h1>
   </div>
  )
}