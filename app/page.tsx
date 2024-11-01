import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const page = () => {
  return (
    <section className="container mx-auto px-8">
      <Navbar />
      <Hero />
    </section>
  )
}

export default page