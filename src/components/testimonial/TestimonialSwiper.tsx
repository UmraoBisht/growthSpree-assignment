import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { testimonials } from "./testimonialsData";
import { TestimonialItem } from "./TestimonialItem";
import { SwiperNavigation } from "./SwiperNavigation";
import { RequestDemoButton } from "./RequestDemoButton";



const TestimonialSwiper: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-[#E68967] dark:bg-[#2D2D2D] min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center text-white dark:text-gray-200">
        <h2 className="text-2xl mb-8">Take it from a Customer</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
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
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialItem testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNavigation prevRef={prevRef} nextRef={nextRef} />
        <div className="swiper-pagination flex justify-center gap-2 mt-8"></div>
        <RequestDemoButton />
      </div>
    </div>
  );
};

export default TestimonialSwiper;
