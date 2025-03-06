import { CallToAction } from "./sections/CallToAction"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { LogoTicker } from "./sections/LogoTicker"
import { Pricing } from "./sections/Pricing"
import { ProductShowcase } from "./sections/ProductShowcase"
import { Testimonials } from "./sections/Testimonials"

function App() {

  return (
    <main>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </main>
  )
}

export default App
