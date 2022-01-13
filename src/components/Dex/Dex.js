import "./Dex.css";
import uniback from "../../img/uni-back.jpeg";
import panback from "../../img/pancake-back.png";
import sushiback from "../../img/sushiswap-back.jpeg";
import oneinchback from "../../img/1inch-back.png";
import mdexback from "../../img/mdex-back.jpeg";
import quickback from "../../img/quickswap-back.jpeg";
import syntback from "../../img/synthetix-logo.jpeg";
import compoundback from "../../img/compound-back.png";
import curveback from "../../img/curve-back.jpeg";
import zeroxback from "../../img/0x-back.jpeg";
import headerImage from "../../img/headerpicture.png";
import GoogleLogin from "react-google-login";
import { Fragment } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import UniSwap from "../UniSwap/UniSwap";

const Dex = () => {
  function responseGoogle(response) {
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.familyName);
    console.log(response.profileObj.givenName);
    console.log(response.profileObj.imageUrl);
  }
  return (
    <Fragment>
      <div className="header-main">
        <Link to="/">
          <div className="header-logo">
            <img
              src={headerImage}
              style={{ height: "100px", width: "500px" }}
              alt="crypto-365-logo"
            ></img>
          </div>
        </Link>
        <nav className="navbar">
          <div className="nav1">
            <a href="/check-crypto-prices">Check Crypto Prices</a>
          </div>
          <div className="nav2">
            <a href="/dex-swap">DEX</a>
          </div>
          <div className="nav3">
            <a href="/nft-collections">NFT Collections</a>
          </div>
          <div className="nav4">
            <a href="/yield-farming">Yield Farming</a>
          </div>
          <div className="nav5">
            <a href="/parachain-auctions">Parachain Auctions</a>
          </div>
          <div className="nav4">
            <a href="/trending-coins">Top 7 Trending</a>
          </div>
        </nav>
        <div className="google-login">
          <GoogleLogin
            clientId="358245853555-c4olpdkg8ombo7bd4iq8h95419uvn33o.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            buttonText="Login with Google"
            cookiePolicy="single_host_origin"
            cssClass="google-login"
            scope="profile email"
          ></GoogleLogin>
        </div>
      </div>
      <hr className="line" />

      <h1 className="dex-header">
        Swap your favorite ERC-20, BEP-20 & more tokens on DEXs
      </h1>
      <div className="dex">
        <div className="uniswap">
          <a href="https://app.uniswap.org/#/swap">
            <img
              src={uniback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="pancakeswap">
          <a href="https://pancakeswap.finance/">
            <img
              src={panback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="sushiswap">
          <a href="https://app.sushi.com/swap">
            <img
              src={sushiback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="oneinch">
          <a href="https://app.1inch.io/#/1/swap">
            <img
              src={oneinchback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="mdex">
          <a href="https://mdex.com/#/">
            <img
              src={mdexback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>

        <div className="uniswap">
          <a href="https://app.uniswap.org/#/swap">
            <img
              src={quickback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="pancakeswap">
          <a href="https://pancakeswap.finance/">
            <img
              src={syntback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="sushiswap">
          <a href="https://app.sushi.com/swap">
            <img
              src={compoundback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="oneinch">
          <a href="https://app.1inch.io/#/1/swap">
            <img
              src={curveback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="mdex">
          <a href="https://mdex.com/#/">
            <img
              src={zeroxback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
      </div>

      <UniSwap />
      <Footer />
    </Fragment>
  );
};

export default Dex;
