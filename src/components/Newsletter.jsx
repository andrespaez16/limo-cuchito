import React from "react";
import "./newsletter.css";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="pt-32"  id="About">
      <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold text-decoration-line: underline mb-20">
      {t("contact.title")}
      </h1>
      <div className="w-full pt-16 text-white text-white-new h-[500px]">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 mt-[60px]">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {t("contact.text_contact")}
            </h1>
            <p>{t("contact.text_subtitle")}</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder={t("contact.place_holder")}
              />
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              {t("contact.button")}
              </button>
            </div>
            <p>
            {t("contact.input_text")}
              <span className="text-[#00df9a]"> {t("contact.input_subtitles")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
