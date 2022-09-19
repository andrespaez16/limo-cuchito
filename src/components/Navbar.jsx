import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";
import "./navBar.css";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 sticky top-0 z-50 font-bold">
      <Link href="/">
        <img src={logo} alt="/" className="w-[200px] mx-auto mt-10" />
      </Link>
      <h1 className="w-full text-3xl font-bold text-[#00df9a]"></h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            {t("nav.home")}
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="Analytics"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
             {t("nav.services")}
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="fleet"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
              {t("nav.fleet")}
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="About"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
         {t("nav.about")}
          </Link>
        </li>
        <li className="p-4">
        </li>
        <li className="p-4">
          <Link
          >
         <button className="bg-white w-[30px] h-[30px] rounded-full font-medium mx-auto md:mx-0 usa" onClick={()=> i18n.changeLanguage("en")}>
          </button>
          </Link>
        </li>
        <li className="p-4">
          <Link
          >
         <button className="bg-white w-[30px] h-[30px] rounded-full font-medium mx-auto md:mx-0 col" onClick={()=> i18n.changeLanguage("es")}>
          </button>
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-4 border-b border-gray-600">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
             {t("nav.home")}
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link
            to="Analytics"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
             {t("nav.services")}
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link
            to="fleet"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
         {t("nav.fleet")}
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link
            to="About"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            {t("nav.about")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
