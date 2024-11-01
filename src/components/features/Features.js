import React from 'react';
import { Title } from '../layouts/Title';
import { Card } from './Card';
import { FaMobile, FaGlobe } from 'react-icons/fa';
import { SiAntdesign } from 'react-icons/si';

const Features = () => {
  return (
    <section
      id="features"
      className='w-full py-20 border-b-[1px] border-black'>

      <Title title='Features' des='what i do' />

      <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 xl:gap-14'>
        <Card
          title="Web Developer"
          desc="Developed websites using frontend technologies and framework which is responsive on all devices"
          icon={<FaMobile />}
        />
        <Card
          title="UI Designer"
          desc="Perfect in writing HTML,CSS and Javascript code and also expert in skills in React"
          icon={<SiAntdesign />}
        />
        <Card
          title="Coding Websites"
          desc="Participated in certain competitions on several coding platforms and also knows how to write perfect structured code"
          icon={<FaGlobe />}
        />

      </div>

    </section>
  )
}

export default Features;