import React from "react";
import group from "../assets/Sprinter.png";
import airport from "../assets/airport.png";
import privateCar from "../assets/private.png";
import disney from "../assets/disney.png";
import keys from "../assets/keys.png";
import CountUp from "react-countup";
import { FaMapMarked } from "react-icons/fa";
import "./analytics.css";
import { useTranslation } from "react-i18next";

const Analytics = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-full bg-white pt-32 px-4 text-white-map" id="Analytics">
      <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 text-decoration-line: underline  pb-12">
      {t("services.title")}
      </h1>
      <div
        className="mx-auto grid md:grid-cols-3 mb-[50px]"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className=" flex flex-col text-center">
          {/* <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-2 text-[#00df9a]">
            <FaMapMarked />
          </span> */}
          <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 ">
            <CountUp end={5300} duration={7} />
          </span>
          <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 text-[#00df9a]">
          {t("services.clients_count")}
          </h1>
        </div>
        <div className=" flex flex-col">
          {/* <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-2 text-[#00df9a]">
            <FaMapMarked />
          </span> */}
          <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6">
            <CountUp end={9} duration={8} />
          </span>
          <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 text-[#00df9a]">
          {t("services.experiencie_count")}
          </h1>
        </div>
        <div className=" flex flex-col">
          {/* <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-2 text-[#00df9a]">
            <FaMapMarked />
          </span> */}
          <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 ">
            <CountUp end={4500} duration={7} />
          </span>
          <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 text-[#00df9a]">
          {t("services.travel_count")}
          </h1>
        </div>
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <img
          className="w-[550px] h-[300px] mx-auto my-4 rounded-lg"
          src={airport}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold "> {t("services.airport_trasnfer")}</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {t("services.title_airport_trasnfer")}
          </h1>
          <p>
          {t("services.text_airport_trasnfer")}
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
          <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hello I want to make a reservation!!">
          {t("home.button_text")}
          </a>
          </button>
        </div>
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">{t("services.black_car")}</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {t("services.title_black_car")}
          </h1>
          <p>
          {t("services.text_black_car")}
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
          <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hello I want to make a reservation!!">
          {t("home.button_text")}
          </a>
          </button>
        </div>
        <img
          className="w-[530px] h-[300px] mx-auto my-4 rounded-lg"
          src={privateCar}
          alt="/"
        />
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <img
          className="w-[550px] h-[350px] mx-auto my-4 rounded-lg"
          src={group}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">
          {t("services.group_car")}
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {t("services.title_group_car")}
          </h1>
          <p>
          {t("services.text_group_car")}
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
          <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hello I want to make a reservation!!">
          {t("home.button_text")}
          </a>
          </button>
        </div>
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold"> {t("services.disney_car")}</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {t("services.title_disney_car")}
          </h1>
          <p>
          {t("services.text_disney_car")}
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
          <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hello I want to make a reservation!!">
          {t("home.button_text")}
          </a>
          </button>
        </div>
        <img
          className="w-[530px] h-[300px]  mx-auto my-4 rounded-lg"
          src={disney}
          alt="/"
        />
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <img
          className="w-[550px] h-[300px] mx-auto my-4 rounded-lg"
          src={keys}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">{t("services.key_car")}</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {t("services.title_key_car")}
          </h1>
          <p>
          {t("services.text_key_car")}
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
          <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hello I want to make a reservation!!">
          {t("home.button_text")}
          </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
