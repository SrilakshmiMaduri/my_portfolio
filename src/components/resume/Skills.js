import React from 'react';
import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
             className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >

            <div className='w-full lgl:w-1/2'>
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm tracking-[4px] text-designColor uppercase'>Features</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Development Skills</h2>
                </div>
                <div className='w-full flex flex-col gap-6 overflow-x-hidden'>
                    <div>
                        <p className='text-sm uppercase'>React</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1, }}
                                transition={{ duration: 0.5, deelay: 0.5 }}
                                className='w-[80%] h-full bg-gradient-to-r from-red-500 via-pink-700 to-blue-600 rounded-md relative'>
                                <span className='absolute -top-8 right-0'>80%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div>
                        <p className='text-sm uppercase'>HTML</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1, }}
                                transition={{ duration: 0.5, deelay: 0.5 }}
                                className='w-full h-full bg-gradient-to-r from-red-500 via-pink-700 to-blue-600 rounded-md relative'>
                                <span className='absolute -top-8 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div>
                        <p className='text-sm uppercase'>CSS</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1, }}
                                transition={{ duration: 0.5, deelay: 0.5 }}
                                className='w-full h-full bg-gradient-to-r from-red-500 via-pink-700 to-blue-600 rounded-md relative'>
                                <span className='absolute -top-8 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div>
                        <p className='text-sm uppercase'>javascript</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1, }}
                                transition={{ duration: 0.5, deelay: 0.5 }}
                                className='w-[80%] h-full bg-gradient-to-r from-red-500 via-pink-700 to-blue-600 rounded-md relative'>
                                <span className='absolute -top-8 right-0'>80%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills;
