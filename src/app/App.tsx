import { Header } from '@/features/header/Header'
import { Hero } from '@/features/hero/Hero'
import { About } from '@/features/about/About'
import { Menu } from '@/features/menu/Menu'
import { Differentiators } from '@/features/differentiators/Differentiators'
import { Gallery } from '@/features/gallery/Gallery'
import { Testimonials } from '@/features/testimonials/Testimonials'
import { Location } from '@/features/location/Location'
import { Newsletter } from '@/features/newsletter/Newsletter'
import { Footer } from '@/features/footer/Footer'

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Differentiators />
        <Gallery />
        <Testimonials />
        <Location />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
