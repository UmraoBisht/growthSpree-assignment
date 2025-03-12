import { Upload } from 'lucide-react';
import image from '../assets/Image.png';

function Pricing() {
    return (
        <div className="px-4 py-8 sm:px-6 md:px-16 lg:py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#e17055] to-[#fab1a0] rounded-3xl p-6 sm:p-10 md:p-16">
                
                {/* Left Column - Content */}
                <div className="space-y-6 md:space-y-8">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
                        Get your media library up and running
                    </h1>

                    <p className="text-white/90 text-lg text-center md:text-left">
                        Kickstart your media library with up to 25 high-quality videos.
                        Upgrade anytime with our flexible add-on plans to upload additional videos.
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-3 text-white justify-center md:justify-start">
                            <Upload size={20} className="shrink-0" />
                            <span>25 media upload credits & add-ons</span>
                        </div>
                        <div className="flex items-center gap-3 text-white justify-center md:justify-start">
                            <Upload size={20} className="shrink-0" />
                            <span>1 media site credit & add-ons for more</span>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <button className="bg-white text-[#e17055] px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                            Get Pricing
                        </button>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative flex justify-center md:justify-end items-end">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-full">
                        <img
                            src={image}
                            alt="Dashboard Preview"
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-4 right-4 w-full h-full bg-black/5 rounded-2xl hidden md:block"></div>
                    <div className="absolute -z-20 top-8 right-8 w-full h-full bg-black/5 rounded-2xl hidden md:block"></div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
