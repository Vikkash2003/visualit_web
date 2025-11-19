import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutVisuaLitSection from "@/components/AboutVisuaLitSection"
import FeatureSection from "@/components/FeatureSection"
import PricingSection from "@/components/PricingSection"
import OurStorySection from "@/components/OurStorySection"
import AchievementSection from "@/components/AchievementSection"
import { Footer } from "@/components/Footer"

export default function Home() {
    return (
        <main className="min-h-screen snap-y snap-mandatory overflow-y-auto">
            <Navigation />
            <HeroSection />
            <FeatureSection />
            <PricingSection />
            <OurStorySection />
            <AchievementSection />
            <Footer />
        </main>
    )
}