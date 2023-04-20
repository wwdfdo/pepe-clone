import React from "react";

import { RxDiscordLogo } from "react-icons/rx";
import { TfiTwitter } from "react-icons/tfi";
import { SiTelegram } from "react-icons/si";
import img from "../../images/Pepe_Club_Logo_cropped.png";
import borderwhite from "../../images/second border.svg";
import opensea from "../../images/opensea.svg";

const ContactComponent = () => {
  return (
    <div>
      <img src={borderwhite} className=" rotate-180" alt="" />
      <div className="flex flex-col justify-center items-center gap-10  w-2/3 mx-auto text-white py-20">
        <h2 className="text-7xl font-bold pb-10 ">CONTACT</h2>
        <img src={img} alt="" />
        <p className="text-2xl">email: team@pepeclub.vip</p>
        <div className="flex gap-5">
          <TfiTwitter size={56} className="text-white" />
          <SiTelegram size={56} className="text-white" />
          <RxDiscordLogo size={56} className="text-white" />
          <img src={opensea} className="text-white w-[56px] bg-white" alt="" />
        </div>
        <p className="flex text-2xl text-center">
          #PEPE Pepe Club has no association with Matt Furie or his creation
          Pepe the Frog. This token is simply paying homage to a meme we all
          love and recognize.
        </p>
        <p className="flex text-2xl text-center">
          #PEPE Pepe Club is a meme NFT with no intrinsic value or expectation
          of financial return, the NFT was released to celebrate the Pepe Meme
          and support the community around it and encourage the NFT space with
          creativity and collaboration, Pepe Club NFT collection is solely for
          entertainment purposes only.
        </p>
      </div>
    </div>
  );
};

export default ContactComponent;
