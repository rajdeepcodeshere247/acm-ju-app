"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cryptoSymbols = ["₿", "Ξ", "◈", "⬡", "⬢"];
const blockchainChars = ["0", "1", "#", "$", "□", "■"];

export default function Web3Background() {
    const [cryptoIcons, setCryptoIcons] = useState<{ id: number; symbol: string; x: number; y: number; delay: number }[]>([]);
    const [chains, setChains] = useState<{ id: number; x: number; blocks: string[] }[]>([]);

    useEffect(() => {
        // Crypto symbols floating
        const newIcons = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            symbol: cryptoSymbols[Math.floor(Math.random() * cryptoSymbols.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
        }));
        setCryptoIcons(newIcons);

        // Blockchain chains
        const newChains = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: (i * 12) + 5,
            blocks: Array.from({ length: 6 }, () => blockchainChars[Math.floor(Math.random() * blockchainChars.length)]),
        }));
        setChains(newChains);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Pixelated grid background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-violet-50 to-fuchsia-100" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.15)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.15)_2px,transparent_2px)] bg-[size:30px_30px]" />

            {/* Animated blockchain chains falling */}
            {chains.map((chain) => (
                <motion.div
                    key={chain.id}
                    className="absolute top-0 flex flex-col gap-2"
                    style={{ left: `${chain.x}%` }}
                    animate={{
                        y: [-100, window.innerHeight + 100],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                    }}
                >
                    {chain.blocks.map((block, idx) => (
                        <motion.div
                            key={idx}
                            className="w-12 h-12 bg-purple-400 border-4 border-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg pixelated"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                imageRendering: "pixelated",
                            }}
                        >
                            {block}
                        </motion.div>
                    ))}
                </motion.div>
            ))}

            {/* Large crypto symbols */}
            {cryptoIcons.map((icon) => (
                <motion.div
                    key={icon.id}
                    className="absolute text-5xl font-bold text-purple-600 opacity-40"
                    style={{
                        left: `${icon.x}%`,
                        top: `${icon.y}%`,
                        textShadow: "2px 2px 4px rgba(139,92,246,0.5)",
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 3,
                        repeat: Infinity,
                        delay: icon.delay,
                        ease: "easeInOut",
                    }}
                >
                    {icon.symbol}
                </motion.div>
            ))}

            {/* Pixelated coins */}
            <motion.div
                className="absolute top-20 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-8 border-yellow-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                }}
                transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                }}
                style={{
                    imageRendering: "pixelated",
                }}
            >
                ₿
            </motion.div>

            <motion.div
                className="absolute bottom-32 left-32 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-violet-600 border-6 border-purple-800 flex items-center justify-center text-3xl font-bold text-white shadow-2xl"
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -360],
                }}
                transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                }}
                style={{
                    imageRendering: "pixelated",
                }}
            >
                Ξ
            </motion.div>

            {/* Glowing effect overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
