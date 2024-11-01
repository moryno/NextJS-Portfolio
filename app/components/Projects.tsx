"use client"
import { projectsData } from "@/utils/data/projects-data"
import Image from "next/image"
import { motion } from "framer-motion";

interface Iproject{
    title: string,
    image?: string,
    description: string,
    technologies: string[]
}
const Projects = () => {
  return (
    <article className='pb-4'>
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {projectsData.map((project: Iproject, index: number) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4">
                    <Image src={""} 
                     width={250}
                     height={250}
                     alt={project.title}
                     className="mb-6 rounded" />
                  </motion.div>
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                    <p className="mb-4 text-stone-400">{project.description}</p>
                    { project.technologies.map(( tech: string, index: number) => (
                        <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                            { tech }
                        </span>
                    ))}
                  </motion.div>
                </div>
            ))}
        </div>
    </article>
  )
}

export default Projects