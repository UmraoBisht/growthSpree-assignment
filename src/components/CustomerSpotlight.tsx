import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import img1 from "../assets/Components/Client=Azuga, State=Default.png";
import img2 from "../assets/Components/Client=Agora, State=Default.png";
import img3 from "../assets/Components/Client=Ignition, State=Default.png";
import img4 from "../assets/Components/Client=Gennext, State=Default.png";
import { NavigationOptions } from "swiper/types";

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
    <div className="py-16 bg-white dark:bg-gray-900 text-center">
      <div className="overflow-hidden">
        {/* Title Section */}
        <h2 className="text-orange-600 text-lg font-bold uppercase">Media+ in action:</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          Customer Spotlight
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base max-w-2xl mx-auto">
          See how customers use Media+ to create branded media sites that captivate and convert.
        </p>

        <div className="relative mt-10">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 1.7 },
              1280: { slidesPerView: 2 },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2.5,
              slideShadows: false,
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
            className="!overflow-visible !pt-16 !pb-20"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="transition-transform duration-300 bg-transparent">
                <div className="relative rounded-xl overflow-hidden group shadow-lg max-w-[90%] bg-transparent">
                  <div className="relative aspect-video p-2 bg-transparent">
                    <img src={slide.image} className="w-full h-full object-cover rounded-lg" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gray-200/80 dark:bg-gray-800/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <h1 className="text-black dark:text-white text-2xl font-semibold">
                        {slide.title}
                      </h1>
                      <p className="text-center text-sm px-4">{slide.description}</p>
                      <button className="mt-4 bg-white dark:bg-gray-800 text-orange-600 px-4 py-2 cursor-pointer rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center">
                        Check out media site
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <ChevronLeft className="w-6 md:w-7 h-6 md:h-7 text-gray-800 dark:text-gray-200" />
          </button>
          <button
            ref={nextRef}
            className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <ChevronRight className="w-6 md:w-7 h-6 md:h-7 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerSpotlight;
