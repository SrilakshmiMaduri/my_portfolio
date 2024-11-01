import React from 'react';

const ResumeCard = ({ Title, subTitle, place, des }) => {
    return (
        <div
            className="w-full h-1/3 flex group">
            <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
                <span className='absolute rounded-full w-5 h-5 -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-40 group'>
                    <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'>
                    </span>
                </span>
            </div>

            <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne'>
                <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:items-center'>
                    <div>
                        <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>
                            {Title}
                        </h3>
                        <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>
                            {subTitle}
                        </p>
                    </div>
                    <div>
                        <p className='px-4 py-2 bg-black bg-opacity-25 text-designColor rounded-lg shadow-shadowOne flex justify-center items-center text-sm font-medium'>
                            {place}
                        </p>
                    </div>
                </div>
                <p className='text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>
                    {des}
                </p>
            </div>
        </div>
    )
}

export default ResumeCard;