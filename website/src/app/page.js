import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeatureSection from "@/components/FeatureSection"
import AchievementSection from "@/components/AchievementSection"
import PricingSection from "@/components/PricingSection"
import AboutSection from "@/components/AboutSection"
import {Footer} from "@/components/Footer"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroSection />
            <FeatureSection />
            <AchievementSection />
            <PricingSection />
            <AboutSection />
            <Footer />
        </main>
    )
}