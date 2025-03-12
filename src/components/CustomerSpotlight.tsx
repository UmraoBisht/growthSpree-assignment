import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

import img1 from '../assets/Components/Client=Azuga, State=Default.png';
import img2 from '../assets/Components/Client=Agora, State=Default.png';
import img3 from '../assets/Components/Client=Ignition, State=Default.png';
import img4 from '../assets/Components/Client=Gennext, State=Default.png';
import { NavigationOptions } from 'swiper/types';

const slides = [
    { image: img1, title: "Azuga", description: "Boosting fleet efficiency with seamless tracking and insights." },
    { image: img2, title: "Agora", description: "The content library to catch up on the latest Agora events, talks, and fireside chats." },
    { image: img3, title: "Ignition", description: "Powering the future of automation and industrial IoT solutions." },
    { image: img4, title: "Gennext", description: "Empowering young minds with cutting-edge educational programs." },
];

function CustomerSpotlight() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="py-12">
            <div className="container mx-auto px-4 overflow-hidden">
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        effect="coverflow"
                        loop={true}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1.5}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                if (swiper.params.navigation && prevRef.current && nextRef.current) {
                                    (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
                                    (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }
                            });
                        }}
                        className="!overflow-visible !pt-12 !pb-16"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="transition-transform duration-300">
                                <div className="relative rounded-xl overflow-hidden group">
                                    <div className="relative aspect-video p-2">
                                        <img src={slide.image} className="w-full h-full object-cover" />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gray-200/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                            <h1 className="text-black text-2xl font-semibold">{slide.title}</h1>
                                            <p className="text-center text-sm px-4">{slide.description}</p>
                                            <button className="mt-4 bg-white text-orange-600 px-4 py-2 cursor-pointer rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center">
                                                Check out media site
                                                <ChevronRight className="w-4 h-4 ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons with useRef */}
                    <button ref={prevRef} className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button ref={nextRef} className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CustomerSpotlight;
