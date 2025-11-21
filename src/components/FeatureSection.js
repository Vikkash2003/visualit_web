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
    IconPhoto,
    IconVolume,
    IconBook2,
    IconDeviceMobile,
    IconFlame,
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
        'BookOpen': IconBook2,
        'Sparkles': IconSparkles,
        'Rocket': IconRocket,
        'Shield': IconShield,
        'Heart': IconHeart,
        'Image': IconPhoto,
        'SpeakerWave': IconVolume,
        'DevicePhoneMobile': IconDeviceMobile,
        'Fire': IconFlame
    };

    return (
        <section id="feature" className="min-h-screen w-full py-24 px-4 relative overflow-hidden snap-start scroll-mt-24 flex items-center">
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm mb-6">
                        <IconSparkles className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-600 font-medium">{contentData.features.badge.text}</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        A New Way to{" "}
                        <span className="bg-gradient-to-r from-green-700 via-green-400 to-green-600 bg-clip-text text-transparent">
                            Experience Stories
                        </span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        {contentData.features.subtitle}
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
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
            className="group relative h-full p-6 rounded-3xl transition-all duration-300 hover:bg-white/5"
        >
            <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className={cn(
                    "mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 transition-all duration-500 group-hover:scale-110",
                    isHovered ? gradient : "text-gray-400"
                )}>
                    <div className={cn(
                        "text-2xl transition-colors duration-300",
                        isHovered ? "text-white" : "text-gray-400"
                    )}>
                        <IconComponent />
                    </div>
                </div>

                {/* Title */}
                <h3 className={cn(
                    "text-xl font-bold mb-3 transition-all duration-300",
                    isHovered ? "text-white" : "text-gray-200"
                )}>
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300 flex-grow">
                    {description}
                </p>

                {/* Hover Line */}
                <div className={cn(
                    "h-0.5 w-0 mt-6 transition-all duration-500 rounded-full bg-gradient-to-r",
                    gradient,
                    isHovered ? "w-full opacity-100" : "w-0 opacity-0"
                )} />
            </div>
        </motion.div>
    );
}

export default FeatureSection;
