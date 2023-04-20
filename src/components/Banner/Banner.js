import React from "react";
import BannerImage from "../../images/banner-frog.webp";
import twitter from "../../images/twitter.webp";
import telegram from "../../images/telegram.webp";
import cmc from "../../images/cmc.webp";
import dextool from "../../images/dextool.webp";
import etherscan from "../../images/etherscan.webp";
import uniswap from "../../images/uniswap.webp";
import uniswaplogo from "../../images/uniswap-logo.webp";
import mexc from "../../images/mexc.webp";
import gate from "../../images/gate.webp";
import huobi from "../../images/huobi.webp";
import poloniex from "../../images/poloniex.webp";
import okx from "../../images/okx.webp";
import ibank from "../../images/ibank.webp";
import bingx from "../../images/bingx.webp";
import trustwallet from "../../images/trustwallet.webp";
import digifinex from "../../images/digifinex.webp";
import btcex from "../../images/btsex.webp";
import dextoologo from "../../images/dextoologo.webp";
import coinmarket from "../../images/cinemarketlogo.webp";
import coingeko from "../../images/coingeko.webp";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-bgcow bg-cover bg-no-repeat bg-center w-full pb-20">
      <div className="flex flex-col w-[3/4]">
        <div className="flex items-center justify-center w-[3/4]">
          <div className="text-white flex flex-col gap-6">
            <h3 className="flex text-[3rem] italic font-bold">$pepe</h3>
            <p className="flex text-[2.2rem]">
              the most memeable memecoin in <br /> existence. The dogs have had
              their <br />
              day, it’s time for Pepe to take reign.
            </p>
            <div className="flex gap-5 pt-4">
              <div className="w-[4.2rem]">
                <img src={twitter} alt="" />
              </div>
              <div className="w-[4.2rem]">
                {" "}
                <img src={telegram} alt="" />
              </div>
              <div className="w-[4.2rem]">
                {" "}
                <img src={dextool} alt="" />
              </div>
              <div className="w-[4.2rem]">
                {" "}
                <img src={uniswap} alt="" />
              </div>
              <div className="w-[4.2rem]">
                {" "}
                <img src={cmc} alt="" />
              </div>
              <div className="w-[4.2rem]">
                {" "}
                <img src={etherscan} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={BannerImage} alt="" />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-wrap  justify-center items-center w-[3/4] gap-5 mx-auto text-[32px] font-bold">
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>uniswap</div>
              <img src={uniswaplogo} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>mexc</div>
              <img src={mexc} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>gate.io</div>
              <img src={gate} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>huobi</div>
              <img src={huobi} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>poloniex</div>
              <img src={poloniex} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>okx dex</div>
              <img src={okx} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>Ibank</div>
              <img src={ibank} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>bingx</div>
              <img src={bingx} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%] ">
              <div>trustwallet</div>
              <img src={trustwallet} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>digifinex</div>
              <img src={digifinex} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>btcex</div>
              <img src={btcex} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%] opacity-0">
              <div>uniswap</div>
              <img src={dextoologo} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>dextools</div>
              <img src={dextoologo} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>coinmarketcap</div>
              <img src={coinmarket} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[25%]">
              <div>coingecko</div>
              <img src={coingeko} alt="" />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
