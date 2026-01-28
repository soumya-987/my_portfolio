
'use client';
import {motion} from 'framer-motion';
import { link } from 'fs';


const projects=[
    {
        title:'Portfolio Website',
        description: 'Personal Portfolop built with Next.js and responsive design.',
        tech: ['Next.js','React','CSS','Framer-motion'],
        link:'',
        code:'https://github.com/soumya-987/Portfolio.git',

    },
    {
        title:'Dress-Up Game',
        description: 'An interactive React game that lets users style a character by mixing and matching outfits in real time.',
        tech:['React','JavaScript','CSS','Vite'],
        link:'https://dressup-4aia.vercel.app/',
        code:'https://github.com/soumya-987/dressup.git',
    },
    {
        title:'DT Club Website',
        description:'A collaboraive website built with my club members to practice teamworkk, layout planning and component reuse',
        tech:['React','Next.js'],
        code:'',


    },
    {
        title:'Sephora India Clone',
        description:'A full-featured e-commerce application inspired by Sephora India, built with real authentication, global state management, and scalable UI architecture.',
        tech:['React','Vite','Redux Toolkit','Firebase Auth','Tailwind CSS'],
        link:'https://sephora-clone-gamma.vercel.app/',
        code:'https://github.com/soumya-987/sephora-clone.git',

    }


];
export default function Projects(){
    return(
        <section className="projects" id='projects'>
            <h2 className="projects-title">Projects</h2>
            <ul className="projects-grid">{projects.map((project,index)=>(
                <motion.li
                    className='project-card'
                    key={project.title}
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{ delay: index * 0.05, ease: 'easeOut' }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a className='project-link'href={project.link}>{project.link}</a>
                        <a className='project-code'href={project.code}>{project.code}</a>
                        <ul className="project-tech">
                            {project.tech.map((item) => (
                            <li key={item}>{item}</li>
                   
               
                    
                

                    ))}</ul>
                    </motion.li>

            ))}</ul>
        </section>
    )
}

