"use client"

import { motion } from "framer-motion"
import contact from "/public/lottie/contact.json";
import AnimationLottie from "./helper/animation-lottie"
import { FormEvent, useState } from "react";
import Link from "next/link";
import { TbMailForward } from "react-icons/tb";
import { PERSONALDATA } from "@/utils/data/personal-data";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    // const formRef = useRef<LegacyRef<HTMLFormElement>>();
    const [success] = useState(false);
  
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
  
    //   emailjs
    //     .sendForm(
    //       "service_skvzar1",
    //       "template_2ox9rmi",
    //       formRef.current,
    //       "2zKK-EKLfrPe0NirY"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         setSuccess(true);
    //         setTimeout(() => setSuccess(false), 5000);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    };

  return (
    <article id="contact">
        <div className="border-t border-stone-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-pink-500 text-center text-sm tracking-widest uppercase"
             >
                [ Contact Me ]
             </motion.h2>
             <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    <AnimationLottie animationPath={contact} />
                </motion.div>
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col justify-center gap:8 lg:gap-16">
                    <div className="rounded-lg bg-[#000] border border-stone-900 px-8 py-10">
                        <p>
                            {"If you have any questions or concerns, please don't hesitate to contact me. I am open to work opportunities that align with my skills and interest."}
                        </p>
                        <form
                            // ref={formRef}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 mt-5"
                            >
                            <input
                                className="bg-transparent w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300
                                px-3 py-2"
                                type="text"
                                name="user_name"
                                placeholder="Full Name"
                                maxLength={100}
                                required
                            />
                            <input
                                 className="bg-transparent w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300
                                px-3 py-2"
                                type="email"
                                name="user_email"
                                placeholder="Email"
                                maxLength={100}
                                required
                            />

                            <input
                                 className="bg-transparent w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300
                                px-3 py-2"
                                type="text"
                                name="user_subject"
                                placeholder="Subject"
                                maxLength={100}
                                required
                            />
                            <textarea
                                className="bg-transparent w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300
                                px-3 py-2"
                                // cols={30}
                                name="message"
                                rows={3}
                                placeholder="Message..."
                                maxLength={500}
                                required
                            ></textarea>
                            <div className="flex flex-col items-center gap-2 mt-6">
                            <Link href={"#contact"} 
                              target="_blank"
                              rel="noopener nonreferrer"
                              className="bg-gradient-to-r from-stone-300 to-stone-600 hover:from-stone-600 hover:to-stone-300
                                rounded-full p-[1px] text-sm text-white mb-10">
                            <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-black rounded-full border-none text-center md:text-sm
                                font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200
                                ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                                <span>Contact Me</span>
                                <TbMailForward size={16} />
                            </button>
                            </Link>
                            </div>
                            {success && (
                                <span className=" text-green-500 p-3 ring-1 rounded-md ring-green-500 w-fit">
                                Mail sent. Thank you.
                                </span>
                            )}
                        </form>
                    </div>
                    
                </motion.div>
             </article>
             <motion.div 
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: -100 }}
               transition={{ duration: 1.5 }}
               className="flex mt-5 items-center justify-center gap-5 lg:gap-10">
                <Link href={PERSONALDATA.linkedIn} 
                    target="_blank" 
                    rel="noopener norefferer" 
                    aria-label="LinkedIn"
                >
                <BiLogoLinkedin className="bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110
                transition-all duration-300 text-gray-800 cursor-pointer" size={42} />
                </Link>
                <Link href={PERSONALDATA.gitHub} 
                    target="_blank" 
                    rel="noopener norefferer" 
                    aria-label="GitHub"
                >
                    <IoLogoGithub className="bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110
                    transition-all duration-300 text-gray-800 cursor-pointer" size={42} />
                </Link>
                <Link href={PERSONALDATA.x} 
                    target="_blank" 
                    rel="noopener norefferer" 
                    aria-label="Twitter"
                >
                    <FaXTwitter className="bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110
                    transition-all duration-300 text-gray-800 cursor-pointer" size={42} />
                </Link>
            </motion.div>
        </div>
    </article>
  )
}

export default Contact