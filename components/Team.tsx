"use client";

import { motion } from "framer-motion";
import { coreTeam } from "../data/CoreTeam";
import { mlTeam } from "../data/mlTeam";
import { webDevTeam } from "../data/webDevTeam";
import { web3Team } from "../data/web3Team";
import Member from "./Member";
import CoreTeamBackground from "./backgrounds/CoreTeamBackground";
import Web3Background from "./backgrounds/Web3Background";
import WebDevBackground from "./backgrounds/WebDevBackground";
import MLBackground from "./backgrounds/MLBackground";

export default function Team() {
    return (
        <section id="team" className="p-16 my-10 bg-gray-50">
            <motion.h1
                className="mb-10 text-5xl font-medium drop-shadow-sm"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Our Team
            </motion.h1>

            {/* Core Team */}
            <motion.div
                className="mb-16 relative rounded-2xl p-8 overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <CoreTeamBackground />
                <h2 className="mb-6 text-3xl font-medium relative z-10">Core Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
                    {coreTeam.map((member, index) => {
                        return (
                            <motion.div
                                key={member.linkedinURL}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Member member={member} />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Web3 Team */}
            <motion.div
                className="mb-16 relative rounded-2xl p-8 overflow-hidden border border-purple-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <Web3Background />
                <h2 className="mb-6 text-3xl font-medium relative z-10">Web3 Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
                    {web3Team.map((member, index) => {
                        return (
                            <motion.div
                                key={member.linkedinURL}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Member member={member} />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Web Dev Team */}
            <motion.div
                className="mb-16 relative rounded-2xl p-8 overflow-hidden border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <WebDevBackground />
                <h2 className="mb-6 text-3xl font-medium relative z-10">Web Dev Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
                    {webDevTeam.map((member, index) => {
                        return (
                            <motion.div
                                key={member.linkedinURL}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Member member={member} />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* ML Team */}
            <motion.div
                className="mb-16 relative rounded-2xl p-8 overflow-hidden border border-orange-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <MLBackground />
                <h2 className="mb-6 text-3xl font-medium relative z-10">ML Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
                    {mlTeam.map((member, index) => {
                        return (
                            <motion.div
                                key={member.linkedinURL}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Member member={member} />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}