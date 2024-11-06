import { IBlog } from "@/app/blog/page"
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    blog: IBlog;
}

const BlogCard = ({ blog }: BlogCardProps ) => {
  return (
    <div className="border border-slate-900 hover:border-[#464c6a] transition-all
      duration-500 bg-black rounded-lg relative group">
        <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-md">
          <Image
             src={blog.image}
             alt={blog.title}
             height={1080}
             width={900}
             className="h-full w-full group-hover:scale-110 transition-all duration-300 object-cover"
             />  
        </div>  
        <div className="flex flex-col sm:p-3">
           <Link
                href={blog.link}
                target="_blank" 
                rel="noopener norefferer" 
                aria-label="blog"
            >
                <p className="my-2 lg:my-3 text-gray-100 cursor-pointer text-base sm:text-lg
                font-medium hover:text-pink-500">{ blog.title }</p>
            </Link>
            <p className="text-[0.8125rem] text-stone-400 mt-2">{ moment(blog.date).fromNow() }</p>
            <p className="text-sm text-gray-300 leading-6 mt-4 overflow-hidden text-ellipsis line-clamp-3">{ blog.description }</p>
        </div>        
    </div>
  )
}

export default BlogCard
