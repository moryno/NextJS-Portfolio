"use client"
import { motion } from "framer-motion";
import { skillsData }  from "@/utils/data/skills"
import { skillsImage } from "@/utils/skill-image"
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Skills = () => {
  return (
    <article id="skills" className='pb-4'>
        <motion.h2 
         whileInView={{ opacity: 1, y: 0}}
         initial={{ opacity: 0, y: -100}}
         transition={{ duration: 0.5 }}
         className='my-20 text-center text-2xl uppercase'>
            Skills
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0}}
          initial={{ opacity: 0, y: 100}}
          transition={{ duration: 0.5 }}
        >
            <Marquee
             gradient={false}
             speed={60}
             pauseOnHover={true}
             pauseOnClick={true}
             delay={0}
             play={true}
             direction="left"
            >
            {skillsData.map(skill => (
                <div key={skill} className="w-36 min-w-fit h-fit flex flex-col items-center justify-center
                transition-all duration-500 m-3 sm:m-5 rounded-lg group relative cursor-pointer">
                    <div className="h-full w-full rounded-lg border border-[#0E0E0E] shadow-gray-50 group-hover:border-pink-500
                    transition-all duration-500">
                        <div className="flex -translate-y-[1px] justify-center">
                            <div className="w-3/4">
                             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#313131] to-transparent"></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 p-6">
                            <div className="h-8 sm:h-10">
                                <Image
                                 src={skillsImage(skill)?.src}
                                 alt={skill}
                                 width={40}
                                 height={40}
                                 className="h-full w-auto rounded-lg" />
                            </div>
                            <p className="text-sm sm:text-lg">
                                { skill }
                            </p>
                        </div>
                        <div className="flex translate-y-[1px] justify-center">
                            <div className="w-3/4">
                             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#313131] to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </Marquee>
        </motion.div>
    </article>
  )
}

export default Skills