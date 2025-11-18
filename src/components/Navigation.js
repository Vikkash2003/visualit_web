'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { contentData } from '@/lib/contentData'
import { Home, Info, Layers, DollarSign, BookOpen, Award } from 'lucide-react'

const Navigation = () => {
    const [isCompact, setIsCompact] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const navItems = contentData.navLinks

    useEffect(() => {
        const check = () => {
            setIsCompact(window.innerWidth <= 930 && window.innerWidth > 768)
            setIsMobile(window.innerWidth <= 768)
        }
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])
    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* Gradient Background - Black to Transparent */}
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none"></div>
            
            <div className="relative px-3 sm:px-6 pt-8 sm:pt-12">
                <div className="max-w-5xl mx-auto flex flex-col items-center relative">
                    {/* Pill-shaped Navigation Bar */}
                    <div 
                        className={`w-full grid items-center backdrop-blur-xl bg-black/80 border border-white/10 rounded-full shadow-2xl shadow-black/50 relative py-3 px-4 ${
                            isMobile ? 'py-2 px-3' : ''
                        }`}
                        style={{ 
                            gridTemplateColumns: isMobile ? '1fr 4.5rem 1fr' : '1fr 6.25rem 1fr'
                        }}
                    >
                        {/* Left Navigation Links */}
                        <div className="flex items-center justify-evenly">
                            {navItems.slice(0, 3).map((item) => {
                                let Icon = Home
                                if (item.title.toLowerCase().includes('about')) Icon = Info
                                else if (item.title.toLowerCase().includes('feature')) Icon = Layers

                                if (isCompact || isMobile) {
                                    return (
                                        <a 
                                            key={item.title} 
                                            href={item.href} 
                                            className="text-white hover:text-[#1DB954] transition-colors px-2 py-2" 
                                            aria-label={item.title}
                                        >
                                            <Icon className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
                                        </a>
                                    )
                                }

                                return (
                                    <a 
                                        key={item.title} 
                                        href={item.href} 
                                        className="text-white hover:text-[#1DB954] transition-colors text-base font-medium whitespace-nowrap px-2 py-2"
                                    >
                                        {item.title}
                                    </a>
                                )
                            })}
                        </div>

                        {/* Center Logo Space */}
                        <div className="flex items-center justify-center flex-shrink-0">
                            {/* Empty space to maintain grid layout */}
                        </div>

                        {/* Logo - Floating above/outside the navigation bar */}
                        <div 
                            className={`absolute left-1/2 -translate-x-1/2 z-10 ${
                                isMobile ? '-top-2' : '-top-5'
                            }`}
                        >
                            <Image 
                                src="/VisuaLit-Logo.png" 
                                alt="VisuaLit Logo" 
                                width={80} 
                                height={80}
                                className={`object-contain hover:scale-110 transition-transform duration-300 ${
                                    isMobile ? 'w-16 h-16' : 'w-20 h-20'
                                }`}
                                style={{
                                    filter: 'drop-shadow(0 0 15px rgba(29, 185, 84, 0.5))',
                                    animation: 'pulse-glow 2s ease-in-out infinite'
                                }}
                            />
                        </div>

                        {/* Right Navigation Links */}
                        <div className="flex items-center justify-evenly">
                            {navItems.slice(3).map((item) => {
                                let Icon = DollarSign
                                if (item.title.toLowerCase().includes('story')) Icon = BookOpen
                                else if (item.title.toLowerCase().includes('achiev') || item.title.toLowerCase().includes('award')) Icon = Award

                                if (isCompact || isMobile) {
                                    return (
                                        <a 
                                            key={item.title} 
                                            href={item.href} 
                                            className="text-white hover:text-[#1DB954] transition-colors px-2 py-2" 
                                            aria-label={item.title}
                                        >
                                            <Icon className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
                                        </a>
                                    )
                                }

                                return (
                                    <a 
                                        key={item.title} 
                                        href={item.href} 
                                        className="text-white hover:text-[#1DB954] transition-colors text-base font-medium whitespace-nowrap px-2 py-2"
                                    >
                                        {item.title}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation