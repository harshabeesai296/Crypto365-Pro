import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TrendingCoin from "../TrendingCoin/TrendingCoin";
import "./TrendingCoins.css";
import { Link } from "react-router-dom";
import headerImage from "../../img/headerpicture.png";
import GoogleLogin from "react-google-login";
import Footer from "../Footer/Footer";

// helper api function
import { coinFetcher } from "./apiFetcher";

export default function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const callHelper = async () => {
      await coinFetcher(
        "https://api.coingecko.com/api/v3/search/trending",
        setTrendingCoins
      );
    };

    callHelper();
  }, []);

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

      <h1>Top 7 Trending Coins in last 24 hours</h1>
      <table className="trending-table">
        <tr>
          <th>Trending Rank</th>
          <th>Market Cap Rank</th>
          <th>Coin Logo</th>
          <th>Coin Name</th>
          <th>Symbol</th>
          <th>Price</th>
        </tr>

        {trendingCoins.map((coinInfo) => {
          return (
            <TrendingCoin
              id={coinInfo.item.id}
              name={coinInfo.item.name}
              ticker={coinInfo.item.symbol}
              rank={coinInfo.item.market_cap_rank}
              image={coinInfo.item.small}
              price={coinInfo.item.price_btc}
              trendingRank={coinInfo.item.score}
            />
          );
        })}
      </table>
      <Footer />
    </Fragment>
  );
}
