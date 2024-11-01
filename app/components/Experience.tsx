import { experiences } from "@/utils/data/experience";

interface Iexperience{
    year: string,
    role: string,
    company: string,
    description: string,
    technologies: string[],
}
const Experience = () => {
  return (
    <article className='pb-4'>
        <h2 className='my-20 text-center text-4xl'>Experience</h2>
        <div>
            {experiences.map((experience: Iexperience,  index: number) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-stone-400">
                            {experience.year}
                        </p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold">
                            {experience.role} -{" "}
                            <span className="text-sm text-stone-500">
                                {experience.company}
                            </span>
                        </h3>
                        <p className="mb-4 text-stone-400">
                            {experience.description}
                        </p>
                        {experience.technologies.map((tech: string, index: number) => (
                            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300" key={index}>
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

export default Experience