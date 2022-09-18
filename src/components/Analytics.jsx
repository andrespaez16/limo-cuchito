import React from "react";
import Laptop from "../assets/blackcar.png";
import group from "../assets/Sprinter.png";
import airport from "../assets/airport.png";
import privateCar from "../assets/private.png";
import disney from "../assets/disney.png";
import keys from "../assets/keys.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="Analytics">
       <h1 className='md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2 mb-6 text-decoration-line: underline  mb-20'>Services</h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] h-[300px] mx-auto my-4 rounded-lg"
          src={airport}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">AIRPORT TRANSFER</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Privacy and security management
          </h1>
          <p>
            We are consistently being chosen by many executives as best airport
            transfer provider for Miami International Airport. As a luxury
            ground transportation service for business and vacation.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold"> BLACK CAR SERVICE PRIVATE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Total discretion in your tour
          </h1>
          <p>
            The best Black Car service in Miami provides transportation to
            exclusive clients who want the best private and safe transportation
            for all their needs. Our team of drivers will ensure that you arrive
            safely and comfortably at your desired destination.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
        <img
          className="w-[530px] h-[300px] mx-auto my-4 rounded-lg"
          src={privateCar}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] h-[350px] mx-auto my-4 rounded-lg"
          src={group}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">
            GROUPS & CORPORATE TRANSPORTATION
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Comfort and safety for your group
          </h1>
          <p>
            Highest level of professionalism and courtesy. Our team will work
            closely with you or your event coordinator to ensure that your group
            transportation will exceed your expectations.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DISNEY WORLD TOUR SERVICE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            The best service for your family
          </h1>
          <p>
            We know that our clients want to transport their family safely and
            comfortably on their vacation to Disney World Tour, our team will be
            delighted to provide the service to you and your family.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
        <img
          className="w-[530px] h-[300px]  mx-auto my-4 rounded-lg"
          src={disney}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] h-[300px] mx-auto my-4 rounded-lg"
          src={keys}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">FLORIDA KEYS SERVICE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          We know the best beaches in Florida
          </h1>
          <p>
            We know that Florida has the best keys in the United States and we
            are willing to transport you safely, comfortably and privately with
            your couple or family, so that you can enjoy the beautiful beaches
            that the state has.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
