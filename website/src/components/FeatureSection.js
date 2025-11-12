"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
    IconBrain,
    IconBolt,
    IconEye,
    IconBook,
    IconSparkles,
    IconRocket,
    IconShield,
    IconHeart,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { contentData } from "@/lib/contentData";

export function FeatureSection() {
    // Icon mapping
    const iconMap = {
        'Brain': IconBrain,
        'Bolt': IconBolt,
        'Eye': IconEye,
        'Book': IconBook,
        'Sparkles': IconSparkles,
        'Rocket': IconRocket,
        'Shield': IconShield,
        'Heart': IconHeart
    };

    return (
        <section id="feature" className="w-full py-24 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm mb-6">
                        <IconSparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300 font-medium">{contentData.features.badge.text}</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        {contentData.features.title.split('Transform Reading')[0]}{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Transform Reading
                        </span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        {contentData.features.subtitle}
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contentData.features.items.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} iconMap={iconMap} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature, index, iconMap }) {
    const [isHovered, setIsHovered] = useState(false);
    const { title, description, icon, gradient } = feature;
    const delay = index * 0.1;
    const IconComponent = iconMap[icon];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-[#1DB954]/30 hover:border-[#1DB954] transition-all duration-500 cursor-pointer overflow-hidden",
                "hover:shadow-[0_0_30px_rgba(29,185,84,0.3)] hover:-translate-y-2"
            )}
        >
            {/* Gradient Overlay on Hover */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                gradient
            )}></div>

            {/* Animated Border Glow */}
            <div className={cn(
                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                `bg-gradient-to-br ${gradient}`
            )}></div>

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className={cn(
                    "mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br transition-all duration-500",
                    gradient,
                    "group-hover:scale-110 group-hover:rotate-6"
                )}>
                    <div className="text-white text-3xl transform group-hover:scale-110 transition-transform duration-500">
                        <IconComponent />
                    </div>
                </div>

                {/* Title */}
                <h3 className={cn(
                    "text-2xl font-bold mb-4 transition-all duration-500",
                    isHovered 
                        ? `text-transparent bg-gradient-to-r bg-clip-text ${gradient}`
                        : "text-white"
                )}>
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {description}
                </p>

                {/* Hover Arrow */}
                <div
                    className={cn(
                        "mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2",
                        "text-transparent bg-gradient-to-r bg-clip-text",
                        gradient
                    )}
                >
                    <span className="font-semibold text-sm">Learn more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Floating Particles */}
            <motion.div
                animate={isHovered ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className={cn(
                    "absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                    `bg-gradient-to-br ${gradient}`
                )}
            ></motion.div>
        </motion.div>
    );
}

export default FeatureSection;
