import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavigationOptions } from "swiper/types";

// Testimonial data
const testimonials = [
  {
    id: 1,
    headline: "Beautifully showcases our best videos...",
    quote: "Media+ has created our own 'UNI-FLIX.' It's exactly the OTT platform I've been looking for...",
    name: "Girish C. Ballolla",
    title: "Founder & CEO, Gen Next Education, Inc.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 2,
    headline: "A tool that makes it easy to manage videos with AI...",
    quote: "For marketers & go-to-market teams, this is a great portal...",
    name: "Jenifer Ho",
    title: "VP of Marketing, Bitwarden",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 3,
    headline: "Integrates our media with HubSpot CRM...",
    quote: "Media+ seamlessly integrates our media with HubSpot CRM...",
    name: "Tami Strand",
    title: "Senior Director of Marketing, Azuga",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256&h=256&q=80"
  },
];

const TestimonialSwiper: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-[#E68967] dark:bg-[#2D2D2D] min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center text-white dark:text-gray-200">
        <h2 className="text-2xl mb-8">Take it from a Customer</h2>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
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
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="px-4">
                <h3 className="text-3xl font-semibold mb-12 dark:text-gray-300">"{testimonial.headline}"</h3>
                <div className="mb-8">
                  <div className="w-24 h-24 rounded-full mx-auto mb-8 overflow-hidden border-2 border-white dark:border-gray-500">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed dark:text-gray-400">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-1 dark:text-gray-300">{testimonial.name}</h4>
                    <p className="text-lg opacity-90 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div
          ref={prevRef}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 bg-opacity-20 dark:bg-opacity-50 rounded-full cursor-pointer z-10"
        >
          <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
        </div>
        <div
          ref={nextRef}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 bg-opacity-20 dark:bg-opacity-50 rounded-full cursor-pointer z-10"
        >
          <ChevronRight className="w-6 h-6 text-black dark:text-white" />
        </div>

        {/* Pagination */}
        <div className="swiper-pagination flex justify-center gap-2 mt-8"></div>

        {/* Request Demo Button */}
        <button className="mt-12 bg-white dark:bg-gray-800 text-[#E68967] dark:text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 dark:hover:bg-gray-700 transition-colors">
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
