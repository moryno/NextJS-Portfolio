"use client"
import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav id="home" className="flex items-center justify-between py-6">
        <motion.div
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: 100 }}
         transition={{ duration: 0.5 }}
         className="flex flex-shrink-0 items-center justify-center gap-4 text-2xl">
            <Link href={""} 
            target="_blank" 
            rel="noopener norefferer" 
            aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </Link>
            <Link href={""} 
            target="_blank" 
            rel="noopener norefferer" 
            aria-label="GitHub"
            >
                <FaGithub size={18} />
            </Link>
        </motion.div>
        <motion.ul
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: 100 }}
             transition={{ duration: 0.5 }}
         className="mt-4 lg:flex h-screen hidden max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen
            md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100">
          <li>
            <Link role="button" className="block px-4 py-2 no-underline outline-none hover:no-underline"
             href={"#about"}
            >
                <div className="text-sm transition-colors duration-300 hover:text-pink-500">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link role="button" className="block px-4 py-2 no-underline outline-none hover:no-underline"
             href={"#skills"}
            >
                <div className="text-sm transition-colors duration-300 hover:text-pink-500">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link role="button" className="block px-4 py-2 no-underline outline-none hover:no-underline"
             href={"#projects"}
            >
                <div className="text-sm transition-colors duration-300 hover:text-pink-500">PROJECTS</div>
            </Link>
          </li>
          <li>
            <Link role="button" className="block px-4 py-2 no-underline outline-none hover:no-underline"
             href={"#experience"}
            >
                <div className="text-sm transition-colors duration-300 hover:text-pink-500">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link role="button" className="block px-4 py-2 no-underline outline-none hover:no-underline"
             href={"#contact"}
            >
                <div className="text-sm transition-colors duration-300 hover:text-pink-500">CONTACT</div>
            </Link>
          </li>
        </motion.ul>
       
    </nav>
  )
}

export default Navbar