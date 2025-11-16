'use client'

import { useState, useEffect } from 'react';
import { Code2, Cloud, Smartphone } from 'lucide-react';
import { contentData } from '@/lib/contentData';

const TechnicalSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="technical" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black w-full relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title */}
                <div
                    className={`text-center mb-12 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {contentData.technical.title}
                    </h2>
                </div>

                {/* Content Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Architecture Card */}
                    <div
                        className={`bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 transition-all duration-1000 delay-100 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-green-400 mb-3">Architecture</h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            {contentData.technical.architecture}
                        </p>
                    </div>

                    {/* GCP Need Card */}
                    <div
                        className={`bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 transition-all duration-1000 delay-200 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                            <Cloud className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-green-400 mb-3">Cloud Infrastructure</h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            {contentData.technical.gcpNeed}
                        </p>
                    </div>

                    {/* Current Stage Card */}
                    <div
                        className={`bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 transition-all duration-1000 delay-300 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                            <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-green-400 mb-3">Current Stage</h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            {contentData.technical.stage}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSection;
