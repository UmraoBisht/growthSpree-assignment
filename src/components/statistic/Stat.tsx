import React from "react";
import { Header } from "./Header";
import { CallToAction } from "./CallToAction";
import { StatsGrid } from "./StatsGrid";

interface StatItem {
    number: string;
    title: string;
    description: string;
}

const stats: StatItem[] = [
    {
        number: "2.5X",
        title: "Lead Generation",
        description: "Boost watch time and drive more leads",
    },
    {
        number: "3X",
        title: "Publish Content Faster with AI",
        description: "Take route to get more views",
    },
    {
        number: "30min",
        title: "Setup",
        description: "Set up your video CMS in less than 30 minutes",
    },
];

const Stat: React.FC = () => {
    return (
        <section className="min-h-screen bg-white dark:bg-[#1A1A1A] py-16 px-4 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <Header />
                <StatsGrid stats={stats} />
                <CallToAction />
            </div>
        </section>
    );
};




export default Stat;
