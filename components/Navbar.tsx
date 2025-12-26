"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavLinkListItem({ link, text }: { link: string; text: string }) {
    return (
        <motion.li
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <Link
                href={link}
                className="p-4 block text-sm font-medium relative group"
            >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#005a83]">
                    {text}
                </span>
                <motion.span
                    className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#005a83] to-[#0088cc] origin-left"
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
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <button className="p-4 block text-sm font-medium relative group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#005a83]">
                    {text}
                </span>
                <motion.span
                    className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#005a83] to-[#0088cc] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.span
                    className="inline-block ml-1"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    ▾
                </motion.span>
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
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                            >
                                <Link
                                    href={item.link}
                                    className="block px-5 py-3 text-sm relative group overflow-hidden"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-[#005a83]/5 to-[#0088cc]/5"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#005a83] group-hover:translate-x-1 inline-block">
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            className="sticky top-0 z-50 backdrop-blur-md bg-white/95 shadow-sm"
        >
            <nav className="flex flex-wrap items-center justify-between w-full px-4 py-3 text-lg text-gray-700 md:py-0">
                <Link href="/" className="flex items-center cursor-pointer p-3 group">
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <img
                            className="h-12 mr-3"
                            alt="jadavpur university acm student chapter logo"
                            src="/ju-acm.svg"
                        />
                    </motion.div>
                    <motion.h2
                        className="font-semibold text-sm leading-2 text-sky-800"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        JU ACM
                        <br />
                        Student Chapter
                    </motion.h2>
                </Link>

                {/* Mobile menu button */}
                <motion.button
                    className="block md:hidden relative w-8 h-8 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                        className="absolute w-6 h-0.5 bg-gray-700 left-1 transition-all"
                        animate={{
                            top: mobileMenuOpen ? "50%" : "25%",
                            rotate: mobileMenuOpen ? 45 : 0,
                            y: mobileMenuOpen ? "-50%" : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.span
                        className="absolute w-6 h-0.5 bg-gray-700 left-1 top-1/2 -translate-y-1/2"
                        animate={{
                            opacity: mobileMenuOpen ? 0 : 1,
                            x: mobileMenuOpen ? -20 : 0
                        }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className="absolute w-6 h-0.5 bg-gray-700 left-1 transition-all"
                        animate={{
                            bottom: mobileMenuOpen ? "50%" : "25%",
                            rotate: mobileMenuOpen ? -45 : 0,
                            y: mobileMenuOpen ? "50%" : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                </motion.button>

                {/* Desktop menu - always visible on md+ */}
                <ul className="hidden md:flex md:justify-between md:items-center pt-4 text-base text-gray-700 md:pt-0">
                    <NavLinkListItem link="/" text="Home" />
                    <NavLinkListItem link="/contact" text="Contact" />
                    <NavLinkListItem link="/events" text="Events" />
                    <NavDropdown text="Recruitment" items={recruitmentItems} />
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Link
                            href="/register"
                            className="m-4 px-6 py-2 block text-sm font-medium bg-gradient-to-r from-[#005a83] to-[#0088cc] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-center relative overflow-hidden group"
                        >
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-[#0088cc] to-[#005a83]"
                                initial={{ x: "100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                            <span className="relative z-10">Register</span>
                        </Link>
                    </motion.li>
                </ul>

                {/* Mobile menu - animated on small screens */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="w-full md:hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                        >
                            <ul className="pt-4 pb-4 text-base text-gray-700">
                                <NavLinkListItem link="/" text="Home" />
                                <NavLinkListItem link="/contact" text="Contact" />
                                <NavLinkListItem link="/events" text="Events" />
                                <NavDropdown text="Recruitment" items={recruitmentItems} />
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Link
                                        href="/register"
                                        className="m-4 px-6 py-2 block text-sm font-medium bg-gradient-to-r from-[#005a83] to-[#0088cc] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-center relative overflow-hidden group"
                                    >
                                        <motion.span
                                            className="absolute inset-0 bg-gradient-to-r from-[#0088cc] to-[#005a83]"
                                            initial={{ x: "100%" }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                        <span className="relative z-10">Register</span>
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
