import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";



export const SwiperNavigation: React.FC<{ prevRef: React.RefObject<HTMLDivElement | null>; nextRef: React.RefObject<HTMLDivElement | null> }> = ({ prevRef, nextRef }) => (
    <>
        <div ref={prevRef} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 bg-opacity-20 dark:bg-opacity-50 rounded-full cursor-pointer z-10">
            <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
        </div>
        <div ref={nextRef} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 bg-opacity-20 dark:bg-opacity-50 rounded-full cursor-pointer z-10">
            <ChevronRight className="w-6 h-6 text-black dark:text-white" />
        </div>
    </>
);