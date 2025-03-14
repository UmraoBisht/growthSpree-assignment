import React, { useState, useEffect } from "react";

import { AccordionList } from "./AccordionList";
import { FeatureImage } from "./FeatureImage";
import { Header } from "./Header";
import { data } from "./data";



const WhyChooseMedia: React.FC = () => {
    const [selected, setSelected] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
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
            <Header />
            <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <AccordionList data={data} selected={selected} setSelected={setSelected} isMobile={isMobile} />
                {!isMobile && <FeatureImage selected={selected} />}
            </div>
        </div>
    );
};








export default WhyChooseMedia;
