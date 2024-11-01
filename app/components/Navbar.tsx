import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <Link href={"/"} aria-label="Home">M-G</Link>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <Link href={""} 
            target="_blank" 
            rel="noopener norefferer" 
            aria-label="LinkedIn"
            >
                <FaLinkedinIn />
            </Link>
            <Link href={""} 
            target="_blank" 
            rel="noopener norefferer" 
            aria-label="GitHub"
            >
                <FaGithub />
            </Link>
            <Link href={""} 
            target="_blank" 
            rel="noopener norefferer" 
            aria-label="Twitter"
            >
                <FaSquareXTwitter />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar