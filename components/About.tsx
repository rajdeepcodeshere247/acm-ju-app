'use client';

import React, { useState } from 'react';

export default function About() {
    const [isHoveringMap, setIsHoveringMap] = useState(false);

    return (
        <section
            id="about"
            className="relative grid grid-cols-1 gap-16 lg:grid-cols-2 p-16 mt-10 overflow-hidden"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="space-y-8 animate-fade-in">
                {/* Title with gradient and hover effect */}
                <h1 className="mb-10 text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] hover:bg-right transition-all duration-700 ease-in-out drop-shadow-sm cursor-default">
                    About Us
                </h1>
                
                {/* Content card with glass morphism */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                        <p className="text-gray-700 text-justify leading-relaxed">
                            Jadavpur University Student Chapter is an auxiliary
                            institution of ACM that aims to solve the difficulties of
                            future in the present with technical proficiency. We
                            emphasise on bringing together ignited minds and contribute
                            towards the scientific development of the computing
                            community through various workshops, webinars, coding
                            competitions and much more.
                        </p>
                    </div>
                </div>

                {/* Enhanced buttons with modern effects */}
                <span className="flex mt-8 gap-x-4">
                    <button className="group relative px-6 py-4 text-sm font-medium text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-transform duration-300 group-hover:scale-110"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center gap-2">
                            View Events
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                    
                    <button className="group relative px-6 py-4 text-sm font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-w-[120px]">
                        <div className="absolute inset-0 border-2 border-blue-600 rounded-xl transition-all duration-300 group-hover:border-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative text-blue-700 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                            Join Us
                            <svg className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </span>
                    </button>
                </span>

                {/* Animated stats or features */}
                <div className="grid grid-cols-3 gap-4 mt-12">
                    {[
                        { label: 'Members', value: '500+', icon: '👥' },
                        { label: 'Events', value: '50+', icon: '🎯' },
                        { label: 'Years', value: '10+', icon: '⭐' }
                    ].map((stat, index) => (
                        <div 
                            key={index}
                            className="group relative bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                            <div className="text-xs text-gray-600 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced map container */}
            <div 
                className="relative h-full animate-fade-in-delay group"
                onMouseEnter={() => setIsHoveringMap(true)}
                onMouseLeave={() => setIsHoveringMap(false)}
            >
                <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-25 transition-opacity duration-500 ${isHoveringMap ? 'opacity-75' : ''}`}></div>
                <div className="relative h-full min-h-[360px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10 pointer-events-none"></div>
                    <iframe
                        className="w-full h-full"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=jadavpur%20university,%20salt%20Lake&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                    />
                    
                    {/* Floating location badge */}
                    <div className={`absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg transform transition-all duration-500 ${isHoveringMap ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-800">Jadavpur University</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }

                .animate-fade-in-delay {
                    animation: fade-in 0.8s ease-out 0.3s forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
}