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
import { contentData } from "@/lib/contentData";

function Footer() {
    // Icon mapping
    const iconMap = {
        'Facebook': Facebook,
        'Twitter': Twitter,
        'Instagram': Instagram,
        'Linkedin': Linkedin
    };
    return (
        <footer className="relative border-t border-white/10 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white transition-colors duration-300">
            {/* Spotify Green Gradient Line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#1DB954] to-transparent opacity-80"></div>
            <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 py-10 sm:py-12 lg:py-16">
                <div className="grid gap-8 sm:gap-10 lg:gap-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Newsletter Section */}
                    <div className="relative">
                        <h2 className="mb-3 lg:mb-4 text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white">{contentData.footer.newsletter.title}</h2>
                        <p className="mb-4 lg:mb-6 text-sm lg:text-base text-gray-400">
                            {contentData.footer.newsletter.description}
                        </p>
                        <form className="relative">
                            <Input
                                type="email"
                                placeholder={contentData.footer.newsletter.placeholder}
                                className="pr-12 backdrop-blur-sm text-sm lg:text-base h-10 lg:h-11 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 lg:h-9 lg:w-9 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-transform hover:scale-105"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">{contentData.footer.newsletter.buttonLabel}</span>
                            </Button>
                        </form>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-purple-600/20 blur-2xl" />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg xl:text-xl font-semibold text-white">{contentData.footer.quickLinks.title}</h3>
                        <nav className="space-y-2 text-sm lg:text-base">
                            {contentData.footer.quickLinks.links.map((link, index) => (
                                <a key={index} href={link.href} className="block transition-colors hover:text-purple-400 text-gray-400">
                                    {link.text}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg xl:text-xl font-semibold text-white">{contentData.footer.contact.title}</h3>
                        <address className="space-y-2 text-sm lg:text-base not-italic text-gray-400">
                            {contentData.footer.contact.address.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                            <p>Phone: {contentData.footer.contact.phone}</p>
                            <p>Email: {contentData.footer.contact.email}</p>
                        </address>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg xl:text-xl font-semibold text-white">{contentData.footer.social.title}</h3>
                        <div className="mb-4 lg:mb-6 flex space-x-3 lg:space-x-4">
                            {contentData.footer.social.platforms.map((platform, index) => {
                                const IconComponent = iconMap[platform.icon];
                                return (
                                    <TooltipProvider key={index}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="outline" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10 bg-white/5 border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 text-gray-400 hover:text-purple-400">
                                                    <IconComponent className="h-4 w-4 lg:h-5 lg:w-5" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{platform.tooltip}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="mt-8 lg:mt-12 flex flex-col items-center justify-center border-t border-white/10 pt-6 lg:pt-8 text-center">
                    <p className="text-xs lg:text-sm text-gray-400">
                        {contentData.footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export { Footer };