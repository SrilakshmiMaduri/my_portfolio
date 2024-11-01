import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

export const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Professional Coder', 'Frontend Developer', 'UI Designer'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='flex flex-col w-full gap-20 ml-5 lgl:w-1/2'>
            <div className='flex flex-col gap-3'>
                <h3 className='font-normal font-lg'>WELCOME TO MY WOLRD</h3>
                <h4 className='text-6xl font-bold text-white'>
                    Hi, I'm
                    <span className='capitalize text-designColor'> srilakshmi</span>
                </h4>
                <h2 className='text-4xl font-bold text-white'>a<span> {text}</span></h2>
                <Cursor
                    cursorBlinking="false"
                    cursorStyle=""
                    cursorColor="#ff014f"
                ></Cursor>
                <p className="text-base leading-6 tracking-wide font-bodyFont">
                    Skilled frontend developer with expertise in HTML, CSS, and JavaScript, delivering visually stunning and user-friendly web interfaces. Collaborative team player, working closely with designers and backend developers to create seamless and engaging user experiences.
                </p>
            </div>
            <div className='flex flex-col justify-between gap-6 lgl:flex-row lgl:gap-0'>
                <div>
                    <h2 className='mb-4 text-base uppercase font-titleFont'>
                        Find me in
                    </h2>
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
                <div>
                    <h2 className='mb-4 text-base uppercase font-titleFont'>
                        Best skill on
                    </h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon'>
                            <SiJavascript />
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss />
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

