import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Exchange from "../Exchange/Exchange";
import "./Exchanges.css";
import { Link } from "react-router-dom";
import headerImage from "../../img/headerpicture.png";
import GoogleLogin from "react-google-login";
import Footer from "../Footer/Footer";

export default function Exchanges() {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges")
      .then((res) => {
        setExchanges(res.data);
      })
      .catch((error) => console.log(error));
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

      <h1>Crypto Currency Exchanges WorldWide Data </h1>
      <table className="exchange-table">
        <tr>
          <th>Exchange Rank</th>
          <th>Exchange Logo</th>
          <th>Exchange Name</th>
          <th>Country</th>
          <th>Established Year</th>
          <th>Trust Score</th>
          <th>Trading Volume 24H</th>
        </tr>

        {exchanges.map((exchInfo) => {
          return (
            <Exchange
              rank={exchInfo.trust_score_rank}
              image={exchInfo.image}
              name={exchInfo.name}
              country={exchInfo.country}
              year={exchInfo.year_established}
              trustscore={exchInfo.trust_score}
              tradingvolume={exchInfo.trade_volume_24h_btc}
            />
          );
        })}
      </table>
      <Footer />
    </Fragment>
  );
}
