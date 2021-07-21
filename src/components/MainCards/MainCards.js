import "./MainCards.css";
import Binance from "../../img/binance.png";
import Coinbase from "../../img/coinbase.png";
import Ftx from "../../img/ftx.png";
import Kraken from "../../img/kraken.png";
import Kucoin from "../../img/kucoin.png";
import UniSwap from "../../img/uniswap.png";
import OneInch from "../../img/1inch.png";
import Pcs from "../../img/pancakeswap.png";
import Sushi from "../../img/sushiswap.png";
import Mdex from "../../img/mdex.png";
import Opensea from "../../img/opensea.png";
import Rarible from "../../img/rarible.png";
import Mana from "../../img/mana.png";
import Chz from "../../img/chiliz.png";
import Flow from "../../img/flow.png";

const MainCards = () => {
  return (
    <>
      <h1 className="main-cards-header">Things you can do on Crypto365</h1>
      <div className="main-cards">
        <div className="check-crypto-prices">
          <h1>Check Crypto Currency prices and charts</h1>
          <h3>
            Track Crypto Currency prices, trading volume, market capitalization
            and price changes.
          </h3>
          <div className="exchange-logos">
            <img
              src={Binance}
              alt="Binance"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Coinbase}
              alt="Coinbase"
              style={{ height: "70px", width: "70px" }}
            ></img>
            <img
              src={Ftx}
              alt="Ftx"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Kraken}
              alt="Kraken"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Kucoin}
              alt="Kucoin"
              style={{ height: "35px", width: "35px" }}
            ></img>
          </div>
        </div>
        <div className="dex-swap">
          <h1>Swap your favorite ERC-20, BEP-20 & more tokens on DEXs </h1>
          <h3>
            Trade ERC-20, BEP-20 and other network tokens on your favorite
            Decentralized and AMM Trading Protocols
          </h3>
          <div className="dex-logos">
            <img
              src={UniSwap}
              alt="Uni"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Pcs}
              alt="Pcs"
              style={{ height: "35px", width: "70px" }}
            ></img>
            <img
              src={OneInch}
              alt="Oneinch"
              style={{ height: "50px", width: "70px" }}
            ></img>
            <img
              src={Sushi}
              alt="sushi"
              style={{ height: "35px", width: "70px" }}
            ></img>
            <img
              src={Mdex}
              alt="mdex"
              style={{ height: "35px", width: "35px" }}
            ></img>
          </div>
        </div>
        <div className="check-nft-collections">
          <h1>Check out Awesome NFT Collections</h1>
          <h3>
            Discover, collect, and sell extraordinary NFTs on Decentralized NFT
            platforms
          </h3>
          <div className="nft-logos">
            <img
              src={Flow}
              alt="Flow"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Opensea}
              alt="opensea"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Rarible}
              alt="rarible"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Chz}
              alt="chz"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Mana}
              alt="mana"
              style={{ height: "35px", width: "35px" }}
            ></img>
          </div>
        </div>

        <div className="main-cards-2"></div>
      </div>
    </>
  );
};

export default MainCards;
