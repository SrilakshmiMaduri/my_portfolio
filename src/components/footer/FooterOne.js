import React from 'react';
import { logo } from '../../assets/index';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const FooterOne = () => {
  return (
    <section>
      <div className='w-full py-20 h-auto border-b-[1px] border-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8'>

        <div className='flex flex-col w-full h-full gap-8'>
          <img className="w-24 h-24 m-5 rounded-full" src={logo} alt="logo"></img>
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

        <div className='flex flex-col w-full h-full gap-4'>
          <h2 className='text-xl tracking-wider uppercase text-designColor'>
            Quick Link
          </h2>
          <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>
                About
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>
                Portfolio
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>
                Services
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>Blog
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col w-full h-full gap-4'>
          <h2 className='text-xl tracking-wider uppercase text-designColor'>
            resources
          </h2>
          <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>
                Authentication
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>System Status
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>Terms of Service
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>Pricing
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>Over Right
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col w-full h-full gap-4'>
          <h2 className='text-xl tracking-wider uppercase text-designColor'>
            developers
          </h2>
          <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>
                Documentation
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>
                Authentication
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>
                API Reference
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>
                Support
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li>
              <span className='relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group'>
                Open Source
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section >
  )
}

export default FooterOne;