"use client";

import React from "react";
import { motion } from "framer-motion";
import { privacyPolicy } from "./content";
import { Shield, Mail, Clock, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </div>
            </nav>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Icon Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-600 to-green-600 mb-6 shadow-lg shadow-emerald-500/50"
                    >
                        <Shield className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                            Privacy Policy
                        </span>
                    </h1>

                    {/* Last Updated */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                    >
                        <Clock className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-gray-300">
                            Last Updated: <span className="text-white font-medium">{privacyPolicy.lastUpdated}</span>
                        </span>
                    </motion.div>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mb-12 p-8 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-3xl backdrop-blur-sm"
                >
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {privacyPolicy.intro}
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="space-y-8">
                    {privacyPolicy.sections.map((section, index) => (
                        <PrivacySection key={index} section={section} index={index} />
                    ))}
                </div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 p-8 bg-gradient-to-br from-gray-900/80 to-black/80 border border-emerald-500/30 rounded-3xl backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Mail className="w-6 h-6 text-emerald-500" />
                            Questions or Concerns?
                        </h3>
                        <p className="text-gray-300 mb-4">
                            If you have any questions about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <a
                            href={`mailto:${privacyPolicy.contactEmail}`}
                            className="inline-flex items-center gap-2 text-xl font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
                        >
                            {privacyPolicy.contactEmail}
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function PrivacySection({ section, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
        >
            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    {/* Section Heading */}
                    <h2 className="text-3xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-500">
                        {section.heading}
                    </h2>

                    {/* Section Content */}
                    <div className="space-y-4">
                        {section.content.map((item, idx) => (
                            <ContentItem key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ContentItem({ item }) {
    if (item.type === "paragraph") {
        return (
            <p
                className="text-gray-300 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: item.text }}
            />
        );
    }

    if (item.type === "subheading") {
        return (
            <h3 className="text-xl font-semibold text-white mt-6 mb-3 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-emerald-500" />
                {item.text}
            </h3>
        );
    }

    if (item.type === "list") {
        return (
            <ul className="space-y-3 ml-4">
                {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                        <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: listItem }} />
                    </li>
                ))}
            </ul>
        );
    }

    return null;
}

