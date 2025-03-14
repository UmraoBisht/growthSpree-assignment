import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Word {
    text: string;
    emoji: string;
}

const words: Word[] = [
    { text: "Engage", emoji: "🤩" },
    { text: "Optimize", emoji: "😎" },
    { text: "$$$", emoji: "💰" },
];

export default function RotatingText() {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
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
                    <span className="text-[#1A1A1A] dark:text-white text-2xl font-bold">
                        {words[index].text}
                    </span>
                    <span className="text-2xl">{words[index].emoji}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}