import { PERSONALDATA } from "@/utils/data/personal-data"
import BlogCard from "../components/blog/BlogCard";

export interface IBlog{
    title: string;
    date: string;
    link: string;
    image: string;
    description: string;
    tags?: string[]
}

export async function getBlogs(){
    const res = await fetch(`https://mediumpostsapi.vercel.app/api/${PERSONALDATA
        .mediumUsername}`);
    if(!res.ok){
        throw new Error("Failed to fetch data")
    }

    const data = await res.json();
    return data?.dataMedium || [];
}

const page = async () => {
    const blogs = await getBlogs();

  return (
    <article id="about" className="pb-4 lg:mb-36 scrollbar-hide">
    <h2 
     className='my-20 text-pink-500 text-center text-sm tracking-widest uppercase'>
      [ Blogs ]
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap:3 md:gap-5 lg:gap-8 xl:gap-10">
        { blogs.map((blog: IBlog) => (
            <BlogCard key={blog?.title} blog={blog} />
        ))}
    </div>
    </article>
  )
}

export default page
