import Footer from './components/Footer'
import Hero from './components/Hero'
import Program from './components/Program'
import AboutMe from './components/aboutMe'

export function IntroPage() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Program />
      <AboutMe />
      <Footer />
    </div>
  )
}
