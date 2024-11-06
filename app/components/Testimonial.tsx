"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import GlowCard from "./GlowCard";
import { TESTIMONIALS } from "@/utils/data/testimonials"

const Testimonial = () => {
  return (
    <article id="awards" className="pb-4 lg:mb-36">
    <motion.h2 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 0.5 }}
      className='my-20 text-pink-500 text-center text-sm tracking-widest uppercase'>
        [ Testimonials ]
    </motion.h2> 
        <motion.div
          className="flex flex-col gap-6"
          whileInView={{ opacity: 1, y: 0}}
          initial={{ opacity: 0, y: 100}}
          transition={{ duration: 1 }}
         >
          {TESTIMONIALS.map(testimony => (
            <div key={testimony.id}>
                    <GlowCard 
                     
                      identifier={`testimony-${testimony.id}`}
                       >
                    <div className="bg-black rounded-xl overflow-hidden">
                      <div className="flex flex-row">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                      </div>
                      <div className="p-3">
                      <div className="mt-4 space-y-4 text-justify">
                        {testimony.content.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-sm">{paragraph.trim()}</p>
                        ))}
                      </div>
                      <div className="flex gap-5 mt-3">
                        <div className="flex items-center justify-center h-10 w-10 overflow-hidden rounded-full cursor-pointer">
                        <Image
                          src={testimony.image}
                          alt="awards"
                          width={100}
                          height={100}
                          className="hover:scale-125 h-full w-full object-cover"
                        />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div>
                            <span className="mr-2 font-semibold opacity-60 text-xs">Author:</span>
                            <span className="text-sm font-medium">{testimony.author}</span>
                          </div>
                          <div>
                            <span className="mr-2 font-semibold opacity-60 text-xs">Role:</span>
                            <span className="text-sm font-medium">{testimony.role}</span>
                          </div>
                          <div>
                            <span className="mr-2 fontsemibold opacity-60  text-xs">Company:</span>
                           <span className="text-sm font-medium">{testimony.company}</span>
                          </div>                         
                        </div>
                      </div>
                      </div>
                      </div>
                    </GlowCard>
            </div>
                ))}
        </motion.div>
</article>
  )
}

export default Testimonial
