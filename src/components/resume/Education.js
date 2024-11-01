import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <div className=' flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
            {/* part one */}
            <div>
                <div className='ml-4 py-6 lgl:py-12 font-titleFont'>
                    <p className='text-sm tracking-[4px] text-designColor'>2006-2021</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Education</h2>
                </div>

                <div className='mt-6 lgl:mt-14 w-full h-[1000px] ml-4 border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        Title="B.Tech in Electronics & Comm. Engg."
                        subTitle="Dr. Samuel George Institute of Engg. & Tech.(2017-2021)"
                        place="MRKP"
                        des="Trained and motivated by the college in order to prepare to work in various sectors of the economy or areas of culture."
                    />

                    <ResumeCard
                        Title="Intermediate-MPC"
                        subTitle="Sri Gowtham Junior College.(2015-2017)"
                        place="MRKP"
                        des="Higher education completed in MPC with a good result and successfully finished and qualified."
                    />

                    <ResumeCard
                        Title="Secondary School Education"
                        subTitle="Z.P.Girls High School.(2014-2015)"
                        place="MRKP"
                        des="Secondary education education completed with a good academic results."
                    />
                </div>
            </div>
             {/* part two */}
            <div>
                <div className='mr-4'>
                    <div className='ml-4 py-6 lgl:py-12 font-titleFont'>
                        <p className='text-sm tracking-[4px] text-designColor'>2022-PRESENT</p>
                        <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
                    </div>

                    <div className='mt-6 lgl:mt-14 w-full h-[1000px] ml-4  border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
                        <ResumeCard
                            Title="Frontend Developer"
                            subTitle="Infosys(2022-present)"
                            place="HYD"
                            des="Working on various frontend technologies and frameworks and gaining knowledge on some backend technologies also"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
