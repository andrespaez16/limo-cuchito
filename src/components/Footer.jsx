import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>CUCHITOCORP.</h1>
        <p className='py-4'>{t("footer.text")}</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>{t("footer.solutions")}</h6>
        <ul>
            <li className='py-2 text-sm'>{t("footer.solutions_one")}</li>
            <li className='py-2 text-sm'>{t("footer.solutions_two")}</li>
            <li className='py-2 text-sm'>{t("footer.solutions_tree")}</li>
            <li className='py-2 text-sm'>{t("footer.solutions_four")}</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>{t("footer.support")}</h6>
        <ul>
            <li className='py-2 text-sm'>WhatsApp:+13473197413</li>
            <li className='py-2 text-sm'>Email:cuchitocorpgerencia@hotmail.com</li>
            <li className='py-2 text-sm'>24/7 {t("footer.support")}</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>{t("footer.company")}</h6>
        <ul>
            <li className='py-2 text-sm'>{t("footer.exp_company")}</li>
            <li className='py-2 text-sm'>WhatsApp:+13473197413</li>
            <li className='py-2 text-sm'>Miami-Florida</li>
        </ul>
    </div>
  
      </div>
    </div>
  );
};

export default Footer;
