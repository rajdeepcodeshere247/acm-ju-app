"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Gear {
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    direction: number;
}

const organizationIcons = ["★", "♦", "●", "■", "▲"];
const leadershipSymbols = ["👑", "⚡", "💎", "🎯", "⭐"];

export default function CoreTeamBackground() {
    const [gears, setGears] = useState<Gear[]>([]);
    const [icons, setIcons] = useState<{ id: number; symbol: string; x: number; y: number }[]>([]);

    useEffect(() => {
        const newGears: Gear[] = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 60 + Math.random() * 80,
            speed: 8 + Math.random() * 8,
            direction: Math.random() > 0.5 ? 1 : -1,
        }));
        setGears(newGears);

        const newIcons = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            symbol: i < 5 ? organizationIcons[i % organizationIcons.length] : leadershipSymbols[i % leadershipSymbols.length],
            x: Math.random() * 100,
            y: Math.random() * 100,
        }));
        setIcons(newIcons);
    }, []);

    const GearSVG = ({ size }: { size: number }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-lg">
            <circle cx="50" cy="50" r="25" fill="#3b82f6" stroke="#1e40af" strokeWidth="3" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 50 + Math.cos(rad) * 35;
                const y = 50 + Math.sin(rad) * 35;
                return (
                    <rect
                        key={i}
                        x={x - 5}
                        y={y - 8}
                        width="10"
                        height="16"
                        fill="#2563eb"
                        stroke="#1e40af"
                        strokeWidth="2"
                        rx="2"
                        transform={`rotate(${angle}, ${x}, ${y})`}
                    />
                );
            })}
            <circle cx="50" cy="50" r="15" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2" />
        </svg>
    );

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Professional gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

            {/* Organizational grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Rotating gears */}
            {gears.map((gear) => (
                <motion.div
                    key={gear.id}
                    className="absolute opacity-40"
                    style={{
                        left: `${gear.x}%`,
                        top: `${gear.y}%`,
                    }}
                    animate={{
                        rotate: gear.direction === 1 ? [0, 360] : [0, -360],
                    }}
                    transition={{
                        duration: gear.speed,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <GearSVG size={gear.size} />
                </motion.div>
            ))}

            {/* Organizational/leadership icons */}
            {icons.map((icon) => (
                <motion.div
                    key={icon.id}
                    className="absolute text-4xl opacity-30"
                    style={{
                        left: `${icon.x}%`,
                        top: `${icon.y}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                    }}
                >
                    {icon.symbol}
                </motion.div>
            ))}

            {/* Organizational chart nodes */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                    >
                        <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                    </marker>
                </defs>
                {/* Connecting lines */}
                <motion.line
                    x1="20%"
                    y1="30%"
                    x2="80%"
                    y2="30%"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.line
                    x1="50%"
                    y1="30%"
                    x2="50%"
                    y2="70%"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
            </svg>

            {/* Large decorative gears */}
            <motion.div
                className="absolute -bottom-20 -left-20 opacity-20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <GearSVG size={200} />
            </motion.div>

            <motion.div
                className="absolute -top-16 -right-16 opacity-20"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <GearSVG size={180} />
            </motion.div>

            {/* Subtle overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"
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
