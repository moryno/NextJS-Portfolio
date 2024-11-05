"use client"
import { IBlog } from "@/app/blog/page";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface BlogCardProps {
    blogs: IBlog[];
}

const Blog = ({ blogs} : BlogCardProps) => {
  return (
    <article id="about" className="pb-4 lg:mb-36">
    <motion.h2 
     whileInView={{ opacity: 1, y: 0}}
     initial={{ opacity: 0, y: -100}}
     transition={{ duration: 0.5 }}
     className='my-20 text-pink-500 text-center text-sm tracking-widest uppercase'>
      [ Blogs ]
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap:3 md:gap-5 lg:gap-8 xl:gap-10">
        { blogs.slice(0,6).map((blog: IBlog) => (
                <BlogCard key={blog?.title} blog={blog} />
        ))}
    </div>
    <div className="flex justify-center mt-5 lg:mt-12">
        <Link 
          role="button"
          href={"/blog"}
          className="flex items-center gap-1 hover:gap-3 rounded-full
          bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3
          md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white
          no-underline transition-all duration-200 ease-out hover:text-white 
          hover:no-underline md:font-semibold"
        >
            <span>View More</span>
            <FaArrowRight size={16} />
        </Link>
    </div>
    </article>
  )
}

export default Blog
