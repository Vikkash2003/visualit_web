'use client'

import { useState, useEffect } from 'react';
import { User, ChevronDown, ChevronUp } from 'lucide-react';
import { contentData } from '@/lib/contentData';
import { motion, AnimatePresence } from 'framer-motion';

const OurStorySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isTeamExpanded, setIsTeamExpanded] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="our-story" className="min-h-screen py-20 px-6 w-full relative overflow-hidden snap-start scroll-mt-24 flex items-center">
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Story Section */}
                <div
                    className={`relative bg-gradient-to-br from-[#1DB954]/5 via-transparent to-purple-900/10 backdrop-blur-sm border border-[#1DB954]/20 rounded-3xl p-8 md:p-12 transition-all duration-1000 overflow-hidden mb-16 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {/* Green gradient glow effect */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#1DB954]/20 to-transparent rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-full blur-3xl opacity-50"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#1DB954] to-white bg-clip-text text-transparent mb-8">
                            {contentData.about.story.title}
                        </h2>
                        {contentData.about.story.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6 last:mb-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center">
                    <button
                        onClick={() => setIsTeamExpanded(!isTeamExpanded)}
                        className="group inline-flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                    >
                        <span className="text-2xl font-bold text-white group-hover:text-[#1DB954] transition-colors">
                            {isTeamExpanded ? 'Hide' : 'Meet'} Our Team
                        </span>
                        {isTeamExpanded ? (
                            <ChevronUp className="w-6 h-6 text-[#1DB954] group-hover:text-green-400 transition-colors" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-[#1DB954] group-hover:text-green-400 transition-colors animate-bounce" />
                        )}
                    </button>
                </div>

                {/* Expandable Team Content */}
                <AnimatePresence>
                    {isTeamExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="overflow-hidden mt-12"
                        >
                            {/* Team Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {contentData.team.members.map((member, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
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

export default OurStorySection;
