import { Minus, Plus } from "lucide-react"
import { motion } from "framer-motion"
import visual1 from "../assets/Components/Visual 1 Library .png";
import visual2 from "../assets/Components/Visual.png";
import visual3 from "../assets/Components/Visual 3.png";
import visual4 from "../assets/Components/Visual 4.png";
import { useState } from "react";

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
    const [selected, setSelected] = useState(1);
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <p className="text-orange-500 font-bold text-3xl sm:text-base mb-2">Why choose Media+?</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-4xl mx-auto leading-tight">
                    Media+ turns video engagement into customer conversions
                </h1>
            </div>

            <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left column: Features */}
                <div className="space-y-4">
                    {/* Accordion Item 1 */}

                    {data.map((item, index) => (

                        <div className={`border border-gray-200 rounded-lg p-6 ${selected === index ? "bg-gray-100" : ""
                            }`} onClick={() => setSelected(index)}>
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-gray-500">
                                    {item.title}
                                </h3>
                                <button className="text-gray-400 hover:text-gray-600">
                                    {
                                        selected === index ? <Minus size={20} /> : <Plus size={20} />
                                    }
                                </button>
                            </div>
                            {selected === index && (
                                <div className="pt-2">
                                    <div className="relative mt-4">
                                        <p className="text-gray-600 text-sm">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

                {/* Right Side - Image Display */}
                <div className="rounded-xl p-6 md:p-10">
                    <div className="relative">
                        <motion.img
                            key={selected}
                            src={data[selected].image}
                            alt="Selected"
                            className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            width={600}
                            height={450}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseMedia;