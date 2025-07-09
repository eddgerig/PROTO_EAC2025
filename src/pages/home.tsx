import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { FeaturedLessons } from "../components/featured-lessons"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedLessons />
      </main>
      <Footer />
    </div>
  )
}
