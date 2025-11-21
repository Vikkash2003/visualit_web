'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
import { ArrowRight, BookOpen, Sparkles, Play, MousePointer2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SparklesText } from "@/components/ui/sparkles-text"
import { useRef, useEffect } from 'react'

const HeroSection = () => {
    const containerRef = useRef(null)
    const { scrollY } = useScroll()

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 1000], [0, 400])
    const y2 = useTransform(scrollY, [0, 1000], [0, -200])
    const opacity = useTransform(scrollY, [0, 500], [1, 0])
    const scale = useTransform(scrollY, [0, 500], [1, 0.9])

    // Mouse follow effect for spotlight
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <section
            ref={containerRef}
            className="relative min-h-[120vh] flex flex-col items-center justify-start pt-32 overflow-hidden bg-black selection:bg-[#1DB954] selection:text-black"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1DB954]/20 via-black/0 to-transparent blur-[120px]" />
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Floating Elements */}
            <motion.div style={{ y: y1, x: -100 }} className="absolute top-40 left-[10%] opacity-20 pointer-events-none hidden lg:block">
                <BookOpen className="w-24 h-24 text-white" />
            </motion.div>
            <motion.div style={{ y: y2, x: 100 }} className="absolute top-60 right-[10%] opacity-20 pointer-events-none hidden lg:block">
                <Sparkles className="w-20 h-20 text-[#1DB954]" />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]"></span>
                    </span>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        v2.0 is now live
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-300" />
                </motion.div>

                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="relative mb-8"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-2">
                        Read. <br className="md:hidden" />
                        <span className="relative inline-block">
                            <span className="absolute -inset-2 bg-gradient-to-r from-[#1DB954]/20 to-purple-500/20 blur-2xl opacity-50"></span>
                            <SparklesText text="Visualize." className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] via-emerald-400 to-[#1DB954] animate-gradient" />
                        </span>
                        <br />
                        Understand.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Transform your reading experience with AI-powered visualization.
                    Turn complex text into vivid imagery instantly.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-20"
                >
                    <Button
                        size="lg"
                        className="h-14 px-8 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(29,185,84,0.5)]"
                    >
                        Get Started Free
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="h-14 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md font-medium text-lg transition-all hover:scale-105"
                    >
                        <Play className="mr-2 w-5 h-5 fill-current" />
                        Watch Demo
                    </Button>
                </motion.div>

                {/* Phone Mockup Container */}
                <motion.div
                    style={{ y: y1, scale, opacity }}
                    className="relative w-full max-w-[1000px] mx-auto perspective-1000"
                >
                    {/* Glow behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-[#1DB954]/10 via-purple-500/5 to-transparent blur-3xl rounded-full pointer-events-none" />

                    <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-2 shadow-2xl overflow-hidden ring-1 ring-white/5 transform-gpu">
                        {/* Screen Content */}
                        <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[16/10] md:aspect-[21/9]">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />

                            {/* UI Mockup */}
                            <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                                {/* Left: Text */}
                                <div className="space-y-6 flex flex-col justify-center">
                                    <div className="h-2 w-24 bg-white/10 rounded-full" />
                                    <div className="space-y-3">
                                        <div className="h-4 w-full bg-white/20 rounded-lg animate-pulse" />
                                        <div className="h-4 w-[90%] bg-white/20 rounded-lg animate-pulse delay-75" />
                                        <div className="h-4 w-[95%] bg-white/20 rounded-lg animate-pulse delay-150" />
                                        <div className="h-4 w-[85%] bg-white/20 rounded-lg animate-pulse delay-200" />
                                    </div>
                                    <div className="flex gap-2 pt-4">
                                        <div className="h-8 w-8 rounded-full bg-[#1DB954]/20 border border-[#1DB954]/30 flex items-center justify-center">
                                            <Sparkles className="w-4 h-4 text-[#1DB954]" />
                                        </div>
                                        <div className="h-8 w-24 rounded-full bg-white/5 border border-white/10" />
                                    </div>
                                </div>

                                {/* Right: Visualization */}
                                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900/50 backdrop-blur-sm group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img
                                        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                                        alt="Visualization"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Floating Label */}
                                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
                                        <span className="text-xs font-medium text-white">Generating...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
        </section>
    )
}

export default HeroSection