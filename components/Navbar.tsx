"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function NavLinkListItem({ link, text }: { link: string; text: string }) {
    return (
        <li className="relative group">
            <a
                href={link}
                className="p-4 block text-sm font-medium text-gray-700 transition-all duration-300 hover:text-[#005a83] relative"
            >
                {text}
                <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#005a83] to-[#0084c7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
        </li>
    );
}

function NavDropdown({ text, items }: { text: string; items: { link: string; text: string }[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li 
            className="relative group" 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="p-4 flex items-center gap-1 text-sm font-medium text-gray-700 transition-all duration-300 hover:text-[#005a83]">
                {text}
                <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>
            
            <div className={`absolute left-0 mt-0 transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
                <ul className="bg-white shadow-2xl rounded-xl min-w-[180px] overflow-hidden border border-gray-100 backdrop-blur-lg">
                    {items.map((item, index) => (
                        <li 
                            key={item.link}
                            className="transform transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                            style={{
                                transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                            }}
                        >
                            <a
                                href={item.link}
                                className="block px-5 py-3 text-sm text-gray-700 hover:text-[#005a83] transition-colors duration-200 relative group/item"
                            >
                                <span className="relative z-10">{item.text}</span>
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#005a83] group-hover/item:h-full transition-all duration-300 rounded-r"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const recruitmentItems = [
        { link: "/recruitment/ml", text: "ML" },
        { link: "/recruitment/web3", text: "WEB3" },
        { link: "/recruitment/web-dev", text: "Web Dev" }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' : 'bg-white/70 backdrop-blur-md border-b border-gray-100/30'
        }`}>
            <nav className="flex items-center justify-between w-full px-4 md:px-6 py-4 text-lg text-gray-700 max-w-7xl mx-auto">
                {/* Logo */}
                <a href="/" className="flex items-center cursor-pointer group relative mr-auto">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/50 to-cyan-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                    <div className="relative flex items-center">
                        <img
                            className="h-11 md:h-12 mr-2 md:mr-3 transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-105"
                            alt="jadavpur university acm student chapter logo"
                            src="/ju-acm.svg"
                        />
                        <h2 className="font-semibold text-xs md:text-sm leading-tight text-sky-800 transition-all duration-300 group-hover:text-[#005a83]">
                            JU ACM
                            <br />
                            <span className="text-[10px] md:text-xs text-gray-600 group-hover:text-[#0084c7]">Student Chapter</span>
                        </h2>
                    </div>
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 active:scale-95"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6 text-gray-700" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-700" />
                    )}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex md:items-center md:gap-1">
                    <NavLinkListItem link="/" text="Home" />
                    <NavLinkListItem link="/contact" text="Contact" />
                    <NavLinkListItem link="/events" text="Events" />
                    <NavDropdown text="Recruitment" items={recruitmentItems} />
                    <li className="ml-2">
                        <a
                            href="/register"
                            className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                            style={{
                                background: 'linear-gradient(180deg, #0EA5E9 0%, #0284C7 100%)',
                                boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            {/* Inner highlight (iPhone glass effect) */}
                            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></span>
                            
                            {/* Active state overlay */}
                            <span className="absolute inset-0 rounded-full bg-black/0 group-active:bg-black/10 transition-colors duration-100"></span>
                            
                            {/* Hover glow */}
                            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500 -z-10"></span>
                            
                            {/* Text with subtle shadow */}
                            <span className="relative z-10 tracking-wide" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>
                                Register
                            </span>
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-2xl transition-all duration-500 overflow-hidden ${
                    mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <ul className="py-4 px-4 space-y-1">
                        {['Home', 'Contact', 'Events'].map((item, index) => (
                            <li 
                                key={item}
                                className="transform transition-all duration-300"
                                style={{
                                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                                }}
                            >
                                <a
                                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#005a83] hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg transition-all duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        
                        <li className="pt-2 space-y-1">
                            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Recruitment
                            </div>
                            {recruitmentItems.map((item, index) => (
                                <a
                                    key={item.link}
                                    href={item.link}
                                    className="block px-6 py-2.5 text-sm text-gray-700 hover:text-[#005a83] hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg transition-all duration-300"
                                    style={{
                                        transitionDelay: mobileMenuOpen ? `${(index + 3) * 50}ms` : '0ms'
                                    }}
                                >
                                    {item.text}
                                </a>
                            ))}
                        </li>
                        
                        <li className="pt-4 px-4">
                            <a
                                href="/register"
                                className="relative inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white rounded-full overflow-hidden active:scale-[0.98] transition-all duration-200 shadow-lg"
                                style={{
                                    background: 'linear-gradient(180deg, #0EA5E9 0%, #0284C7 100%)',
                                    boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-transparent"></span>
                                <span className="relative z-10" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>
                                    Register
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
