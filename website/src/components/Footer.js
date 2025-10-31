"use client";

import React, { useState, useEffect } from "react";
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
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
            <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 py-10 sm:py-12 lg:py-16">
                <div className="grid gap-8 sm:gap-10 lg:gap-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Newsletter Section */}
                    <div className="relative">
                        <h2 className="mb-3 lg:mb-4 text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight">Stay Connected</h2>
                        <p className="mb-4 lg:mb-6 text-sm lg:text-base text-muted-foreground">
                            Join our newsletter for the latest updates and exclusive offers.
                        </p>
                        <form className="relative">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="pr-12 backdrop-blur-sm text-sm lg:text-base h-10 lg:h-11"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 lg:h-9 lg:w-9 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Subscribe</span>
                            </Button>
                        </form>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg xl:text-xl font-semibold">Quick Links</h3>
                        <nav className="space-y-2 text-sm lg:text-base">
                            <a href="#" className="block transition-colors hover:text-primary">Home</a>
                            <a href="#" className="block transition-colors hover:text-primary">About Us</a>
                            <a href="#" className="block transition-colors hover:text-primary">Services</a>
                            <a href="#" className="block transition-colors hover:text-primary">Products</a>
                            <a href="#" className="block transition-colors hover:text-primary">Contact</a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg xl:text-xl font-semibold">Contact Us</h3>
                        <address className="space-y-2 text-sm lg:text-base not-italic">
                            <p>123 Innovation Street</p>
                            <p>Tech City, TC 12345</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: hello@example.com</p>
                        </address>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg xl:text-xl font-semibold">Follow Us</h3>
                        <div className="mb-4 lg:mb-6 flex space-x-3 lg:space-x-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10">
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
                                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10">
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
                                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10">
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
                                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10">
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
                <div className="mt-8 lg:mt-12 flex flex-col items-center justify-center border-t pt-6 lg:pt-8 text-center">
                    <p className="text-xs lg:text-sm text-muted-foreground">
                        © 2024 Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export { Footer };