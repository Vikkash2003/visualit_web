import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeatureSection from "@/components/FeatureSection"
import PricingSection from "@/components/PricingSection"
import {Footer} from "@/components/Footer";
import AchievementSection from "@/components/AchievementSection";

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navigation />
            <HeroSection />
            <FeatureSection />
            <PricingSection />
            <AchievementSection />
            <Footer />
        </main>
    )
}