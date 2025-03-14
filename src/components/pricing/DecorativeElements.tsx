import React from "react";

export const DecorativeElements: React.FC = () => (
    <>
        <div
            className="absolute -z-10 top-4 right-4 w-full h-full bg-black/5 dark:bg-gray-700/20 
        rounded-2xl hidden md:block"
        />
        <div
            className="absolute -z-20 top-8 right-8 w-full h-full bg-black/5 dark:bg-gray-700/10 
        rounded-2xl hidden md:block"
        />
    </>
);