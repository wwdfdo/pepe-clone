import React from "react";
import BannerImage from "../../images/banner-frog.webp";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-bg-cow bg-cover bg-no-repeat w-full">
      <div className="flex items-center">
        <div className="text-white">
          <h3 className="flex text-[3rem] italic font-bold">$pepe</h3>
          <p className="flex text-[2.2rem] pt-5">
            the most memeable memecoin in <br /> existence. The dogs have had
            their <br />
            day, it’s time for Pepe to take reign.
          </p>
        </div>
        <div>
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
