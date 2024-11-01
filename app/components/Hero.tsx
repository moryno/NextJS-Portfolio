// import Image from "next/image"
"use client"
import { personalData } from "@/utils/data/personal-data"
import Link from "next/link"
import { motion } from "framer-motion";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";

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

const Hero = () => {
  return (
    <article id="about" className="pb-4 lg:mb-36">
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
                     className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <motion.p 
                     variants={childVariants}
                     className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                        { personalData }
                    </motion.p>
                    <motion.div
                     variants={childVariants}
                     className="flex items-center gap-3"
                    >
                    <Link href={"#contact"} 
                      target="_blank"
                      rel="noopener nonreferrer"
                      className="bg-gradient-to-r from-stone-300 to-stone-600 hover:from-stone-600 hover:to-stone-300
                       rounded-full p-[1px] text-sm text-white mb-10">
                        <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-black rounded-full border-none text-center md:text-sm
                        font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200
                        ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                        <span>Contact Me</span>
                        <RiContactsFill size={16} />
                        </button>
                    </Link>
                    <Link href={""} 
                      role="button"
                      target="_blank"
                      rel="noopener nonreferrer"
                      download
                      className="flex items-center gap-1 hover:gap-3 bg-white rounded-full md:px-8 p-3 md:py-4 uppercase md:text-sm text-xs font-medium tracking-wider no-underline transition-all duration-200 ease-out
                       text-center text-black mb-10">
                        <span>Get Resume</span>
                        <MdDownload size={16} />
                    </Link>
                    </motion.div>
                 
                </motion.div>
            </div>
        </div>
    </article>
  )
}

export default Hero