"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NetworkNode {
    id: number;
    x: number;
    y: number;
    layer: number;
}

const mlTerms = ["AI", "ML", "NN", "DL", "CV", "NLP"];

export default function MLBackground() {
    const [nodes, setNodes] = useState<NetworkNode[]>([]);
    const [connections, setConnections] = useState<{ from: NetworkNode; to: NetworkNode; delay: number }[]>([]);
    const [dataParticles, setDataParticles] = useState<{ id: number; path: number }[]>([]);

    useEffect(() => {
        // Create structured neural network (input, hidden, output layers)
        const newNodes: NetworkNode[] = [];
        const layers = [4, 6, 6, 3]; // Input, hidden1, hidden2, output
        const layerSpacing = 100 / (layers.length + 1);

        layers.forEach((nodeCount, layerIdx) => {
            const nodeSpacing = 80 / (nodeCount + 1);
            for (let i = 0; i < nodeCount; i++) {
                newNodes.push({
                    id: newNodes.length,
                    x: layerSpacing * (layerIdx + 1),
                    y: 10 + nodeSpacing * (i + 1),
                    layer: layerIdx,
                });
            }
        });
        setNodes(newNodes);

        // Connect nodes between adjacent layers
        const newConnections: { from: NetworkNode; to: NetworkNode; delay: number }[] = [];
        for (let i = 0; i < newNodes.length; i++) {
            for (let j = 0; j < newNodes.length; j++) {
                if (newNodes[j].layer === newNodes[i].layer + 1) {
                    newConnections.push({
                        from: newNodes[i],
                        to: newNodes[j],
                        delay: Math.random() * 3,
                    });
                }
            }
        }
        setConnections(newConnections);

        // Data particles flowing through network
        const particles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            path: Math.floor(Math.random() * newConnections.length),
        }));
        setDataParticles(particles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* AI-themed gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" />

            {/* Circuit board pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            {/* Neural network visualization */}
            <svg className="absolute inset-0 w-full h-full">
                {/* Connections */}
                {connections.map((conn, index) => (
                    <g key={index}>
                        <motion.line
                            x1={`${conn.from.x}%`}
                            y1={`${conn.from.y}%`}
                            x2={`${conn.to.x}%`}
                            y2={`${conn.to.y}%`}
                            stroke="rgba(249, 115, 22, 0.4)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{
                                pathLength: 1,
                                stroke: ["rgba(249, 115, 22, 0.2)", "rgba(249, 115, 22, 0.6)", "rgba(249, 115, 22, 0.2)"],
                            }}
                            transition={{
                                pathLength: { duration: 2, ease: "easeInOut" },
                                stroke: {
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: conn.delay,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                        {/* Data particles flowing */}
                        <motion.circle
                            r="4"
                            fill="#f97316"
                            initial={{
                                cx: `${conn.from.x}%`,
                                cy: `${conn.from.y}%`,
                            }}
                            animate={{
                                cx: [`${conn.from.x}%`, `${conn.to.x}%`, `${conn.from.x}%`],
                                cy: [`${conn.from.y}%`, `${conn.to.y}%`, `${conn.from.y}%`],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: conn.delay,
                                ease: "linear",
                            }}
                        />
                    </g>
                ))}
            </svg>

            {/* Neural network nodes */}
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="absolute w-8 h-8 bg-orange-500 rounded-full border-4 border-orange-700 shadow-lg"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                            "0 0 10px rgba(249,115,22,0.5)",
                            "0 0 20px rgba(249,115,22,0.8)",
                            "0 0 10px rgba(249,115,22,0.5)",
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: node.id * 0.1,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* ML terminology badges */}
            {mlTerms.map((term, idx) => (
                <motion.div
                    key={term}
                    className="absolute px-4 py-2 bg-orange-500 text-white font-bold rounded-full border-2 border-orange-700 shadow-lg"
                    style={{
                        left: `${15 + idx * 14}%`,
                        top: `${idx % 2 === 0 ? "8%" : "88%"}`,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 8, repeat: Infinity, ease: "linear", delay: idx * 0.5 },
                    }}
                >
                    {term}
                </motion.div>
            ))}

            {/* Brain visualization */}
            <motion.div
                className="absolute top-1/4 right-20 text-9xl opacity-20"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                🧠
            </motion.div>

            {/* Binary data stream */}
            <motion.div
                className="absolute bottom-10 left-10 font-mono text-orange-600 opacity-30 text-sm"
                animate={{
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i}>
                        {Array.from({ length: 30 })
                            .map(() => Math.round(Math.random()))
                            .join("")}
                    </div>
                ))}
            </motion.div>

            {/* Data visualization chart */}
            <motion.div
                className="absolute top-20 left-10 w-48 h-32 bg-white/60 rounded-lg border-2 border-orange-300 p-3 opacity-40"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="text-xs font-bold text-orange-700 mb-2">Model Accuracy</div>
                <div className="flex items-end justify-between h-20">
                    {[60, 75, 82, 88, 94, 97].map((height, i) => (
                        <motion.div
                            key={i}
                            className="w-6 bg-orange-500 rounded-t"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{
                                duration: 1,
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Glowing overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"
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
