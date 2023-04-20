import React from "react";
import borderwhite from "../../images/second border.svg";
import tokemfrog from "../../images/tokenomicfrog.webp";

const Tokenomics = () => {
  return (
    <div className="flex flex-col gap-16 py-10 ">
      <img src={borderwhite} className=" rotate-180" alt="" />
      <h2 className="text-7xl text-center text-white font-extrabold ">
        TOKENOMICS
      </h2>
      <div className="flex justify-between w-4/5 mx-auto items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col gap-6 text-center">
            <h3 className="text-white text-4xl font-bold">Token Supply:</h3>
            <p className="text-white text-4xl font-bold">420,690,000,000,000</p>
          </div>
          <div className="flex flex-col gap-10  mx-auto px-8 py-12 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950 text-[1.5rem]   text-white">
            <p>No Taxes, No Bullshit. It’s that simple.</p>
            <p>
              93.1% of the tokens were sent to the liquidity pool,
              <br /> LP tokens were burnt, and contract is renounced. <br /> The
              remaining 6.9% of the supply is being held in a <br /> multi-sig
              team wallet only to be used as tokens for <br /> future
              centralized exchange listings, bridges, and <br />
              liquidity pools. This wallet is easily trackable with <br /> the
              ENS name “pepecexwallet.eth”
            </p>{" "}
          </div>
        </div>
        <div className="pt-20">
          <p className="text-center pr-20 text-white text-lg">
            CEX Listings
            <br />
            6.9%
          </p>
          <img src={tokemfrog} className="w-[380px]" alt="" />
          <p className="text-center pr-20 text-white text-lg">
            CEX Listings
            <br />
            6.9%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
