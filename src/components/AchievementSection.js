'use client'
import { Award, Star, Users, Globe } from 'lucide-react'
import { contentData } from '@/lib/contentData'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'

const AchievementSection = () => {
    const stats = [
        {
            id: 1,
            value: "50K+",
            label: "Active Readers",
            icon: Users,
            description: "Growing community of visual learners"
        },
        {
            id: 2,
            value: "4.8/5",
            label: "App Store Rating",
            icon: Star,
            description: "Loved by students and professionals"
        },
        {
            id: 3,
            value: "1M+",
            label: "Pages Visualized",
            icon: Globe,
            description: "Transforming content across the globe"
        },
        {
            id: 4,
            value: "#1",
            label: "Education App",
            icon: Award,
            description: "Top trending in Education category"
        }
    ]

    return (
        <section id="achievements" className="relative py-24 bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent"></div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1DB954]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Making an <span className="text-[#1DB954]">Impact</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Join thousands of users who are transforming their reading experience with VisuaLit.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1DB954]/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[#1DB954]/0 group-hover:bg-[#1DB954]/5 rounded-2xl transition-all duration-300"></div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                <div className="p-3 rounded-full bg-[#1DB954]/10 text-[#1DB954] group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="w-6 h-6" />
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-4xl font-bold text-white tracking-tight">
                                        {stat.value}
                                    </h3>
                                    <p className="text-[#1DB954] font-medium text-sm uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {contentData.achievements.awards.map((award) => (
                        <div
                            key={award.id}
                            className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-[#1DB954]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[#1DB954]/0 group-hover:bg-[#1DB954]/5 transition-all duration-300"></div>

                            {/* Image Container */}
                            <div className="relative h-36 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${award.id === 2 ? 'object-[center_10%]' : ''
                                        }`}
                                />
                                <div className="absolute bottom-4 left-4 right-4 z-20">
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                        {award.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-6 flex-1 flex flex-col">
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <TestimonialsSection />
        </section>
    )
}

export default AchievementSection