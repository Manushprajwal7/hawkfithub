import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import AboutUs from "./components/AboutUs"
import Pricing from "./components/Pricing"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  )
}

