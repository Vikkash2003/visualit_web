'use client'
import { useState, useEffect } from 'react'
import { Download, Play, Sparkles, BookOpen, Users, Target, Zap, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import { DemoVideo } from '@/components/DemoVideo'
import { contentData } from '@/lib/contentData'
import { SparklesText } from '@/components/ui/sparkles-text'
const HeroSection = () => {
    const iconMap = {
        'Target': Target,
        'Users': Users,
        'Zap': Zap,
        'Award': Award
    };
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <section id="home" className="relative w-full bg-[#050505] overflow-hidden">
            {/* Part 1: Hero Top (Extended Height) */}
            <div className="relative min-h-[100vh] flex flex-col items-center pt-48 pb-80">
                {/* Background Gradients */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
                </div>
                <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center relative">
                        {/* Main Content - Compact */}
                        <div className="space-y-4 max-w-2xl mx-auto relative z-30">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1DB954]/10 border border-[#1DB954]/20 rounded-full backdrop-blur-sm mx-auto">
                                <Sparkles className="w-4 h-4 text-[#1DB954]" />
                                <span className="text-xs text-[#1DB954] font-medium">AI-Powered Reading App</span>
                            </div>
                            <h1 className="font-display text-7xl sm:text-7xl md:text-7xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                                <span className="block text-white">Read.</span>
                                <SparklesText
                                    text="Visualize."
                                    className="block mt-2 bg-gradient-to-r from-green-300 via-[#19cb57] to-green-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] text-7xl sm:text-7xl md:text-7xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
                                    colors={{ first: '#1DB954', second: '#4ade80' }}
                                />
                                <span className="block mt-2 text-white">Understand.</span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light pt-1">Transform your reading experience with <span className="text-[#1DB954] font-semibold">AI-powered Visualizations</span><br />Bridging the gap between text and imagination.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.visualit.app.visualit&hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="group text-base sm:text-lg px-8 py-6 shadow-2xl shadow-[#1DB954]/30 hover:shadow-[#1DB954]/50 transition-all hover:scale-105 bg-gradient-to-r from-[#1DB954] to-green-600 hover:from-[#1DB954]/90 hover:to-green-600/90 font-semibold">
                                        <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                                        Download Now
                                    </Button>
                                </a>
                                <div className="w-full sm:w-auto">
                                    <DemoVideo
                                        trigger={
                                            <Button
                                                variant="outline"
                                                className="text-base sm:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-white/20 hover:bg-white/10 hover:border-[#1DB954]/50 backdrop-blur-sm font-semibold"
                                            >
                                                <Play className="mr-2 h-5 w-5" />
                                                Watch Demo
                                            </Button>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-6 justify-center pt-2 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1DB954] to-green-600 border-2 border-black"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-black"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-black"></div>
                                    </div>
                                    <span>150+ users</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-400">★★★★★</span>
                                    <span>4.9/5</span>
                                </div>
                            </div>
                        </div>
                        {/* Side Visualizations (Floating Elements) */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 hidden xl:block opacity-60 pointer-events-none">
                            <div className="relative w-64 h-64 animate-float-slow">
                                <div className="absolute inset-0 border-2 border-[#1DB954]/20 rounded-full border-dashed animate-spin-slow"></div>
                                <BookOpen className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-[#1DB954]/40" />
                                <div className="absolute top-0 right-0 w-3 h-3 bg-[#1DB954] rounded-full shadow-[0_0_15px_#1DB954]"></div>
                            </div>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden xl:block opacity-60 pointer-events-none">
                            <div className="relative w-48 h-48 animate-float-reverse">
                                <div className="absolute inset-0 border border-white/10 rounded-3xl rotate-12"></div>
                                <div className="absolute -inset-4 border border-white/5 rounded-3xl -rotate-6"></div>
                                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-purple-500/40" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Glow behind phone - Moved outside to avoid clipping */}
                <div className="absolute bottom-[-480px] left-1/2 -translate-x-1/2 w-full max-w-[350px] z-30 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[#1DB954]/30 blur-[100px] rounded-full opacity-60"></div>
                </div>

                {/* Stacked phone layers for scroll animation */}
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className={`absolute bottom-[-480px] left-1/2 -translate-x-1/2 w-full max-w-[350px] z-${30 - i * 10} perspective-[1000px]`}
                        style={{
                            transform: `translateY(${Math.max(0, scrollY - 300 - i * 30)}px)`,
                            opacity: 0.6 - i * 0.1,
                        }}
                    >
                        <div className="relative bg-[#0a0a0a] border-8 border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden"></div>
                    </div>
                ))}

                {/* Phone Bridge - Positioned to straddle the sections */}
                <div className="absolute bottom-[-480px] left-1/2 -translate-x-1/2 w-full max-w-[350px] z-40 perspective-[1000px] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                    {/* Phone Body */}
                    <div className="relative bg-[#0a0a0a] border-8 border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden">
                        {/* Screen Content Placeholder */}
                        <div className="aspect-[9/19] bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
                            {/* Mock UI Elements */}
                            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
                            <div className="p-6 space-y-4 mt-12">
                                <div className="w-16 h-16 bg-[#1DB954]/20 rounded-2xl flex items-center justify-center mb-6">
                                    <Sparkles className="w-8 h-8 text-[#1DB954]" />
                                </div>
                                <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                                <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                                <div className="h-32 w-full bg-white/5 rounded-xl mt-8 border border-white/5"></div>
                                <div className="h-4 w-2/3 bg-white/10 rounded-full"></div>
                                <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Part 2: About Content (Reading Reimagined) - Integrated */}
            <div className="relative z-50 w-full pt-[260px] pb-20 px-6">
                <div className="max-w-7xl mx-auto relative z-50 w-full">
                    {/* Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Reading <span className="bg-gradient-to-r from-green-500 via-green-600 to-green-800 bg-clip-text text-transparent">Reimagined</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            {contentData.about.subtitle}
                        </p>
                    </div>
                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contentData.about.values.map((value, index) => {
                            const IconComponent = iconMap[value.icon];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl transition-colors duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-[#1DB954]/10 flex items-center justify-center text-[#1DB954] mb-6 group-hover:scale-110 group-hover:bg-[#1DB954] group-hover:text-black transition-all duration-300">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection