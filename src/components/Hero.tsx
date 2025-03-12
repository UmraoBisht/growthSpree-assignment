"use client"; // If using Next.js

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mediaThumbnail from "../assets/Components/Media+ Video thumbnail.png";

const words = [
    { text: "Engage", emoji: "🤩" },
    { text: "Optimize", emoji: "😎" },
    { text: "$$$", emoji: "💰" },
];

function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="max-w-[1400px] mx-auto px-6 sm:px-8 pt-20 sm:pt-28 text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold text-[#1A1A1A] max-w-5xl mx-auto leading-tight sm:leading-[1.2] tracking-[-0.02em]">
                Unlock video's full potential;{' '}
                <span className="text-[#E97B5F]">half of marketers</span> haven't yet!
            </h1>

            {/* Equation-like Section */}
            <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-3xl sm:text-5xl">
                {/* Background Gradient Box */}
                <div className="inline-block rounded-2xl bg-gradient-to-r from-[#E97B5F] to-transparent">
                    {/* Actual Text */}
                    <div className="m-[1px] p-1.5 text-[#E97B5F] text-3xl sm:text-5xl font-medium bg-gray-100 rounded-2xl">
                        Media+
                    </div>
                </div>



                <span className="text-[#9A9A9A] font-light">=</span>

                {/* Animated Rotating Text with Emoji */}
                <div className="relative w-40 h-[50px] sm:h-[60px] flex justify-center items-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute flex items-center gap-2"
                        >
                            <span className="text-[#1A1A1A] text-2xl font-bold">{words[index].text}</span>
                            <span className="text-2xl">{words[index].emoji}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Description */}
            <p className="mt-8 sm:mt-10 text-lg sm:text-2xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
                Netflix-style video discovery for your prospects that turns viewers into customers
            </p>

            {/* Button */}
            <button
                className="mt-10 sm:mt-14 bg-[#E97B5F] hover:bg-[#D66D53] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-base sm:text-lg shadow-[0_2px_4px_rgba(233,123,95,0.3)] hover:shadow-[0_4px_8px_rgba(233,123,95,0.4)] transition-all duration-200"
                aria-label="Request a demo for Media+"
            >
                Request a Demo
            </button>

            {/* Video Thumbnail */}
            <div className="mt-10 sm:mt-14 flex justify-center">
                <div className="bg-gradient-to-b from-[#b2e626] to-transparent rounded-3xl p-3 sm:p-4 shadow-2xl shadow-[#b3e629] max-w-[90%] sm:max-w-full">
                    <img src={mediaThumbnail} alt="Hero" loading="lazy" className="w-full rounded-3xl" />
                </div>
            </div>
        </main>
    );
}

export default Hero;
