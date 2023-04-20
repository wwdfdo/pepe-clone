import React from "react";
import sound from "../../audios/Frog Ribbit Sound Effect.mp3";

const Footer = () => {
  return (
    <div className="text-center bg-[#3a963d] h-16 flex items-center justify-center  font-semibold shadow-3xl">
      <p>© 2023 by PEPECLUB. All rights reserved!</p>
      <audio
        controls
        autoPlay={true}
        loop
        src={sound}
        className="absolute left-0"
      ></audio>
    </div>
  );
};

export default Footer;
