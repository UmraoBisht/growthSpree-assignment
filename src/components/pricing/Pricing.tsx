import image from "../../assets/Image.png";
import { DecorativeElements } from "./DecorativeElements";
import { FeatureItem } from "./FeatureItem";


const Pricing: React.FC = () => {
    return (
        <div className="px-4 py-8 sm:px-6 md:px-16 lg:py-16">
            <div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center 
        bg-gradient-to-br from-[#e17055] to-[#fab1a0] dark:from-[#d63031] dark:to-[#e17055] 
        rounded-3xl p-6 sm:p-10 md:p-16 transition-colors"
            >
                {/* Left Column - Content */}
                <div className="space-y-6 md:space-y-8">
                    <h1 className="text-white dark:text-gray-100 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
                        Get your media library up and running
                    </h1>

                    <p className="text-white/90 dark:text-gray-200 text-lg text-center md:text-left">
                        Kickstart your media library with up to 25 high-quality videos.
                        Upgrade anytime with our flexible add-on plans to upload additional videos.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-3 sm:space-y-4">
                        <FeatureItem text="25 media upload credits & add-ons" />
                        <FeatureItem text="1 media site credit & add-ons for more" />
                    </div>

                    {/* Button */}
                    <div className="flex justify-center md:justify-start">
                        <button
                            className="bg-white dark:bg-gray-800 text-[#e17055] dark:text-gray-100 
              px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white/90 dark:hover:bg-gray-700 
              transition-colors"
                        >
                            Get Pricing
                        </button>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative flex justify-center md:justify-end items-end">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-full">
                        <img src={image} alt="Dashboard Preview" className="w-full object-cover" />
                    </div>

                    {/* Decorative Elements */}
                    <DecorativeElements />
                </div>
            </div>
        </div>
    );
};



export default Pricing;
