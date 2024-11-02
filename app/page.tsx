import Contact from "./components/Contact"
import Experience from "./components/Experience"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Hero from "./components/Hero"
import Awards from "./components/Awards"

const page = () => {
  return (
    <section className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
    </section>
  )
}

export default page