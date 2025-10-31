'use client'

import { useState } from 'react'
import Button from '@/components/ui/button'
import { EditProfile } from '@/components/ui/edit-profile'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
    })

    const navItems = ['Home','Feature','Pricing','Achievement','About']

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/30">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                        Logo
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative text-white hover:text-gray-300 transition-colors px-3 lg:px-4 py-2 text-sm lg:text-base font-medium group"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                            </a>
                        ))}
                        <EditProfile
                            profile={profile}
                            setProfile={setProfile}
                            trigger={
                                <Button variant="outline" className="ml-2 text-sm lg:text-base">
                                    Subscription
                                </Button>
                            }
                        />
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
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white hover:text-gray-300 hover:bg-gray-900 transition-colors px-4 py-3 text-base font-medium rounded"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="px-4 pt-2">
                                <EditProfile
                                    profile={profile}
                                    setProfile={setProfile}
                                    trigger={
                                        <Button variant="outline" className="w-full">
                                            Subscription
                                        </Button>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation