import Contact from "./components/Contact"
import Experience from "./components/Experience"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const page = () => {
  return (
    <section className="container mx-auto px-8">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </section>
  )
}

export default page