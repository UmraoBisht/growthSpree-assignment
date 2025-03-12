// import { Glasses } from 'lucide-react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PerfectedBy from './components/PerfectedBy'
import Stat from './components/Stat'
import TestimonialSwiper from './components/TestimonialSwiper'
import StaggeredText from './components/StaggeredText'
import VideoContainer from './components/VideoContainer'
import CustomerSpotlight from './components/CustomerSpotlight'
import WhyChooseMedia from './components/WhyChooseMedia'
import Feature from './components/Feature'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Perfected By Section */}
      <PerfectedBy />

      {/* Stat Section */}
      <Stat />

      {/*WhyChooseMedia+ Section */}
      <WhyChooseMedia />

      {/* Testimonial Section */}
      <TestimonialSwiper />

      {/*Video Section */}
      <VideoContainer />

      {/* Staggered Text */}
      <StaggeredText />


      { /* Customer Spotlight Section */}
      <CustomerSpotlight />

      {/* Features Section */}
      <Feature />

      {/* Pricing Section */}
      <Pricing />

      {/* Faq section */}
      <Faq />

      {/* Contact Section */}
      <Contact />


      {/* Footer Section */}
      <Footer />


      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#FDF2F0] to-transparent -z-10"></div>

    </div>
  )
}

export default App
