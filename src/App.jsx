import Contact from './sections/Contact'
import Experience from './sections/Experience'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import LogoShowcase from './sections/LogoShowcase'
import NavBar from './components/NavBar'
import ShowcaseSection from './sections/ShowcaseSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Experience />
      <ShowcaseSection />
      <FeatureCards />
      <TechStack />
      <LogoShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
