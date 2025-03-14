import { ChevronRight } from "lucide-react";
import { Slide } from "./CustomerSpotlight";

export const SlideItem: React.FC<Slide> = ({ image, title, description }) => (
    <div className="relative rounded-xl overflow-hidden group shadow-lg max-w-[90%] bg-transparent">
        <div className="relative aspect-video p-2 bg-transparent">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-200/80 dark:bg-gray-800/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h1 className="text-black dark:text-white text-2xl font-semibold">{title}</h1>
                <p className="text-center text-sm px-4">{description}</p>
                <button className="mt-4 bg-white dark:bg-gray-800 text-orange-600 px-4 py-2 cursor-pointer rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center">
                    Check out media site
                    <ChevronRight className="w-4 h-4 ml-1" />
                </button>
            </div>
        </div>
    </div>
);