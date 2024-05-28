import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { switchLang } from "../../plugins/changeLang";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Navbar = ({ scrollPosition }) => {
  const { t } = useTranslation();
  const navbarLink = [
    { id: "#about", text: t("navbar.item1") },
    { id: "#projects", text: t("navbar.item2") },
    { id: "#career", text: t("navbar.item3") },
    { id: "#news", text: t("navbar.item4") },
    { id: "#contacts", text: t("navbar.item5") },
  ];
  const languages = [
    { id: "en", lang: "EN" },
    { id: "ru", lang: "RU" },
    { id: "uz", lang: "UZ" },
  ];
  const [activeLang, setActiveLang] = useState("EN");
  useEffect(() => {
    let lang = sessionStorage.getItem("lang");
    if (lang) {
      setActiveLang(lang);
    } else {
      setActiveLang("EN");
    }
  }, []);
  const changeLang = (id, lang) => {
    switchLang(id);
    setActiveLang(lang);
    sessionStorage.setItem("lang", lang);
  };
  const [sideBar, setSideBar] = useState(false)
  return (
    <nav
      className={`${
        scrollPosition > 100
          ? "bg-white text-black"
          : "text-white bg-transparent"
      } flex w-[100%] py-[20px] px-[10px] sm:px-[20px] md:px-[40px] xl:px-[100px] items-center justify-between left-0 top-0 fixed z-[30]`}>
      <Link to={"/"} className="cursor-pointer flex items-center">
        <img
          src={Logo}
          alt="logo"
          className="w-[60px] h-[60px] mix-blend-multiply"
        />
        <h2 className=" uppercase font-[500] w-[100px]">discover invest</h2>
      </Link>
      <ul className="hidden lg:flex gap-[20px] xl:gap-[50px]">
        {navbarLink?.map((item, index) => {
          return (
            <li
              key={index}
              className="group relative flex gap-[5px] items-center"
            >
              <a href={item?.id}>{item?.text}</a>
              <div className=" absolute w-[6px] h-[6px] opacity-0 group-hover:opacity-100 ease-in-out duration-500 rotate-[45deg] bg-purple-600 left-[-15px]"></div>
            </li>
          );
        })}
      </ul>
      <div className="hidden lg:flex gap-[10px] ml-[10px] xl:ml-[50px] text-[18px]">
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <RiInstagramFill />
        </a>
        <a href="">
          <BiLogoTelegram />
        </a>
      </div>
      <div className="relative lang cursor-pointer z-30 mr-[60px] sm:mr-0 flex">
        <p className={`flex gap-[10px] items-center text-[14px] ease-in-out duration-500 ${sideBar ? "text-black" : ""}`}>
          {activeLang} <IoIosArrowDown className=" text-purple-600" />
        </p>
        <div className="absolute bg-purple-600 flex flex-col text-white p-[20px] top-[50px] transition-all left-[-10px] opacity-0">
          {languages?.map((item, index) => {
            return (
              <span
                className="hover:underline"
                key={index}
                onClick={() => changeLang(item?.id, item?.lang)}
              >
                {item?.lang}
              </span>
            );
          })}
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-[20px]">
        <a
          href="tel: + 998 (71) 288 88 88"
          className="font-bold text-[18px] whitespace-nowrap"
        >
          + 998 (71) 288 88 88
        </a>
        <button className="p-[10px] text-white bg-purple-600">
          <FaPhoneAlt />
        </button>
      </div>
      <a
        href="tel: + 998 (71) 288 88 88"
        className="tel p-[10px] sm:p-[15px] fixed z-50 top-[30px] lg:top-[85vh] right-[15%] sm:right-[70px] md:right-[100px] lg:right-[100px] bg-purple-600 text-white"
      >
        <FaPhoneAlt size={14} />
      </a>
      <button onClick={()=>setSideBar(!sideBar)} className={`${sideBar ? "text-black" : ""} ease-in-out duration-500 relative z-30`}>
        <HiMiniBars3BottomRight size={24} />
      </button>
      <aside className={`${sideBar ? " left-0" : "left-[-2000px] z-[-1]"} top-0 ease-in-out duration-500 z-20 fixed w-[100%] h-[100vh] shadow-md bg-white text-black flex pt-[170px] items-center flex-col gap-[20px]`}>
        <ul className="flex flex-col gap-[30px]">
          {navbarLink?.map((item, index) => {
            return (
              <li
                key={index}
                className="group relative flex gap-[5px] items-center text-[30px] md:text-[40px] font-[600]"
              >
                <a href={item?.id}>{item?.text}</a>
                <div className="absolute w-[12px] h-[12px] opacity-0 group-hover:opacity-100 ease-in-out duration-500 rotate-[45deg] bg-purple-600 left-[-25px]"></div>
              </li>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
