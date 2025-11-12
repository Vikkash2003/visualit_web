'use client'

import { Download, Play, Sparkles, BookOpen, Eye } from 'lucide-react'
import Button from '@/components/ui/button'
import { IPhoneX } from 'react-device-mockups'
import { DemoVideo } from '@/components/DemoVideo'
import { useEffect, useState } from 'react'
import { contentData } from '@/lib/contentData'

// Phone Mockup Component
const PhoneMockup = ({ scrollY, delay = 0 }) => {
    return (
        <div
            className="relative z-10 transition-transform duration-300"
            style={{
                transform: `translateY(${scrollY * 0.05}px) scale(${1 - scrollY * 0.00005})`,
                animationDelay: `${delay}s`
            }}
        >
            <div className="relative hover:scale-105 transition-transform duration-500">
                <IPhoneX>
                    <div className="w-full h-full bg-black flex flex-col overflow-hidden">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-6 py-3 text-white text-xs">
                            <span>9:41</span>
                            <div className="flex gap-1 items-center">
                                <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 16 12">
                                    <rect x="0" y="3" width="3" height="6" rx="0.5"/>
                                    <rect x="4" y="2" width="3" height="8" rx="0.5"/>
                                    <rect x="8" y="1" width="3" height="10" rx="0.5"/>
                                    <rect x="12" y="0" width="3" height="12" rx="0.5"/>
                                </svg>
                                <svg className="w-4 h-3 ml-1" fill="currentColor" viewBox="0 0 24 12">
                                    <rect x="0" y="0" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                                    <rect x="19" y="4" width="2" height="4" rx="0.5"/>
                                    <rect x="2" y="2" width="14" height="8" rx="1"/>
                                </svg>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="px-4 pt-2 pb-3">
                            <div className="bg-gray-900 rounded-xl px-4 py-2.5 flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span className="text-gray-500 text-xs">Search books...</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 px-4 overflow-y-auto" suppressHydrationWarning>
                            {/* Reading Streak Card */}
                            <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800 mb-4">
                                <h3 className="text-white text-sm font-semibold mb-3">Reading Streak</h3>

                                {/* Streak Grid */}
                                <div className="mb-3 bg-black/50 rounded-lg p-2">
                                    <div className="grid grid-cols-10 gap-1">
                                        {Array.from({ length: 50 }, (_, i) => (
                                            <div
                                                key={`streak-${i}`}
                                                className={`w-2 h-2 rounded-sm ${
                                                    i % 3 === 0 ? 'bg-[#1DB954]' : 
                                                    i % 7 === 0 ? 'bg-[#1DB954]/70' : 
                                                    'bg-gray-800'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-3 text-center">
                                    <div>
                                        <p className="text-white text-lg font-bold">5</p>
                                        <p className="text-gray-500 text-xs">Current</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-lg font-bold">12</p>
                                        <p className="text-gray-500 text-xs">Longest</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-lg font-bold">30</p>
                                        <p className="text-gray-500 text-xs">Total Days</p>
                                    </div>
                                </div>
                            </div>

                            {/* Your Library */}
                            <div className="mb-3" suppressHydrationWarning>
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-white text-sm font-bold">Your Library</h3>
                                    <span className="text-[#1DB954] text-xs font-medium">View All</span>
                                </div>

                                {/* Book Carousel */}
                                <div className="flex gap-3 overflow-x-auto pb-2 -mr-4">
                                    {/* Book 1 */}
                                    <div className="flex-shrink-0 w-24">
                                        <div className="w-24 h-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-lg mb-2 flex items-center justify-center border border-blue-700/50">
                                            <BookOpen className="w-8 h-8 text-blue-300" />
                                        </div>
                                        <p className="text-white text-xs font-medium leading-tight line-clamp-2 mb-0.5">Harry Potter</p>
                                        <p className="text-gray-500 text-xs">J.K. Rowling</p>
                                    </div>

                                    {/* Book 2 */}
                                    <div className="flex-shrink-0 w-24">
                                        <div className="w-24 h-32 bg-gradient-to-br from-[#1DB954]/20 via-green-800 to-[#1DB954]/30 rounded-lg mb-2 flex items-center justify-center border border-[#1DB954]/50">
                                            <Sparkles className="w-8 h-8 text-[#1DB954]" />
                                        </div>
                                        <p className="text-white text-xs font-medium leading-tight line-clamp-2 mb-0.5">The Hobbit</p>
                                        <p className="text-gray-500 text-xs">J.R.R. Tolkien</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="border-t border-gray-900 bg-black px-4 py-3">
                            <div className="flex justify-between items-center">
                                <svg className="w-6 h-6 text-[#1DB954]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </IPhoneX>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#1DB954] rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1DB954] rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
        </div>
    )
}

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-10">
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                    {/* Left Phone Mockup - Hidden on mobile, visible on lg+ */}
                    <div className="hidden lg:flex items-center justify-start relative flex-shrink-0 lg:w-[280px]">
                        <PhoneMockup scrollY={scrollY} delay={0} />
                    </div>

                    {/* Center Content - Typography */}
                    <div className="space-y-4 text-center flex-1 max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300 font-medium">AI-Powered Reading Assistant</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
                            <span className="block text-white">Read.</span>
                            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-[#1DB954] to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                                Visualize.
                            </span>
                            <span className="block mt-2 text-white">Understand.</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light pt-2">
                            Transform your reading experience with <span className="text-[#1DB954] font-semibold">AI-powered visualizations</span>.
                            No more struggling to imagine complex concepts.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button className="group text-base sm:text-lg px-8 py-7 shadow-2xl shadow-[#1DB954]/30 hover:shadow-[#1DB954]/50 transition-all hover:scale-105 bg-gradient-to-r from-[#1DB954] to-green-600 hover:from-[#1DB954]/90 hover:to-green-600/90 font-semibold">
                                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                                Download Now
                            </Button>
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

                        {/* Social Proof */}
                        <div className="flex items-center gap-6 justify-center pt-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1DB954] to-green-600 border-2 border-black"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-black"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-black"></div>
                                </div>
                                <span>50,000+ users</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400">★★★★★</span>
                                <span>4.9/5</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Phone Mockup - Hidden on mobile, visible on lg+ */}
                    <div className="hidden lg:flex items-center justify-end relative flex-shrink-0 lg:w-[280px]">
                        <PhoneMockup scrollY={scrollY} delay={0.5} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection