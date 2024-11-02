"use client"
import { personalData } from "@/utils/data/personal-data"
import { motion } from "framer-motion";

const conatinerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5
    }
  }
}
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    }
  }
}

const About = () => {
  return (
    <article id="about" className="pb-4 lg:mb-36">
        <motion.h2 
         whileInView={{ opacity: 1, y: 0}}
         initial={{ opacity: 0, y: -100}}
         transition={{ duration: 0.5 }}
         className='my-20 text-pink-500 text-center text-sm tracking-widest uppercase'>[ About Me ]</motion.h2>
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <motion.img 
                      src={""} 
                      alt="Maurice Nganga" 
                      className="border border-stone-900 rounded-3xl"
                      width={650}
                      height={650}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <motion.div 
                 initial="hidden"
                 animate="visible"
                 variants={conatinerVariants}
                 className="flex flex-col items-center lg:items-start mt-10">
                    <motion.h2 
                     variants={childVariants}
                     className="pb-2 text-4xl tracking-tighter lg:text-8xl">Maurice Nganga</motion.h2>
                    <motion.span
                     variants={childVariants}
                     className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Front-End Developer</motion.span>
                    <motion.p 
                     variants={childVariants}
                     className="my-5 text-lg leading-10 tracking-tighter">
                        { personalData }
                    </motion.p>                 
                </motion.div>
            </div>
        </div>
    </article>
  )
}

export default About