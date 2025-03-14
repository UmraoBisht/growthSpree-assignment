import './App.css'
import PerfectedBy from './components/PerfectedBy'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Stat from './components/statistic/Stat'
import WhyChooseMedia from './components/whyChooseMedia/WhyChooseMedia'
import TestimonialSwiper from './components/testimonial/TestimonialSwiper'
import VideoContainer from './components/videoContainer/VideoContainer'
import StaggeredText from './components/staggeredText/StaggeredText'
import CustomerSpotlight from './components/customerSpotlight/CustomerSpotlight'
import Feature from './components/feature/Feature'
import Pricing from './components/pricing/Pricing'
import Faq from './components/faq/Faq'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
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
