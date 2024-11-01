import { projectsData } from "@/utils/data/projects-data"
import Image from "next/image"

interface Iproject{
    title: string,
    image?: string,
    description: string,
    technologies: string[]
}
const Projects = () => {
  return (
    <article className='pb-4'>
        <h2 className='my-20 text-center text-4xl'>Projects</h2>
        <div>
            {projectsData.map((project: Iproject, index: number) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                  <div className="w-full lg:w-1/4">
                    <Image src={""} 
                     width={250}
                     height={250}
                     alt={project.title}
                     className="mb-6 rounded" />
                  </div>
                  <div className="w-full max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                    <p className="mb-4 text-stone-400">{project.description}</p>
                    { project.technologies.map(( tech: string, index: number) => (
                        <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                            { tech }
                        </span>
                    ))}
                  </div>
                </div>
            ))}
        </div>
    </article>
  )
}

export default Projects