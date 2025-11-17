'use client'

import { useState, useEffect } from 'react';
import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { contentData } from '@/lib/contentData';

const InvestorSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="investor" className="py-20 px-6 bg-black w-full relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-40 left-20 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-20 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {contentData.investor.title}
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Problem Card */}
                    <div
                        className={`bg-gradient-to-br from-red-900/10 to-orange-900/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 transition-all duration-1000 delay-100 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-6">
                            <AlertCircle className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-red-400 mb-4">The Problem</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {contentData.investor.problem}
                        </p>
                    </div>

                    {/* Solution Card */}
                    <div
                        className={`bg-gradient-to-br from-green-900/10 to-emerald-900/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 transition-all duration-1000 delay-200 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6">
                            <Lightbulb className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-green-400 mb-4">Our Solution</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {contentData.investor.solution}
                        </p>
                    </div>

                    {/* Business Model Card */}
                    <div
                        className={`bg-gradient-to-br from-blue-900/10 to-cyan-900/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 transition-all duration-1000 delay-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                            <TrendingUp className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">Business Model</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {contentData.investor.model}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestorSection;
