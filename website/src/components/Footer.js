"use client";

import React from "react";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";

function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white transition-colors duration-300">
            <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 py-10 sm:py-12 lg:py-16">
                <div className="grid gap-8 sm:gap-10 lg:gap-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Newsletter Section */}
                    <div className="relative">
                        <h2 className="mb-3 lg:mb-4 text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white">Stay Connected</h2>
                        <p className="mb-4 lg:mb-6 text-sm lg:text-base text-gray-400">
                            Join our newsletter for the latest updates and exclusive offers.
                        </p>
                        <form className="relative">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="pr-12 backdrop-blur-sm text-sm lg:text-base h-10 lg:h-11 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 lg:h-9 lg:w-9 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-transform hover:scale-105"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Subscribe</span>
                            </Button>
                        </form>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-purple-600/20 blur-2xl" />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg xl:text-xl font-semibold text-white">Quick Links</h3>
                        <nav className="space-y-2 text-sm lg:text-base">
                            <a href="#home" className="block transition-colors hover:text-purple-400 text-gray-400">Home</a>
                            <a href="#feature" className="block transition-colors hover:text-purple-400 text-gray-400">Features</a>
                            <a href="#pricing" className="block transition-colors hover:text-purple-400 text-gray-400">Pricing</a>
                            <a href="#achievement" className="block transition-colors hover:text-purple-400 text-gray-400">Achievement</a>
                            <a href="#about" className="block transition-colors hover:text-purple-400 text-gray-400">About</a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg xl:text-xl font-semibold text-white">Contact Us</h3>
                        <address className="space-y-2 text-sm lg:text-base not-italic text-gray-400">
                            <p>123 Innovation Street</p>
                            <p>Tech City, TC 12345</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: hello@visualit.com</p>
                        </address>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg xl:text-xl font-semibold text-white">Follow Us</h3>
                        <div className="mb-4 lg:mb-6 flex space-x-3 lg:space-x-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10 bg-white/5 border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 text-gray-400 hover:text-purple-400">
                                            <Facebook className="h-4 w-4 lg:h-5 lg:w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Facebook</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10 bg-white/5 border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 text-gray-400 hover:text-purple-400">
                                            <Twitter className="h-4 w-4 lg:h-5 lg:w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Twitter</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10 bg-white/5 border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 text-gray-400 hover:text-purple-400">
                                            <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Instagram</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10 bg-white/5 border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 text-gray-400 hover:text-purple-400">
                                            <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Connect with us on LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="mt-8 lg:mt-12 flex flex-col items-center justify-center border-t border-white/10 pt-6 lg:pt-8 text-center">
                    <p className="text-xs lg:text-sm text-gray-400">
                        © 2025 Visualit. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export { Footer };