"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Twitter, Send, Check, Copy } from "lucide-react";
import { contentData } from "@/lib/contentData";
import { motion, AnimatePresence } from "framer-motion";

function Footer() {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState({ show: false, message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Icon mapping
    const iconMap = {
        'Facebook': Facebook,
        'Twitter': Twitter,
        'Instagram': Instagram,
        'Linkedin': Linkedin
    };

    // Copy phone number to clipboard
    const handleCopyPhone = async () => {
        try {
            await navigator.clipboard.writeText(contentData.footer.contact.phone);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // Handle newsletter subscription
    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setNewsletterStatus({
                show: true,
                message: 'Please enter a valid email address',
                type: 'error'
            });
            setTimeout(() => setNewsletterStatus({ show: false, message: '', type: '' }), 3000);
            return;
        }

        setIsSubmitting(true);

        try {
            // Create mailto link with newsletter subscription details
            const subject = encodeURIComponent('Newsletter Subscription Request');
            const body = encodeURIComponent(
                `New Newsletter Subscription Request\n\n` +
                `Email: ${email}\n` +
                `Date: ${new Date().toLocaleString()}\n\n` +
                `Please add this email to the VisuaLit newsletter mailing list.`
            );

            // Open mailto link
            window.location.href = `mailto:${contentData.footer.contact.email}?subject=${subject}&body=${body}`;

            // Show success message
            setNewsletterStatus({
                show: true,
                message: 'Opening your email client...',
                type: 'success'
            });

            // Clear the email input
            setEmail('');

            setTimeout(() => {
                setNewsletterStatus({ show: false, message: '', type: '' });
            }, 3000);
        } catch (err) {
            console.error('Failed to subscribe:', err);
            setNewsletterStatus({
                show: true,
                message: 'Something went wrong. Please try again.',
                type: 'error'
            });
            setTimeout(() => setNewsletterStatus({ show: false, message: '', type: '' }), 3000);
        } finally {
            setIsSubmitting(false);
        }
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
                        <form onSubmit={handleNewsletterSubmit} className="relative">
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={contentData.footer.newsletter.placeholder}
                                className="pr-12 backdrop-blur-sm text-sm lg:text-base h-10 lg:h-11 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                required
                            />
                            <Button
                                type="submit"
                                size="icon"
                                disabled={isSubmitting}
                                className="absolute right-1 top-1 h-8 w-8 lg:h-9 lg:w-9 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className={`h-4 w-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                                <span className="sr-only">{contentData.footer.newsletter.buttonLabel}</span>
                            </Button>

                            {/* Status Message */}
                            <AnimatePresence>
                                {newsletterStatus.show && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.8 }}
                                        transition={{ duration: 0.2 }}
                                        className={`absolute -bottom-12 left-0 right-0 px-3 py-2 rounded-lg text-xs font-medium shadow-lg flex items-center gap-1.5 z-50 ${
                                            newsletterStatus.type === 'success' 
                                                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                                                : 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                                        }`}
                                    >
                                        {newsletterStatus.type === 'success' ? (
                                            <Check className="w-3 h-3 flex-shrink-0" />
                                        ) : (
                                            <span className="w-3 h-3 flex-shrink-0">⚠</span>
                                        )}
                                        {newsletterStatus.message}
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                            <div className="relative inline-block">
                                <p className="flex items-center gap-2">
                                    Phone:{" "}
                                    <button
                                        onClick={handleCopyPhone}
                                        className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer underline decoration-dotted underline-offset-2 inline-flex items-center gap-1 group"
                                    >
                                        {contentData.footer.contact.phone}
                                        <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                </p>
                                <AnimatePresence>
                                    {copied && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute -top-10 left-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg flex items-center gap-1.5 whitespace-nowrap z-50"
                                        >
                                            <Check className="w-3 h-3" />
                                            Copied!
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <p>
                                Email:{" "}
                                <a
                                    href={`mailto:${contentData.footer.contact.email}`}
                                    className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-dotted underline-offset-2"
                                >
                                    {contentData.footer.contact.email}
                                </a>
                            </p>
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
                                                <a
                                                    href={platform.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center rounded-full h-9 w-9 lg:h-10 lg:w-10 bg-white/5 border border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 transition-colors"
                                                >
                                                    <IconComponent className="h-4 w-4 lg:h-5 lg:w-5" />
                                                </a>
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