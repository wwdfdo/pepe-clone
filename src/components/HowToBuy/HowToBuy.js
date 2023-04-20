import React from "react";
import walletlogo from "../../images/walletlogo.webp";
import getsometh from "../../images/getsomeeth.webp";
import uniswaphowtoplay from "../../images/uniswaphowtoplay.webp";
import switchlogo from "../../images/switchlogo.webp";

const HowToBuy = () => {
  return (
    <div className="flex flex-col gap-16">
      <h2 className="text-7xl text-center text-white font-extrabold ">
        HOW TO BUY
      </h2>
      <div className="flex flex-col gap-12">
        <div className="flex justify-center gap-20 items-center  w-4/5 mx-auto px-10 py-16 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950  text-white">
          <div>
            <img src={walletlogo} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold">Create a Wallet</h3>
            <p className="text-lg">
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>{" "}
          </div>
        </div>
        <div className="flex justify-center gap-20 items-center  w-4/5 mx-auto px-10 py-16 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950  text-white">
          <div>
            <img src={getsometh} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold">Create a Wallet</h3>
            <p className="text-lg">
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>{" "}
          </div>
        </div>
        <div className="flex justify-center gap-20 items-center  w-4/5 mx-auto px-10 py-16 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950  text-white">
          <div>
            <img src={uniswaphowtoplay} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold">Create a Wallet</h3>
            <p className="text-lg">
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>{" "}
          </div>
        </div>
        <div className="flex justify-center gap-20 items-center  w-4/5 mx-auto px-10 py-16 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950  text-white">
          <div>
            <img src={switchlogo} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold">Create a Wallet</h3>
            <p className="text-lg">
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
