import Contact from "./components/Contact"
import Experience from "./components/Experience"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Hero from "./components/Hero"

const page = () => {
  return (
    <section className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </section>
  )
}

export default page