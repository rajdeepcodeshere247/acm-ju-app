"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const matrixChars = ["0", "1", "{", "}", "<", ">", "/", "=", "(", ")", "[", "]", ";", ":", "*", "+", "-", "#"];
const codeTags = ["HTML", "CSS", "JS", "React", "Node", "API", "JSON", "HTTP"];

export default function WebDevBackground() {
    const [matrixColumns, setMatrixColumns] = useState<{ id: number; x: number; chars: string[] }[]>([]);
    const [floatingTags, setFloatingTags] = useState<{ id: number; tag: string; x: number; y: number; delay: number }[]>([]);

    useEffect(() => {
        // Matrix falling code columns
        const columns = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: (i * 6.67) + Math.random() * 3,
            chars: Array.from({ length: 12 }, () => matrixChars[Math.floor(Math.random() * matrixChars.length)]),
        }));
        setMatrixColumns(columns);

        // Floating code tags
        const tags = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            tag: codeTags[Math.floor(Math.random() * codeTags.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
        }));
        setFloatingTags(tags);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Terminal-style background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 opacity-20" />
            <div className="absolute inset-0 bg-green-50" />

            {/* Code editor line numbers effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-green-100 border-r-2 border-green-300 opacity-30 flex flex-col text-green-600 text-xs font-mono p-2 gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                ))}
            </div>

            {/* Matrix-style falling code */}
            {matrixColumns.map((column) => (
                <motion.div
                    key={column.id}
                    className="absolute top-0 flex flex-col font-mono text-sm font-bold"
                    style={{ left: `${column.x}%` }}
                    animate={{
                        y: [-200, window.innerHeight + 200],
                    }}
                    transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 3,
                    }}
                >
                    {column.chars.map((char, idx) => (
                        <motion.span
                            key={idx}
                            className="text-green-600"
                            style={{
                                opacity: 1 - (idx * 0.08),
                                textShadow: "0 0 5px rgba(34,197,94,0.5)",
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            ))}

            {/* Floating HTML/CSS/JS tags */}
            {floatingTags.map((tag) => (
                <motion.div
                    key={tag.id}
                    className="absolute px-4 py-2 bg-green-500 text-white font-mono font-bold rounded border-2 border-green-700 shadow-lg"
                    style={{
                        left: `${tag.x}%`,
                        top: `${tag.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: tag.delay,
                        ease: "easeInOut",
                    }}
                >
                    &lt;{tag.tag}/&gt;
                </motion.div>
            ))}

            {/* Large code brackets */}
            <motion.div
                className="absolute top-10 left-20 text-9xl font-bold text-green-500 opacity-20 font-mono"
                animate={{
                    x: [0, 10, 0],
                    rotate: [0, 2, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {"{"}
            </motion.div>

            <motion.div
                className="absolute bottom-10 right-20 text-9xl font-bold text-emerald-500 opacity-20 font-mono"
                animate={{
                    x: [0, -10, 0],
                    rotate: [0, -2, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            >
                {"}"}
            </motion.div>

            {/* Terminal window mockup */}
            <motion.div
                className="absolute top-1/4 right-10 w-64 h-48 bg-gray-900 rounded-lg border-2 border-green-500 opacity-30 overflow-hidden shadow-2xl"
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Terminal header */}
                <div className="h-8 bg-green-600 flex items-center px-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                {/* Terminal content */}
                <div className="p-3 font-mono text-xs text-green-400">
                    <div>$ npm run dev</div>
                    <div className="mt-2">&gt; Building...</div>
                    <motion.div
                        className="inline-block w-2 h-3 bg-green-400 ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </div>
            </motion.div>

            {/* Animated code snippet */}
            <motion.div
                className="absolute bottom-1/4 left-10 bg-white/80 p-4 rounded-lg border-2 border-green-300 font-mono text-sm opacity-40 shadow-lg"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="text-purple-600">function</div>
                <div className="text-green-600 ml-4">render() {"{"}</div>
                <div className="text-blue-600 ml-8">return &lt;div/&gt;</div>
                <div className="text-green-600 ml-4">{"}"}</div>
            </motion.div>

            {/* Overlay gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
