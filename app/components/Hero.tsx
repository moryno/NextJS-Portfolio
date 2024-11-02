"use client"

import Link from "next/link"
import { PERSONALDATA } from "@/utils/data/personal-data";
import AnimationLottie from "./helper/animation-lottie";
import experience from "/public/lottie/development.json";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {

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
  return (
    <section>
     <article className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={conatinerVariants}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center
          p-2 pb-20 md:pb-10"
        >
            <motion.h1
              variants={childVariants}
              className="text-3xl font-bold leading-10 md:font-extrabold
              lg:text-[2.6rem] lg:leading-[3.5rem]"
            >
                <span className="text-pink-500 text-sm uppercase tracking-widest">[ { PERSONALDATA.name }]</span><br />
                { PERSONALDATA.role } <br />
                <span className="text-[#16f2b3]">{ PERSONALDATA.designation }</span>
            </motion.h1>
            <p className="my-5 text-lg leading-relaxed xl:leading-10 tracking-tighter">{ PERSONALDATA.description }</p>
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
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="order-1 lg:order-2">
            <AnimationLottie animationPath={experience} />
        </motion.div>
     </article>
    </section>
  )
}

export default Hero