
'use client'
import { useState, useEffect } from 'react';
import { contentData } from '@/lib/contentData';

const AchievementSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="achievement" className="py-20 px-6 w-full relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title */}
                <h2
                    className={`text-4xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {contentData.achievements.title}
                </h2>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contentData.achievements.awards.map((award, index) => (
                        <div
                            key={award.id}
                            className={`relative bg-gradient-to-br from-[#1DB954]/10 to-black/50 backdrop-blur-md border border-[#1DB954]/30 rounded-2xl p-6 shadow-lg shadow-[#1DB954]/10 hover:scale-105 hover:shadow-[#1DB954]/30 hover:border-[#1DB954]/50 transition-all duration-300 cursor-pointer group ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                            }}
                        >
                            {/* Award Image */}
                            <div className="w-full h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-[#1DB954]/20 to-black border border-[#1DB954]/20 flex items-center justify-center">
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="text-6xl">🏆</div>';
                                    }}
                                />
                            </div>

                            {/* Award Title */}
                            <h3 className="text-xl font-bold text-[#1DB954] mb-3 group-hover:text-white transition-colors duration-300">
                                {award.title}
                            </h3>

                            {/* Award Description */}
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {award.description}
                            </p>

                            {/* Decorative shine effect on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1DB954]/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {contentData.achievements.stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl font-bold bg-gradient-to-r from-[#1DB954] to-green-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-gray-300 transition-colors">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementSection;