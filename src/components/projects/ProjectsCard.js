import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className='w-full h-auto p-4 lgl:px-12 lgl:py-10 rounded-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-800 transition-colors duration-1000'>
      <div className="w-full overflow-hidden rounded-lg h-50">
        <img className="object-cover w-full duration-300 cursor-pointer h-60 group-hover:scale-110"
          src={src} alt="src"></img>
      </div>

      <div className='flex flex-col w-full gap-6 mt-5'>
        <div className='flex items-center justify-between'>
          <h3 className='text-base font-normal uppercase text-designColor'>
            {title}
          </h3>
          <div className='flex gap-1'>
            <span className='inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor'>
              <BsGithub />
            </span>
            <span className='inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor'>
              <FaGlobe />
            </span>
          </div>
        </div>

        <div>
          <p className='mt-3 tracking-wide duration-300 text-md fontTitle-titleFont hover:text-gray-100'>
            {des}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard;