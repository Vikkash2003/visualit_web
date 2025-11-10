'use client'

import { useState, useEffect } from 'react';
import { Users, Target, Zap, Award } from 'lucide-react';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Our Mission",
            description: "To revolutionize how people consume and understand content through cutting-edge AI visualization technology."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Our Team",
            description: "A passionate group of innovators, designers, and engineers dedicated to creating the future of reading."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Our Vision",
            description: "Making complex information accessible and engaging for everyone through intelligent visual experiences."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Our Values",
            description: "Innovation, accessibility, and user experience are at the core of everything we build and deliver."
        }
    ];

    return (
        <section id="about" className="py-20 px-6 bg-black w-full relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        About <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Visualit</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We're transforming the way people read and understand content by bringing text to life
                        through intelligent AI-powered visualizations. No more struggling to imagine complex concepts.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                            }}
                        >
                            <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Story Section */}
                <div
                    className={`bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-1000 delay-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Our Story
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Founded in 2024, Visualit emerged from a simple observation: people learn and retain
                            information better when they can see it. Our team of AI researchers, designers, and
                            developers came together with a shared vision to bridge the gap between text and
                            understanding.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Today, we're proud to serve thousands of users worldwide, helping students, professionals,
                            and curious minds unlock the full potential of their reading experience. With cutting-edge
                            AI technology and an unwavering commitment to user experience, we're just getting started.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

