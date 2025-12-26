"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavLinkListItem({ link, text }: { link: string; text: string }) {
    return (
        <motion.li
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Link
                href={link}
                className="p-4 block text-sm font-medium relative group"
            >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#005a83]">
                    {text}
                </span>
                <motion.span
                    className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#005a83] to-[#00a8e8] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </Link>
        </motion.li>
    );
}

function NavDropdown({ text, items }: { text: string; items: { link: string; text: string }[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.li
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <button className="p-4 block text-sm font-medium relative group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#005a83]">
                    {text}
                </span>
                <motion.span
                    className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#005a83] to-[#00a8e8] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.svg
                    className="inline-block w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </motion.svg>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 mt-0 bg-white shadow-2xl rounded-lg min-w-[180px] z-50 overflow-hidden border border-gray-100"
                    >
                        {items.map((item, index) => (
                            <motion.li
                                key={item.link}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={item.link}
                                    className="block px-5 py-3 text-sm relative overflow-hidden group"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-[#005a83]/5 to-[#00a8e8]/5"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#005a83] font-medium">
                                        {item.text}
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.li>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const recruitmentItems = [
        { link: "/recruitment/ml", text: "ML" },
        { link: "/recruitment/web3", text: "WEB3" },
        { link: "/recruitment/web-dev", text: "Web Dev" }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="sticky top-0 z-50"
        >
            <motion.nav
                animate={{
                    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 1)",
                    boxShadow: scrolled
                        ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                        : "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap items-center justify-between w-full px-4 py-3 text-lg text-gray-700 md:py-0 backdrop-blur-md"
            >
                <Link href="/" className="flex items-center cursor-pointer p-3 group">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <img
                            className="h-12 mr-3 transition-all duration-300 group-hover:drop-shadow-lg"
                            alt="jadavpur university acm student chapter logo"
                            src="/ju-acm.svg"
                        />
                    </motion.div>
                    <motion.h2
                        className="font-semibold text-sm leading-2 text-sky-800 transition-all duration-300 group-hover:text-[#005a83]"
                        whileHover={{ x: 2 }}
                    >
                        JU ACM
                        <br />
                        Student Chapter
                    </motion.h2>
                </Link>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="block md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                    <motion.div
                        animate={mobileMenuOpen ? "open" : "closed"}
                        className="w-6 h-5 flex flex-col justify-between"
                    >
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 8 }
                            }}
                            className="w-full h-0.5 bg-gray-700 rounded-full"
                        />
                        <motion.span
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            className="w-full h-0.5 bg-gray-700 rounded-full"
                        />
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -8 }
                            }}
                            className="w-full h-0.5 bg-gray-700 rounded-full"
                        />
                    </motion.div>
                </motion.button>

                <AnimatePresence>
                    {(mobileMenuOpen || true) && (
                        <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: 1,
                                height: mobileMenuOpen ? "auto" : 0
                            }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 md:opacity-100 md:h-auto overflow-hidden w-full md:items-center md:w-auto"
                        >
                            <NavLinkListItem link="/" text="Home" />
                            <NavLinkListItem link="/contact" text="Contact" />
                            <NavLinkListItem link="/events" text="Events" />
                            <NavDropdown text="Recruitment" items={recruitmentItems} />
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="md:ml-2"
                            >
                                <Link
                                    href="/register"
                                    className="p-4 block text-sm font-medium relative overflow-hidden group"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-[#005a83] to-[#00a8e8] rounded-lg"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10 px-4 py-2 rounded-lg bg-gradient-to-r from-[#005a83] to-[#00a8e8] text-white group-hover:bg-none transition-all duration-300">
                                        Register
                                    </span>
                                </Link>
                            </motion.li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.nav>
        </motion.header>
    );
}
