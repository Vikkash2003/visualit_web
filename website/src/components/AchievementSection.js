
'use client'
import { useState, useEffect } from 'react';


const AchievementSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const achievements = [
        {
            id: 1,
            image: '/images/award1.png',
            title: 'Winner – Global App Innovation 2024',
            description: 'Recognized for outstanding innovation in artificial intelligence and user experience design, setting new standards in the tech industry.'
        },
        {
            id: 2,
            image: '/images/award2.png',
            title: 'Best Tech Startup of the Year',
            description: 'Awarded for exceptional growth, innovative solutions, and significant impact on the technology ecosystem and digital transformation.'
        }
    ];

    return (
        <section id="achievement" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black w-full relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title */}
                <h2
                    className={`text-4xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    Our Achievements 🏆
                </h2>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((award, index) => (
                        <div
                            key={award.id}
                            className={`bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6 shadow-lg shadow-emerald-500/10 hover:scale-105 hover:shadow-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer group ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                            }}
                        >
                            {/* Award Image */}
                            <div className="w-full h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-900/50 to-black border border-emerald-500/20 flex items-center justify-center">
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
                            <h3 className="text-xl font-bold text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                                {award.title}
                            </h3>

                            {/* Award Description */}
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {award.description}
                            </p>

                            {/* Decorative shine effect on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: Stats or Additional Info */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-400 mb-2">15+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">Awards Won</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-400 mb-2">50K+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">Happy Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementSection;