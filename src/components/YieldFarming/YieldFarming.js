import "./YieldFarming.css";
import venusback from "../../img/venusback.jpeg";
import curveback from "../../img/curveback.png";
import sushiback from "../../img/sushiback.png";
import bakeryback from "../../img/bakeryback.jpeg";
import synback from "../../img/synback.jpeg";
import sunback from "../../img/sunback.svg";
import harvestback from "../../img/harvestback.jpeg";
import flamincoback from "../../img/flamincoback.png";
import dforce from "../../img/dforceback.png";
import yearnback from "../../img/yearnback.jpeg";
import headerImage from "../../img/headerpicture.png";
import GoogleLogin from "react-google-login";
import { Fragment } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const YieldFarming = () => {
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

      <h1 className="nft-header">
        Discover, collect, and sell extraordinary NFTs on Decentralized NFT
        platforms
      </h1>
      <div className="nft">
        <div className="opensea">
          <a href="https://app.uniswap.org/#/swap">
            <img
              src={venusback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="opensea-logoo"
            ></img>
          </a>
        </div>
        <div className="rarible">
          <a href="https://pancakeswap.finance/">
            <img
              src={curveback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="flow">
          <a href="https://app.sushi.com/swap">
            <img
              src={sushiback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="chiliz">
          <a href="https://app.1inch.io/#/1/swap">
            <img
              src={bakeryback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="mana">
          <a href="https://mdex.com/#/">
            <img
              src={synback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>

        <div className="opensea">
          <a href="https://app.uniswap.org/#/swap">
            <img
              src={sunback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="rarible">
          <a href="https://pancakeswap.finance/">
            <img
              src={harvestback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="flow">
          <a href="https://app.sushi.com/swap">
            <img
              src={flamincoback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="chiliz">
          <a href="https://app.1inch.io/#/1/swap">
            <img
              src={dforce}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
        <div className="mana">
          <a href="https://mdex.com/#/">
            <img
              src={yearnback}
              style={{ width: "250px", height: "150px", borderRadius: "50px" }}
              alt="uni-logoo"
            ></img>
          </a>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default YieldFarming;
