import CallToAction from "./CallToAction";
import HeroHeading from "./HeroHeading";
import RotatingText from "./RotatingText";
import VideoThumbnail from "./VideoThumbnail";

function Hero() {
    return (
        <main className="max-w-[1400px] mx-auto px-6 sm:px-8 pt-20 sm:pt-28 text-center">
            <HeroHeading />
            <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-3xl sm:text-5xl">
                <div className="inline-block rounded-2xl bg-gradient-to-r from-[#E97B5F] to-transparent">
                    <div className="m-[1px] p-1.5 text-[#E97B5F] text-3xl sm:text-5xl font-medium bg-gray-100 dark:bg-gray-800 rounded-2xl">
                        Media+
                    </div>
                </div>
                <span className="text-[#9A9A9A] dark:text-gray-400 font-light">=</span>
                <RotatingText />
            </div>
            <p className="mt-8 sm:mt-10 text-lg sm:text-2xl text-[#4A4A4A] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Netflix-style video discovery for your prospects that turns viewers into customers
            </p>
            <CallToAction />
            <VideoThumbnail />
        </main>
    );
}

export default Hero;