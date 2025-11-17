'use client'

import { useState } from 'react';
import { User, ChevronDown, ChevronUp } from 'lucide-react';
import { contentData } from '@/lib/contentData';
import { motion, AnimatePresence } from 'framer-motion';

const TeamSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="team" className="py-20 px-6 w-full relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Toggle Button */}
                <div className="text-center mb-8">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 hover:border-purple-500/50 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                        <span className="text-xl font-bold text-white">
                            {isExpanded ? 'Hide' : 'Meet'} Our Team
                        </span>
                        {isExpanded ? (
                            <ChevronUp className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors animate-bounce" />
                        )}
                    </button>
                </div>

                {/* Expandable Team Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            {/* Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                    {contentData.team.title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                    {contentData.team.subtitle}
                                </p>
                            </motion.div>

                            {/* Team Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {contentData.team.members.map((member, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                        className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#1DB954]/50 hover:shadow-lg hover:shadow-[#1DB954]/20 transition-all duration-300 hover:-translate-y-2"
                                    >
                                        {/* Avatar */}
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1DB954] to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#1DB954]/30">
                                            <User className="w-10 h-10 text-white" />
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-[#1DB954] transition-colors">
                                            {member.name}
                                        </h3>

                                        {/* Role */}
                                        <p className="text-[#1DB954] text-sm font-semibold mb-3 text-center">
                                            {member.role}
                                        </p>

                                        {/* Bio */}
                                        <p className="text-gray-400 text-sm leading-relaxed text-center">
                                            {member.bio}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TeamSection;
