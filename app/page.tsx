import Contact from "./components/Contact"
import Experience from "./components/Experience"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Hero from "./components/Hero"
import Awards from "./components/Awards"
import Blog from "./components/blog"
import { getBlogs } from "./blog/page"

const page = async () => {
  const blogs = await getBlogs(); 

  return (
    <section className="container mx-auto px-8 scrollbar-hide">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Blog blogs={blogs} />
      <Contact />
    </section>
  )
}

export default page