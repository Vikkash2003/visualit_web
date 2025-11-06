'use client'

import { Download, Play, Sparkles, BookOpen, Eye } from 'lucide-react'
import Button from '@/components/ui/button'
import { IPhoneX } from '@/components/ui/device-mockup'
import { DemoVideo } from '@/components/DemoVideo'
import { useEffect, useState } from 'react'

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Typography */}
                    <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300 font-medium">AI-Powered Reading Assistant</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
                            <span className="block text-white">Read.</span>
                            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                                Visualize.
                            </span>
                            <span className="block mt-2 text-white">Understand.</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                            Transform your reading experience with <span className="text-purple-400 font-semibold">AI-powered visualizations</span>.
                            No more struggling to imagine complex concepts.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                <Eye className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-gray-300">Real-time Visualization</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                <BookOpen className="w-4 h-4 text-pink-400" />
                                <span className="text-sm text-gray-300">Smart Reading</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Button className="group text-base sm:text-lg px-8 py-7 shadow-2xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all hover:scale-105 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-700 hover:via-purple-600 hover:to-pink-700 font-semibold">
                                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                                Download Now
                            </Button>
                            <DemoVideo
                                trigger={
                                    <Button
                                        variant="outline"
                                        className="text-base sm:text-lg px-8 py-7 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-white/20 hover:bg-white/10 hover:border-purple-500/50 backdrop-blur-sm font-semibold"
                                    >
                                        <Play className="mr-2 h-5 w-5" />
                                        Watch Demo
                                    </Button>
                                }
                            />
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-black"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-black"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-black"></div>
                                </div>
                                <span>50,000+ users</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400">★★★★★</span>
                                <span>4.9/5</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - iPhone Mockup with Animation */}
                    <div className="flex items-center justify-center relative lg:justify-end">
                        {/* Gradient Orbs */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
                        </div>

                        {/* iPhone Mockup Container */}
                        <div
                            className="relative z-10 transition-transform duration-300"
                            style={{
                                transform: `translateY(${scrollY * 0.1}px) scale(${1 - scrollY * 0.0001})`
                            }}
                        >
                            <div className="relative hover:scale-105 transition-transform duration-500">
                                <IPhoneX>
                                    <div className="w-full h-full bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950 flex flex-col overflow-hidden">
                                        {/* Status Bar */}
                                        <div className="flex justify-between items-center px-6 py-3 text-white text-xs">
                                            <span>9:41</span>
                                            <div className="flex gap-1">
                                                <div className="w-4 h-3 border border-white rounded-sm"></div>
                                                <div className="w-1 h-3 bg-white rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* App Header */}
                                        <div className="px-6 py-4 border-b border-white/10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                                                    <Eye className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-white text-sm font-bold">Visualit</h3>
                                                    <p className="text-gray-400 text-xs">Smart Reading</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="flex-1 p-4 space-y-3 overflow-hidden">
                                            {/* Reading Card 1 */}
                                            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/30 animate-float">
                                                <div className="flex gap-3 mb-3">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                                        <BookOpen className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-white text-sm font-semibold mb-1">The Solar System</h4>
                                                        <p className="text-gray-400 text-xs">Visualizing now...</p>
                                                    </div>
                                                </div>
                                                <div className="w-full h-20 bg-gray-800/50 rounded-lg overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-70"></div>
                                                </div>
                                            </div>

                                            {/* Reading Card 2 */}
                                            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-xl rounded-2xl p-4 border border-blue-500/30 animate-float" style={{ animationDelay: '1s' }}>
                                                <div className="flex gap-3 mb-3">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                                        <Sparkles className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-white text-sm font-semibold mb-1">AI Learning</h4>
                                                        <p className="text-gray-400 text-xs">Active</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="h-2 bg-purple-500/30 rounded-full overflow-hidden">
                                                        <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                                                    </div>
                                                    <div className="h-2 bg-blue-500/30 rounded-full overflow-hidden">
                                                        <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Stats */}
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                                                    <p className="text-gray-400 text-xs mb-1">Words/min</p>
                                                    <p className="text-white text-lg font-bold">250</p>
                                                </div>
                                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                                                    <p className="text-gray-400 text-xs mb-1">Visualized</p>
                                                    <p className="text-purple-400 text-lg font-bold">98%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </IPhoneX>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection