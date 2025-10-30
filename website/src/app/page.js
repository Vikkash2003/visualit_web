import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
      <main className="bg-black text-white min-h-screen">
        <Navigation />
        <HeroSection />
      </main>
  )
}