'use client'
import { useRef } from 'react'
import { Award, Star, Users, Globe, Trophy, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { contentData } from '@/lib/contentData'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'

const AchievementSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    const stats = [
        {
            id: 1,
            value: "50K+",
            label: "Active Readers",
            icon: Users,
            description: "Growing community of visual learners"
        },
        {
            id: 2,
            value: "4.8/5",
            label: "App Store Rating",
            icon: Star,
            description: "Loved by students and professionals"
        },
        {
            id: 3,
            value: "1M+",
            label: "Pages Visualized",
            icon: Globe,
            description: "Transforming content across the globe"
        },
        {
            id: 4,
            value: "#1",
            label: "Education App",
            icon: Award,
            description: "Top trending in Education category"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="achievements" className="relative py-32 bg-black overflow-hidden" ref={containerRef}>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent"></div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1DB954]/5 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Parallax Floating Icons */}
            <motion.div style={{ y: y1, rotate }} className="absolute top-20 left-[10%] opacity-20 pointer-events-none">
                <Trophy className="w-32 h-32 text-[#1DB954]" />
            </motion.div>
            <motion.div style={{ y: y2, rotate: useTransform(rotate, r => -r) }} className="absolute bottom-40 right-[10%] opacity-20 pointer-events-none">
                <Sparkles className="w-24 h-24 text-purple-500" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        Making an <span className="text-[#1DB954]">Impact</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
                        Join thousands of users who are transforming their reading experience with VisuaLit.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[#1DB954]/20 hover:border-[#1DB954]/30"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                <div className="p-4 rounded-2xl bg-[#1DB954]/10 text-[#1DB954] group-hover:scale-110 group-hover:bg-[#1DB954] group-hover:text-black transition-all duration-300 shadow-lg">
                                    <stat.icon className="w-8 h-8" />
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-5xl font-bold text-white tracking-tight">
                                        {stat.value}
                                    </h3>
                                    <p className="text-[#1DB954] font-medium text-sm uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Awards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
                >
                    {contentData.achievements.awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="group relative rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-[#1DB954]/10 transition-all duration-500"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image Container */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${award.id === 2 ? 'object-[center_10%]' : ''
                                        }`}
                                />
                                <div className="absolute bottom-6 left-6 right-6 z-20 transform group-hover:translate-y-[-4px] transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                        {award.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 flex-1 flex flex-col bg-white/5 backdrop-blur-md">
                                <p className="text-gray-300 text-base leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                                    {award.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="mt-20">
                <TestimonialsSection />
            </div>
        </section>
    )
}

export default AchievementSection