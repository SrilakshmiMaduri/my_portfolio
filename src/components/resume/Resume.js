import React, { useState } from 'react';
import { Title } from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  return (

    <section
      id='resume'
      className='w-full py-20 border-b-[1px] border-black'>

      <div className='flex justify-center items-center text-center'>
        <Title
          title='2+ YEARS OF EXPERIENCE'
          des='My Resume'
        />
      </div>

      <div>
        <ul className='lgl:w-1/2 grid grid-cols-1 md:grid-cols-2'>
          <li onClick={() => 
            setEducationData(true) & setSkillsData(false)
          }
            className={`${educationData ? "border-designColor rounded-lg" :"border-transparent"} resumeLi`}>
            Education and Experience
          </li>

          <li onClick={() => 
            setEducationData(false) & setSkillsData(true)
          }
            className={`${skillsData ? "border-designColor rounded-lg" :"border-transparent"} resumeLi`}>
            Professional Skills
          </li>
        </ul>
      </div>

      {educationData && <Education />}
      {skillsData && <Skills />}

    </section>
  )
}

export default Resume;

