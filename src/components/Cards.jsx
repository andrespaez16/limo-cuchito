import React from "react";
import sprinter from "../assets/sprinter1.png";
import suburban from "../assets/suburban.png";
import tesla from "../assets/teslas.png";
import escalade from "../assets/escalade.png";
import "./cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export const data = [
  {
    image: escalade,
    name: "CADILLAC ESCALADE",
    class: "w-[500px] mx-auto my-4 rounded-lg",
  },
  {
    image: tesla,
    name: "TESLA MODEL 3",
    class: "w-[600px] mx-auto my-4 rounded-lg mt-20",
  },
  {
    image: suburban,
    name: "CHEVROLET SUBURBAN",
    class: "w-[550px]  mx-auto my-4 rounded-lg",
  },
  {
    image: sprinter,
    name: "MERCEDES-BENZ SPRINTER",
    class: "w-[500px] mx-auto my-4 rounded-lg",
  },
];

const Cards = () => {
  return (
    <div className="w-full bg-white py-1 px-4">
      <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold ">
        Fleet
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        // pagination={true}
      >
        {data.map((item, key) => (
          <SwiperSlide>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img className={item.class} src={item.image} alt="/" />
              <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold ">{item.name}</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  {item.name}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
