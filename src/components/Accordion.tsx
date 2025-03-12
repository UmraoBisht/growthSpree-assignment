import { useState } from "react";
import { motion } from "framer-motion";
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
export default function ImageAccordion() {
    const [selected, setSelected] = useState(1);

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 max-w-6xl mx-auto items-center">
            {/* Left Side - Accordions */}
            <div className="w-full md:w-1/2 space-y-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`border p-4 rounded-lg shadow-md cursor-pointer transition-all ${selected === index ? "bg-gray-100" : ""
                            }`}
                        onClick={() => setSelected(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <span>{selected === index ? "−" : "+"}</span>
                        </div>
                        {selected === index && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 text-gray-600"
                            >
                                {item.content}
                            </motion.p>
                        )}
                    </div>
                ))}
            </div>

            

        </div>
    );
}
