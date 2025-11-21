"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
    IconBrain,
    IconBolt,
    IconEye,
    IconBook,
    IconBook2,
    IconSparkles,
    IconRocket,
    IconShield,
    IconHeart,
    IconPhoto,
    IconVolume,
    IconDeviceMobile,
    IconFlame,
} from "@tabler/icons-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { contentData } from "@/lib/contentData";

export function FeatureSection() {
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
        <section id="feature" className="min-h-screen w-full py-32 px-4 relative overflow-hidden bg-black snap-start scroll-mt-24">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#1DB954]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954]/10 border border-[#1DB954]/20 rounded-full backdrop-blur-sm mb-8">
                        <IconSparkles className="w-4 h-4 text-[#1DB954]" />
                        <span className="text-sm text-[#1DB954] font-medium tracking-wide uppercase">{contentData.features.badge.text}</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        A New Way to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] via-emerald-400 to-[#1DB954] animate-gradient">
                            Experience Stories
                        </span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed font-light">
                        {contentData.features.subtitle}
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {contentData.features.items.map((feature, index) => (
                        <BentoGridItem
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={iconMap[feature.icon]}
                            className={index === 3 || index === 6 ? "md:col-span-2" : ""}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BentoGridItem({ className, title, description, icon: Icon, index }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "group relative border border-white/10 rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-sm hover:shadow-2xl transition duration-200 shadow-input dark:shadow-none flex flex-col justify-between p-8",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(29, 185, 84, 0.15),
                          transparent 80%
                        )
                      `,
                }}
            />

            <div className="relative z-10 transition duration-200 group-hover:-translate-y-2">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#1DB954]/20 to-transparent border border-[#1DB954]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-[#1DB954]" />
                </div>
                <div className="font-bold text-2xl text-white mb-3 tracking-tight">
                    {title}
                </div>
                <div className="font-light text-gray-400 text-base leading-relaxed">
                    {description}
                </div>
            </div>

            {/* Decorative background pattern */}
            <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-64 h-64" />
            </div>
        </motion.div>
    );
}

export default FeatureSection;
