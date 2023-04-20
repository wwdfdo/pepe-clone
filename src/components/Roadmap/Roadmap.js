import React from "react";
import borderwhite from "../../images/second border.svg";
import frogpee from "../../images/frogpee.webp";
import froggreen from "../../images/roadmapgreen.webp";

const Roadmap = () => {
  return (
    <div>
      <img src={borderwhite} className=" rotate-180" alt="" />
      <div className="flex flex-col text-white">
        <div className="flex justify-between">
          <div>
            <img src={frogpee} alt="" />
          </div>
          <div className="flex flex-col items-center justify-between gap-10">
            <h3 className="text-white text-7xl font-bold text-center">
              Road Map
            </h3>
            <div className="flex flex-col gap-5 bg-green-950 text-2xl justify-center text-center py-10 px-10 border-2 border-white rounded-tr-3xl rounded-bl-3xl">
              <p>Phase 1: Meme</p>
              <p>Phase 2: Vibe and HODL</p>
              <p>Phase 3: Generational wealth</p>
            </div>
          </div>
          <div>
            {" "}
            <img src={froggreen} alt="" />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Roadmap;
