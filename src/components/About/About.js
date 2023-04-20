import React from "react";
import capfrog from "../../images/capfrog.webp";
import whiteborder from "../../images/bordersvg.svg";

const About = () => {
  return (
    <div className="relative py-10">
      <div className="h-10 absolute w-full ">
        <img src={whiteborder} className="  rotate-180 w-full" alt="" />
      </div>

      <div className="flex items-center justify-center text-white py-20">
        <div>
          <img src={capfrog} className="w-5/6" alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="flex text-7xl font-bold">ABOUT</h3>
          <p className="text-2xl tracking-wider">
            Pepe is tired of watching everyone play <br /> hot potato with the
            endless derivative <br /> ShibaCumGMElonKishuTurboAssFlokiMoon{" "}
            <br /> Inu coins. The Inu’s have had their <br /> day. It’s time for
            the most recognizable <br /> meme in the world to take his reign as{" "}
            <br /> king of the memes.
          </p>
          <p className="text-2xl tracking-wider">
            Pepe is here to make memecoins great <br /> again. Launched stealth
            with no <br />
            presale, zero taxes, LP burnt and <br /> contract renounced, $PEPE
            is a coin for <br /> the people, forever. Fueled by pure <br />{" "}
            memetic power, let $PEPE show you the <br /> way. In Lord Kek we
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
