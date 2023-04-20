import React from "react";
import logo from "../../images/pepetitle.webp";

const Header = () => {
  return (
    <div className=" flex h-[10rem] items-center bg-[#4f9843] justify-between px-[5%] text-3xl font-bold text-white shadow-md ">
      <div>
        <img src={logo} className="w-[16rem]" alt="" />
      </div>
      <ul className="flex gap-10">
        <li>home</li>
        <li>about</li>
        <li>how to buy</li>
        <li>tokenmics</li>
        <li>roadmap</li>
      </ul>
      <div className=" border-[1px] border-white px-4 pb-2 pt-1 flex items-center rounded-3xl">
        buy now
      </div>
    </div>
  );
};

export default Header;
