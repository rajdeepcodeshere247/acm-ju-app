"use client";

import { useState } from 'react';
import SocialMediaHandleButton, {
    SocialMedia,
    SocialMediaType,
} from "./SocialMedia";

const chapterSocialMediaHandles = [
    {
        url: "https://www.twitter.com/",
        socialMedia: new SocialMedia(SocialMediaType.TWITTER),
    },
    {
        url: "https://www.instagram.com/",
        socialMedia: new SocialMedia(SocialMediaType.INSTAGRAM),
    },
    {
        url: "https://www.facebook.com/",
        socialMedia: new SocialMedia(SocialMediaType.FACEBOOK),
    },
    {
        url: "https://www.linkedin.com/",
        socialMedia: new SocialMedia(SocialMediaType.LINKEDIN),
    },
];

export default function Footer() {
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [isMapHovered, setIsMapHovered] = useState(false);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative px-4 pt-12 pb-8 sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Logo Section with Animation */}
                    <div className="sm:col-span-2 space-y-6">
                        <div className="group">
                            <img
                                className="h-12 transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-lg"
                                src="https://admission.jdvu.ac.in/fatadmission/frontend/image/logo-black.png"
                                alt="Jadavpur University Logo"
                            />
                        </div>
                        <div className="group">
                            <img
                                className="h-16 -translate-x-2.5 transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-lg"
                                src="/acm-logo.svg"
                                alt="ACM Logo"
                            />
                        </div>
                        <p className="text-gray-600 text-sm max-w-md leading-relaxed animate-fade-in">
                            Empowering the next generation of tech innovators at Jadavpur University through ACM Student Chapter.
                        </p>
                    </div>

                    {/* Contacts Section with Hover Effects */}
                    <div className="space-y-4 text-sm">
                        <p className="text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                            Get in Touch
                        </p>
                        
                        <div className="group space-y-1">
                            <p className="text-gray-700 font-semibold flex items-center gap-2">
                                <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                Email
                            </p>
                            <a
                                href="mailto:acmjustudentchapter@gmail.com"
                                aria-label="Our email"
                                className="block text-gray-600 hover:text-purple-600 transition-all duration-300 hover:translate-x-1 hover:font-medium"
                            >
                                acmjustudentchapter@gmail.com 
                            </a>
                        </div>

                        <div className="group space-y-2">
                            <p className="text-gray-700 font-semibold flex items-center gap-2">
                                <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                Visit Us
                            </p>
                            <a
                                href="https://maps.app.goo.gl/ekS9RmQ1RrNeXzrm9"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View on Google Maps"
                                onMouseEnter={() => setIsMapHovered(true)}
                                onMouseLeave={() => setIsMapHovered(false)}
                                className="relative block text-gray-600 hover:text-blue-600 transition-all duration-300 leading-relaxed group/map"
                            >
                                <div className="flex items-start gap-2">
                                    <svg 
                                        className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-all duration-300 ${isMapHovered ? 'text-red-500 scale-110 animate-bounce' : 'text-blue-500'}`}
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="relative flex-1">
                                        Plot No.8, B-73-80, Salt Lake Bypass, LB Block, Sector 3, Bidhannagar, Kolkata, West Bengal 700098
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/map:w-full transition-all duration-500"></span>
                                    </span>
                                </div>
                                
                                {/* Map indicator badge */}
                                <div className={`inline-flex items-center gap-1 mt-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs rounded-full transition-all duration-300 ${isMapHovered ? 'scale-105 shadow-lg shadow-blue-500/50' : 'scale-100'}`}>
                                    <svg 
                                        className="w-3 h-3" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    <span className="font-medium">View on Maps</span>
                                    <svg 
                                        className={`w-3 h-3 transition-transform duration-300 ${isMapHovered ? 'translate-x-1' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Social Section with Enhanced Interactions */}
                    <div className="space-y-4">
                        <span className="text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                            Connect With Us
                        </span>
                        
                        <div className="flex items-center gap-3 flex-wrap">
                            {chapterSocialMediaHandles.map((handleDetails, index) => (
                                <div
                                    key={handleDetails.url}
                                    className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    style={{
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                    }}
                                    onMouseEnter={() => setHoveredSocial(index)}
                                    onMouseLeave={() => setHoveredSocial(null)}
                                >
                                    <div className={`relative ${hoveredSocial === index ? 'animate-pulse' : ''}`}>
                                        <SocialMediaHandleButton
                                            url={handleDetails.url}
                                            socialMedia={handleDetails.socialMedia}
                                            length={24}
                                        />
                                        {hoveredSocial === index && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md -z-10 animate-ping"></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative group mt-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <p className="relative p-4 text-sm text-gray-600 leading-relaxed bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 group-hover:border-purple-300 transition-all duration-300">
                                Follow us on social media to stay updated with upcoming events, workshops, and tech talks!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar with Animation */}
                <div className="relative">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <div className="flex flex-col-reverse justify-between items-center gap-4 py-6 lg:flex-row text-sm text-gray-600">
                        <p className="flex items-center gap-2 group">
                            <span className="inline-block group-hover:animate-spin">©</span>
                            <span className="transition-colors duration-300 group-hover:text-purple-600">
                                Copyright {currentYear} JU ACM Students Chapter. All rights reserved.
                            </span>
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs">
                            <a 
                                href="#privacy" 
                                className="relative hover:text-purple-600 transition-colors duration-300 group"
                            >
                                Privacy Policy
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <span className="text-gray-400">•</span>
                            <a 
                                href="#terms" 
                                className="relative hover:text-purple-600 transition-colors duration-300 group"
                            >
                                Terms of Service
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .animate-fade-in {
                    animation: fadeInUp 0.8s ease-out;
                }
            `}</style>
        </footer>
    );
}
