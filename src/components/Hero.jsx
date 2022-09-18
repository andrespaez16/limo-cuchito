import React from "react";
import Typed from "react-typed";
import "./hero.css";

const Hero = () => {
  return (
    <div className="text-white" id="home">
      <div className="max-w-[700px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Let us offer you
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible and
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["Private", "Comfortable", "Safe"]}
              typeSpeed={70}
              backSpeed={70}
              loop
            />
            trips.
          </p>
        </div>
        <p className="text-[#ffffff] font-bold p-2">
          CUCHITO CORP. THE BEST PROFESSIONAL TRANSPORTATION SERVICE ACROSS THE
          FLORIDA.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hola quiero hacer una reservacion!!">
          Get a Quote
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
