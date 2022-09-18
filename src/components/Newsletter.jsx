import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="pt-32"  id="About">
      <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold text-decoration-line: underline mb-20">
        About
      </h1>
      <div className="w-full pt-16 text-white text-white-new h-[500px]">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 mt-[60px]">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                Notify Me
              </button>
            </div>
            <p>
              We care bout the protection of your data. Read our{" "}
              <span className="text-[#00df9a]">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
