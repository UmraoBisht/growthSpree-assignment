import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import visual1 from "../assets/Components/Visual 1 Library .png";
import visual2 from "../assets/Components/Visual.png";
import visual3 from "../assets/Components/Visual 3.png";
import visual4 from "../assets/Components/Visual 4.png";

const data = [
    {
        title: "Curate your video media collection with an AI powered library",
        subtitle: "Streamline your media organization",
        content:
            "Explore our intelligent media library with AI-driven curation and tagging to effortlessly organize your video content.",
        image: visual1,
    },
    {
        title: "Build, Brand & Publish your Media+",
        subtitle: "Your content, your brand",
        content:
            "Publish your on-demand media faster than ever using Media+. Add your custom branding and host all your media on your website or any other custom URL of your choice.",
        image: visual2,
    },
    {
        title: "Gate your media, capture leads & connect your CRM - it's easy",
        subtitle: "Monetize with ease",
        content:
            "Leverage smart gating to capture leads and seamlessly integrate with your CRM, ensuring you never miss an opportunity.",
        image: visual3,
    },
    {
        title: "Track your views - with detailed analytics.",
        subtitle: "Insights that matter",
        content:
            "Monitor your media engagement with robust analytics and detailed view metrics to fine-tune your strategy.",
        image: visual4,
    },
];

function WhyChooseMedia() {
    const [selected, setSelected] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const interval = setInterval(() => {
                setSelected((prevIndex) => (prevIndex + 1) % data.length);
            }, 8000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <p className="text-orange-500 dark:text-orange-400 font-bold text-3xl sm:text-base mb-2">
                    Why choose Media+?
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-gray-100 max-w-4xl mx-auto leading-tight">
                    Media+ turns video engagement into customer conversions
                </h1>
            </div>

            <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Column: Accordion List (Expanded in Mobile) */}
                <div className="space-y-4 w-full">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-all duration-300 relative 
                                ${!isMobile && selected === index ? "bg-gray-100 dark:bg-gray-800 shadow-md" : "dark:bg-gray-900"}
                            `}
                            onClick={() => !isMobile && setSelected(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-200">{item.title}</h3>
                                {!isMobile && (
                                    <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                                        {selected === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </button>
                                )}
                            </div>

                            {/* Content - Always Visible on Mobile */}
                            <motion.div
                                className="overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: selected === index || isMobile ? "auto" : 0, opacity: selected === index || isMobile ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{item.content}</p>

                                {/* Show Image in Mobile Inside the Card */}
                                {isMobile && (
                                    <motion.img
                                        src={item.image}
                                        alt="Feature Image"
                                        className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg mt-4"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Desktop: Auto-Switching Image - Fixed Position */}
                {!isMobile && (
                    <div className="rounded-xl p-6 md:p-10 relative h-[450px] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                        <motion.img
                            key={selected}
                            src={data[selected].image}
                            alt="Selected"
                            className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg absolute"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default WhyChooseMedia;
