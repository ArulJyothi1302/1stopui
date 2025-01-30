import React from "react";
import Suggestions from "./Suggestions";
import ShopByDept from "./ShopByDept";

const HomePage = () => {
  return (
    <>
      <div className="items-baseline p-4 my-2 mx-10 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-4">
          <img
            src="https://imgcms.1stoplighting.com/site/common/promos/all/2023/skyx-hero-100.jpg"
            alt="spotlight"
          />
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://imgcms.1stoplighting.com/site/common/promos/all/2024/final_chandelier_feature_heroslider.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://imgcms.1stoplighting.com/site/common/promos/all/2024/final_bathroomvanity_heroslider.webp"
                className="w-full h-80"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suggestions />
      <ShopByDept />
    </>
  );
};

export default HomePage;
