"use client"
import { awards } from "@/utils/data/award";
import { motion } from "framer-motion";
import Image from "next/image";
import GlowCard from "./GlowCard";

const Awards = () => {
  return (
    <article id="awards" className="pb-4 lg:mb-36">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 0.5 }}
          className='my-20 text-pink-500 text-center text-sm tracking-widest uppercase'>
            [ Awards & Achievement ]
        </motion.h2> 
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col gap-6">
                    {awards.map(award => (
                        <GlowCard 
                          key={award.id}
                          identifier={`award-${award.id}`}
                           >
                        <div className="p-3">
                          <div className="flex justify-end absolute right-0 mr-5 mt-3">
                                <p className="text-xs sm:text-sm bg-[#16f2b3] rounded-full text-black
                                px-3 py-2">{ award.duration }</p>
                            </div>
                            <div className="flex items-center gap-x-8 px-3 py-2">
                                <Image
                                    src="/placeholder.png"
                                    alt="awards"
                                    width={80}
                                    height={40}
                                    className="hover:scale-125 rounded-xl"
                                 />
                          
                            <div>
                                <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                    { award.title }
                                </p>
                                <p className="text-sm sm:text-base">
                                    { award.host }
                                </p>
                            </div>
                            </div>
                          </div>
                        </GlowCard>
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    {awards.map(award => (
                        <GlowCard 
                          key={award.id}
                          identifier={`experience-${2}`}
                           >
                        <div className="p-3">
                          <div className="flex justify-end absolute right-0 mr-5 mt-3">
                                <p className="text-xs sm:text-sm bg-[#16f2b3] rounded-full text-black
                                px-3 py-2">{ award.duration }</p>
                            </div>
                            <div className="flex items-center gap-x-8 px-3 py-2">
                                <Image
                                    src="/placeholder.png"
                                    alt="awards"
                                    width={80}
                                    height={40}
                                    className="hover:scale-125 rounded-xl"
                                 />
                          
                            <div>
                                <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                    { award.title }
                                </p>
                                <p className="text-sm sm:text-base">
                                    { award.host }
                                </p>
                            </div>
                            </div>
                          </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </div>
    </article>
  )
} 

export default Awards
