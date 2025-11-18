'use client'

import { Download, Play, Sparkles, BookOpen } from 'lucide-react'
import Button from '@/components/ui/button'
import { DemoVideo } from '@/components/DemoVideo'
import { contentData } from '@/lib/contentData'

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-10 snap-start scroll-mt-24">
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                    <div className="space-y-4 text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300 font-medium">AI-Powered Reading App</span>
                        </div>

                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
                            <span className="block text-white">Read.</span>
                            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-[#1DB954] to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Visualize.</span>
                            <span className="block mt-2 text-white">Understand.</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light pt-2">
                            Transform your reading experience with <span className="text-[#1DB954] font-semibold">AI-powered Visualizations</span>. Bridging the gap between text and imagination.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.visualit.app.visualit&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="group text-base sm:text-lg px-8 py-7 shadow-2xl shadow-[#1DB954]/30 hover:shadow-[#1DB954]/50 transition-all hover:scale-105 bg-gradient-to-r from-[#1DB954] to-green-600 hover:from-[#1DB954]/90 hover:to-green-600/90 font-semibold">
                                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                                    {contentData?.hero?.ctaButtons?.primary?.text ?? 'Download'}
                                </Button>
                            </a>
                            <DemoVideo
                                trigger={
                                    <Button
                                        variant="outline"
                                        className="text-base sm:text-lg px-8 py-7 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-white/20 hover:bg-white/10 hover:border-[#1DB954]/50 backdrop-blur-sm font-semibold"
                                    >
                                        <Play className="mr-2 h-5 w-5" />
                                        Watch Demo
                                    </Button>
                                }
                            />
                        </div>

                        <div className="flex items-center gap-6 justify-center pt-4 text-sm text-gray-400">
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
                </div>
            </div>
        </section>
    )
}

export default HeroSection