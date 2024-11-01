import React from 'react';
import { ContactImg } from '../../assets/index';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const ContactFromLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#242427] p-4 lgl:p-8 rounded-lg shadow-shadowOne'>
    <img className='object-cover w-full h-64 mb-4 rounded-lg'
      src={ContactImg} alt="contactImg" />

    <div className='flex flex-col gap-4 mb-8'>
      <h2 className='text-3xl font-bold text-white'>Srilakshmi Maduri</h2>
      <p className='text-lg tracking-wide text-gray-400'>Frontend Developer</p>
      <p className='text-base tracking-wide text-gray-400'>
        A passionate web developer currently looking for frontend developer role or software engineer role expert in writing structured javascript code and also gained knowledge on REACT
      </p>
      <p className='text-base tracking-wide text-gray-400'>
        Mobile: <span className='text-lightText'>+91-7989564005</span>
      </p>
      <p className='text-base tracking-wide text-gray-400'>
        Email: <span className='text-lightText'>srilakshmimaduri@gmail.com</span>
      </p>
    </div>
    <div className='flex flex-col gap-4'>
      <h2 className='mb-4 text-base uppercase text-lightText'>
        find me in
      </h2>
    </div>
    <div className='flex gap-4'>
      <span className='bannerIcon'>
      <a href="https://www.linkedin.com/in/srilakshmi-maduri-55662b227" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
        </a>
        </span>
      <span className='bannerIcon'>
      <a href="https://github.com/SrilakshmiMaduri" target="_blank" rel="noreferrer">
      <FaGithub />
      </a>
      </span>
    </div>

  </div>
  )
}

export default ContactFromLeft;