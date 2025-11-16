'use client'

import { useState, useEffect } from 'react';
import { Users, Target, Zap, Award } from 'lucide-react';
import { contentData } from '@/lib/contentData';

const AboutVisuaLitSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Icon mapping
    const iconMap = {
        'Target': Target,
        'Users': Users,
        'Zap': Zap,
        'Award': Award
    };

    return (
        <section id="about" className="min-h-screen py-20 px-6 w-full relative overflow-hidden snap-start scroll-mt-24 flex items-center">
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        About <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">VisuaLit</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {contentData.about.subtitle}
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contentData.about.values.map((value, index) => {
                        const IconComponent = iconMap[value.icon];
                        return (
                            <div
                                key={index}
                                className={`group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#1DB954]/30 rounded-2xl p-6 hover:border-[#1DB954] hover:shadow-lg hover:shadow-[#1DB954]/20 transition-all duration-300 hover:-translate-y-2 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                                }}
                            >
                                <div className="text-[#1DB954] mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1DB954] transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutVisuaLitSection;
