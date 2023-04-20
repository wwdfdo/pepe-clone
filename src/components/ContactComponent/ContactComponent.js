import React from "react";

import { RxDiscordLogo } from "react-icons/rx";
import { TfiTwitter } from "react-icons/tfi";
import { SiTelegram } from "react-icons/si";
import img from "../../images/pepenewtitle.png";
import borderwhite from "../../images/second border.svg";

const ContactComponent = () => {
  return (
    <div>
      <img src={borderwhite} className=" rotate-180" alt="" />
      <div className="flex flex-col justify-center items-center gap-10 w-2/3 mx-auto">
        <h2>CONTACT</h2>
        <img src={img} alt="" />
        <p>email: masterpepe@pepe.vip</p>
        <div className="flex gap-5">
          <RxDiscordLogo size={48} />
          <TfiTwitter size={48} />
          <SiTelegram size={48} />
        </div>
        <p className="flex text-xl text-center">
          #pepe coin has no association with Matt Furie or his creation Pepe the
          Frog. This token is simply paying homage to a meme we all love and
          recognize.
        </p>
        <p className="flex text-xl text-center">
          #PEPE is a meme coin with no intrinsic value or expectation of
          financial return. There is no formal team or roadmap. the coin is
          completely useless and for entertainment purposes only.
        </p>
      </div>
    </div>
  );
};

export default ContactComponent;
