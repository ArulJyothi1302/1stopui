import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import { FOOTER_BAR_TITLE } from "../utils/constants";
import { FaArrowRight } from "react-icons/fa";

const FooterBar = () => {
  return (
    <>
      <div className="hidden md:flex flex-col justify-center items-center bg-orange-100 p-5 mt-[20px]">
        <h1 className="text-3xl flex text-orange-400 ">
          <HiOutlineSparkles className="w-10" />
          <span>{FOOTER_BAR_TITLE.Head}</span>
        </h1>
        <p className="text-lg my-2 p-2">{FOOTER_BAR_TITLE.sub}</p>
        <button className="p-3 text-white bg-red-400 rounded-lg">
          <span className="flex items-center text-mds ">
            VIEW PRODUCTS <FaArrowRight />
          </span>
        </button>
      </div>
    </>
  );
};

export default FooterBar;
