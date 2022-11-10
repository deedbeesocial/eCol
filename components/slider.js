
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slider() {
  const slides = [
    {
      text1: "Do Good. Do Well.t",
     text2:"Boost Your Building's Bottom Lines",
      image: "/carosel/welcometothe.png",
      id: "slide1",
    },
   
  ];

  return (
    <div className="relative w-auto">
      {/* <div className="w-full h-[60vh] flex overflow-x-auto snap-mandatory snap-x scrollbar-hide"> */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={false}
          autoplay={true}
          loop={true}
          speed={500}
          pagination={{ clickable: true }}

          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map(({ text1,  image, id,text2 }) => (
            <SwiperSlide key={id}>
              <div className="h-[65vh] w-full relative flex justify-center items-center">
                <Image
                
                  className="object-cover brightness-50 w-full h-full"
                  layout="fill"
                  src={image}
                  alt=""
                />
                <div className="absolute inset-0 bg-green opacity-20"></div>
                <div className="px-4 md:container text-center z-50">
                  <h1 className="text-4xl   text-white drop-shadow-md py-4">
                    {text1}
                  </h1>
                  {text2}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
