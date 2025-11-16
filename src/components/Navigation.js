'use client'

import { useState } from 'react'
import Image from 'next/image'
import { contentData } from '@/lib/contentData'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = contentData.navLinks

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* Gradient Background - Black to Transparent */}
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none"></div>
            
            <div className="relative px-6 pt-12">
                <div className="max-w-5xl mx-auto flex flex-col items-center relative">
                    {/* Pill-shaped Navigation Bar */}
                    <div className="w-full grid items-center backdrop-blur-xl bg-black/80 border border-white/10 rounded-full py-3 px-4 shadow-2xl shadow-black/50 relative" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
                    {/* Left Navigation Links - Home, Feature, Achievement */}
                    <div className="hidden md:flex items-center justify-evenly">
                        {navItems.slice(0, 3).map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="text-white hover:text-[#1DB954] transition-colors text-base font-medium whitespace-nowrap"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {/* Center Logo Space - maintains the grid spacing */}
                    <div className="flex items-center justify-center flex-shrink-0 w-16">
                        {/* Empty space to maintain grid layout */}
                    </div>

                    {/* Logo - Floating above/outside the navigation bar */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-10">
                        <Image 
                            src="/VisuaLit-Logo.png" 
                            alt="VisuaLit Logo" 
                            width={80} 
                            height={80}
                            className="object-contain hover:scale-110 transition-transform duration-300"
                            style={{
                                filter: 'drop-shadow(0 0 15px rgba(29, 185, 84, 0.5))',
                                animation: 'pulse-glow 2s ease-in-out infinite'
                            }}
                        />
                    </div>

                    {/* Right Navigation Links - Pricing, About, Subscription */}
                    <div className="hidden md:flex items-center justify-evenly">
                        {navItems.slice(3).map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="text-white hover:text-[#1DB954] transition-colors text-base font-medium whitespace-nowrap"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2 backdrop-blur-xl bg-black/80 border border-white/10 rounded-3xl p-4 shadow-2xl shadow-black/50 w-full">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="text-white hover:text-[#1DB954] hover:bg-white/5 transition-colors px-4 py-3 text-base font-medium rounded-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            </div>
        </nav>
    )
}

export default Navigation