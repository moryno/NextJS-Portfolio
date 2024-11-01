// import Image from "next/image"
import { personalData } from "@/utils/data/personal-data"
import Link from "next/link"

const Hero = () => {
  return (
    <article className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    {/* <Image src={"/"} alt="Maurice Nganga" className="border border-stone-900 rounded-3xl" /> */}
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start mt-10">
                    <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">Maurice Nganga</h2>
                    <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</span>
                    <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                        { personalData }
                    </p>
                    <Link href={""} 
                      target="_blank"
                      rel="noopener nonreferrer"
                      download
                      className="bg-white rounded-full px-4 text-sm text-stone-800 mb-10">
                        Download Resume
                      </Link>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Hero