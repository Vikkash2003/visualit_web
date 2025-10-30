'use client'

import { Download } from 'lucide-react'
import Button from '@/components/ui/button'
import { IPhoneX } from 'react-device-mockups'


const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-screen-2xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center py-20 lg:py-0">
                    {/* Left Side - Typography */}
                    <div className="space-y-8 lg:space-y-10 z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight tracking-tight">
                            <span className="block">Visualize the</span>
                            <span className="block mt-2">content when</span>
                            <span className="block mt-2">reading without</span>
                            <span className="block mt-2">imagine</span>
                        </h1>

                        {/* Download CTA Button */}
                        <div className="flex pt-2">
                            <Button className="text-base sm:text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
                                <Download className="mr-2 h-5 w-5" />
                                Download Now
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - iPhone Mockup */}
                    <div className="flex items-center justify-center relative">
                        {/* Gradient Background Blur */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 blur-3xl rounded-full scale-75"></div>

                        {/* iPhone Mockup Container */}
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 ease-out">
                            <div className="relative" style={{ width: '320px', height: '650px' }}>
                                <IPhoneX>
                                    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden">
                                        {/* You can replace this with an iframe or your actual content */}
                                        <div className="text-center p-6">
                                            <div className="mb-6">
                                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-white text-xl font-bold mb-2">Your App</h3>
                                                <p className="text-gray-400 text-sm">Experience the future</p>
                                            </div>

                                            {/* Demo Cards */}
                                            <div className="space-y-3">
                                                <div className="bg-gray-800/50 backdrop-blur rounded-xl p-3 text-left">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                                                        <div className="flex-1">
                                                            <div className="h-2 bg-gray-700 rounded w-3/4 mb-2"></div>
                                                            <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-800/50 backdrop-blur rounded-xl p-3 text-left">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                                                        <div className="flex-1">
                                                            <div className="h-2 bg-gray-700 rounded w-2/3 mb-2"></div>
                                                            <div className="h-2 bg-gray-700 rounded w-1/3"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </IPhoneX>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pink-500 rounded-full blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection