"use client"
import { CONTACT } from "@/utils/data/personal-data"
import Link from "next/link"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <article id="contact">
        <div className="border-t border-stone-900 pb-20">
            <motion.h2
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 1, y: -100 }}
             transition={{ duration: 0.5 }}
             className="my-20 text-pink-500 text-center text-sm tracking-widest uppercase">[ Contact Me ]</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 1 }}
                 className="my-4">
                    {CONTACT.address}
                </motion.p>
                <motion.p
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: 100 }}
                 transition={{ duration: 1 }}
                 className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <Link href={"#"} className="border-b">
                    {CONTACT.email}
                </Link>
            </div>
        </div>
    </article>
  )
}

export default Contact