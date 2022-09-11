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
    class:'w-[500px] mx-auto my-4 rounded-lg',
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
  },
  {
    image: tesla,
    name: "TESLA MODEL 3",
   class:'w-[600px] mx-auto my-4 rounded-lg mt-20',
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
  },
  {
    image: suburban,
    name: "CHEVROLET SUBURBAN",
    class:'w-[550px]  mx-auto my-4 rounded-lg',
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
  },
  {
    image: sprinter,
    name: "MERCEDES-BENZ SPRINTER",
    class:'w-[500px] mx-auto my-4 rounded-lg',
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
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
              <img
                className={item.class}
                src={item.image}
                alt="/"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold ">{item.name}</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                {item.name}
                </h1>
                {/* <p>
                  We are consistently being chosen by many executives as best
                  airport transfer provider for Miami International Airport. As
                  a luxury ground transportation service for business and
                  vacation.
                </p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Airport Transfers{" "}
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              We are consistently being chosen by many executives as best
              airport transfer provider for Miami International Airport. As a
              luxury ground transportation service for business and vacation .
            </p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hola quiero hacer una reservacion!!">
              Get a Quote
            </a>
          </button>
        </div>
        <div className="w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
    
          <h2 className="text-2xl font-bold text-center py-8">
            Black Car Service Private
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              The best Black Car service in Miami provides transportation to
              exclusive clients who want the best private and safe
              transportation for all their needs. Our team of drivers will
              ensure that you arrive safely and comfortably at your desired
              destination.
            </p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hola quiero hacer una reservacion!!">
              Get a Quote
            </a>
          </button>
        </div>
        <div className="w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
       
          <h2 className="text-2xl font-bold text-center py-8">Groups</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Highest level of professionalism and courtesy. Our team will work
              closely with you or your event coordinator to ensure that your
              group transportation will exceed your expectations.{" "}
            </p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            {" "}
            <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hola quiero hacer una reservacion!!">
              Get a Quote
            </a>
          </button>
        </div>
        <div className="w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Disney World Service
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              We know that our clients want to transport their family safely and
              comfortably on their vacation to Disney World Tour, our team will
              be delighted to provide the service to you and your family.
            </p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            {" "}
            <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hola quiero hacer una reservacion!!">
              Get a Quote
            </a>
          </button>
        </div>
        <div className="w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Florida Keys Service
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              We know that Florida has the best keys in the United States and we
              are willing to transport you safely, comfortably and privately
              with your couple or family, so that you can enjoy the beautiful
              beaches that the state has.
            </p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            {" "}
            <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hola quiero hacer una reservacion!!">
              Get a Quote
            </a>
          </button>
        </div>
        <div className="w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Corporate Transportation
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              We offer a variety of corporate expert driver service options to
              help you get around town effortlessly. Whether you're a
              businessman trying to get to an important meeting or a team of
              professionals attending an industry . corporate expert driver
              services are for you.
            </p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            {" "}
            <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hola quiero hacer una reservacion!!">
              Get a Quote
            </a>
          </button>
        </div>
         */}
    </div>
  );
};

export default Cards;
