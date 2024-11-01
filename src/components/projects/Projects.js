import React from 'react';
import { Title } from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

export const Projects = () => {
    return (
        <section
            id='projects'
            className='w-full py-20 border-b-[1px] border-black'>

            <div className='flex justify-center items-center text-center'>
                <Title
                    title='VISIT MY PROJECTS'
                    des='My Projects'
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectsCard
                    title="codepen clone"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={projectThree}
                />

                <ProjectsCard
                    title="food website clone"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={projectOne}
                />

                <ProjectsCard
                    title="youtube clone"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={projectTwo}
                />
            </div>

        </section>
    )
}