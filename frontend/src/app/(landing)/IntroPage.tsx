import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Program from './components/Program'
import AboutMe from './components/aboutMe'

export function IntroPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Hero />
        <Program />
        <AboutMe />
        <Footer />
      </div>
    </>
  )
}
