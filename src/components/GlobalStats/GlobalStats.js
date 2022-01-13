import React from "react";
import "./GlobalStats.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toArray } from "lodash";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import headerImage from "../../img/headerpicture.png";
import Footer from "../Footer/Footer";

export default function GlobalStats() {
  function responseGoogle(response) {
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.familyName);
    console.log(response.profileObj.givenName);
    console.log(response.profileObj.imageUrl);
  }
  const [globalData, setGlobalData] = useState();
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => {
        setGlobalData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(globalData);
  const arrayData = toArray(globalData);

  function convert(timeStamp) {
    var date = new Date(timeStamp * 1000);
    return date;
  }

  function fixedConverter(value) {
    var convertedData = value.toFixed(2);
    return convertedData;
  }
  return (
    <React.Fragment>
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

      <h1>Global Crypto Currency Data and Stats</h1>
      {arrayData.map((item) => {
        return (
          <div className="global-stats">
            <div className="stats">
              <h2> Global Crypto Stats</h2>
              <div className="coin-logo">
                <p>
                  Total Active Crypto Currencies: &nbsp;
                  <b>{item.active_cryptocurrencies}</b>
                </p>
              </div>
              <div className="coin-logo">
                <p>
                  Total Crypto Market Cap:
                  <b> ${item.total_market_cap.usd.toLocaleString()}</b>
                </p>
              </div>
              <div className="coin-logo">
                <p>
                  Total Crypto Market Volume:{" "}
                  <b>${item.total_volume.usd.toLocaleString()}</b>
                </p>
              </div>
              <div className="coin-logo">
                <p>
                  Total Crypto MarketCap 24H Change:{" "}
                  <b>{item.market_cap_change_percentage_24h_usd.toFixed(2)}%</b>
                </p>
              </div>
              <div className="coin-name">
                <p>
                  Total Crypto Markets: <b>{item.markets}</b>
                </p>
              </div>
            </div>
            <div className="price-dominance-stats">
              <h2> Dominance Stats</h2>

              <div className="coin-market-cap">
                <p>
                  BTC Price: {"$"}
                  <b>
                    {convert(item.total_market_cap.usd) /
                      convert(item.total_market_cap.btc)}
                  </b>
                </p>
              </div>

              <div className="coin-market-cap">
                <p>
                  ETH Price: $
                  <b>
                    {item.total_market_cap.usd.toFixed(2) /
                      item.total_market_cap.eth.toFixed(2)}
                  </b>
                </p>
              </div>

              <div className="coin-market-cap">
                <p>
                  BTC Dominance:{" "}
                  <b>{item.market_cap_percentage.btc.toFixed(2)}%</b>
                </p>
              </div>

              <div className="coin-volume">
                <p>
                  ETH Dominance:{" "}
                  <b>{item.market_cap_percentage.eth.toFixed(2)}%</b>
                </p>
              </div>
              <div className="coin-mcap-percent">
                <p>
                  USDT Dominance:{" "}
                  <b>{item.market_cap_percentage.usdt.toFixed(2)}%</b>
                </p>
              </div>
            </div>

            <div className="ico-stats">
              <div className="ico-header">
                <h2> Global ICO Stats</h2>
              </div>

              <div className="coin-ticker">
                <p>
                  Total ICOs Ongoing: <b>{item.ongoing_icos}</b>
                </p>
              </div>
              <div className="coin-ticker">
                <p>
                  Total ICOs till date: <b>{item.ended_icos}</b>
                </p>
              </div>
            </div>
            <div className="last-updated">
              <p>
                Data last updated on :{" "}
                <b>
                  {convert(item.updated_at).toLocaleDateString("en-US")} &nbsp;
                  {convert(item.updated_at).toLocaleTimeString("en-US")}
                </b>
              </p>
            </div>
          </div>
        );
      })}
      <Footer />
    </React.Fragment>
  );
}
