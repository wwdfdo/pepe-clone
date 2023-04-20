import React from "react";
import borderwhite from "../../images/second border.svg";
import frogpee from "../../images/frogpee.webp";
import froggreen from "../../images/roadmapgreen.webp";
import { BsDot } from "react-icons/bs";

const Roadmap = () => {
  return (
    <div className="py-10">
      <img src={borderwhite} className=" rotate-180" alt="" />
      <div className="flex flex-col text-white gap-20">
        <div className="flex justify-between">
          <div>
            <img src={frogpee} alt="" />
          </div>
          <div className="flex flex-col items-center justify-around gap-10">
            <h3 className="text-white text-7xl font-bold text-center">
              Road Map
            </h3>
            <div className="flex flex-col gap-5 bg-green-950 text-2xl justify-center text-center py-5 px-10 border-2 border-white rounded-tr-3xl rounded-bl-3xl">
              <p>Phase 1: Meme</p>
              <p>Phase 2: Vibe and HODL</p>
              <p>Phase 3: Generational wealth</p>
            </div>
          </div>
          <div>
            <img src={froggreen} alt="" />
          </div>
        </div>
        <div className="w-[60%] mx-auto text-2xl text-center">
          All jokes aside, here is a rough sketch of $pepes path ahead. We dont
          wan’t to give everything away on day 1, Expect surprises along the way
          ;)
        </div>
        <div className="flex gap-10 justify-center w-4/5 mx-auto">
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-5 w-1/3 py-10 px-5">
            <h3 className="text-center text-4xl font-bold">Phase 1</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center">
                <BsDot size={24} />
                <p>Launch</p>
              </div>
              <div className="flex items-center">
                <BsDot size={24} />
                <p>CoinGecko/Coinmarketcap divstings</p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={24} /> <p>1,000+ Holders</p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={24} />{" "}
                <p>Get $PEPE Trending on twitter with our memetic power</p>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-5 w-1/3 py-10 px-5">
            <h3 className="text-center text-4xl font-bold">Phase 1</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center">
                <BsDot size={24} />
                <p>Community Partnerships Pepe Times digital newsletter</p>
              </div>
              <div className="flex items-center">
                <BsDot size={24} />
                <p>Community Partnerships Pepe Times digital newsletter</p>
              </div>
              <div className="flex items-center">
                <BsDot size={24} />
                <p>Community Partnerships Pepe Times digital newsletter</p>
              </div>
              <div className="flex items-center">
                <BsDot size={24} />
                <p>Community Partnerships Pepe Times digital newsletter</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-5 w-1/3 py-10 px-5">
            <h3 className="text-center text-4xl font-bold">Phase 1</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center">
                <BsDot size={24} />
                <p>Pepe themed merch, % revenues to $pepe buy and burn</p>
              </div>
              <div className="flex items-center">
                <BsDot size={24} />
                <p>Pepe Academy: details tba</p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={24} /> <p>Pepe Tools: details tba</p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={24} /> <p>T1 Exchange Listings 100,000+ holders</p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={24} /> <p>Flip Bitcoin</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
