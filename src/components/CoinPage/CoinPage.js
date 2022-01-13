import React, { Fragment, useEffect, useState } from "react";
import "./CoinPage.css";
import headerImage from "../../img/headerpicture.png";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import axios from "axios";
import PortFolioModal from "../PortFolioModal/PortFolioModal";

export default function CoinPage({ match }) {
  function responseGoogle(response) {
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.familyName);
    console.log(response.profileObj.givenName);
    console.log(response.profileObj.imageUrl);
  }
  const [portButtonClicked, setPortButtonClicked] = useState(false);
  const [coinBasicInfo, setCoinBasicInfo] = useState({});
  const [coinLogoInfo, setCoinLogoInfo] = useState("");
  let coinID = coinBasicInfo.id;
  let coinName = coinBasicInfo.name;
  let coinSymbol = coinBasicInfo.symbol;
  let coinImage = coinBasicInfo.image;
  let coinHourChange = coinBasicInfo.hourChange;
  let coinDayChange = coinBasicInfo.dayChange;
  let coinWeekChange = coinBasicInfo.weekChange;
  let coinMonthChange = coinBasicInfo.monthChange;
  let coinYearChange = coinBasicInfo.yearChange;
  let coinAth = coinBasicInfo.ath;
  let coinAtl = coinBasicInfo.atl;
  let genesisDate = coinBasicInfo.genesisDate;
  let websiteUrl = coinBasicInfo.website;
  let twitter = coinBasicInfo.twitter;
  let telegram = coinBasicInfo.telegram;
  let coinForum = coinBasicInfo.forum;
  let coin24HHigh = coinBasicInfo.high24h;
  let coin24HLow = coinBasicInfo.low24h;
  let dilutedValuation = coinBasicInfo.fdilutedValuation;
  let totalVolume = coinBasicInfo.volume;
  let mCap = coinBasicInfo.mCap;
  let mCapChange = coinBasicInfo.mCapChange;
  let mCapChangePercentage = coinBasicInfo.mCapChangePercentage;

  // let coinPrice = coinBasicInfo.market_data.current_price;
  // let priceChange = coinBasicInfo.market_data.price_change_24h;

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${match.params.coin}`)
      .then((res) => {
        let { symbol, name, market_data, id, image, genesis_date, links } =
          res.data;

        setCoinBasicInfo((prev) => {
          return {
            symbol,
            name,
            currentPrice: market_data.current_price.usd,
            priceChange: market_data.price_change_24h,
            id,
            image: image.large,
            hourChange: market_data.price_change_percentage_1h_in_currency.usd,
            dayChange: market_data.price_change_percentage_24h,
            weekChange: market_data.price_change_percentage_7d,
            monthChange: market_data.price_change_percentage_30d,
            yearChange: market_data.price_change_percentage_1y,
            ath: market_data.ath.usd,
            atl: market_data.atl.usd,
            genesis_date,
            website: links.homepage[0],
            forum: links.official_forum_url[0],
            twitter: links.twitter_screen_name,
            telegram: links.telegram_channel_identifier,
            high24h: market_data.high_24h.usd,
            low24h: market_data.low_24h.usd,
            fdilutedValuation: market_data.fully_diluted_valuation.usd,
            volume: market_data.total_volume.usd,
            mCap: market_data.market_cap.usd,
            mCapChange: market_data.market_cap_change_24h,
            mCapChangePercentage: market_data.market_cap_change_percentage_24h,
          };
        });
      })
      .catch((error) => console.log(error));
  }, []);

  function rounder(aNumber) {
    let roundedNumber = aNumber.toFixed(2);
    return roundedNumber;
  }

  const buttonClickHandler = () => {
    setPortButtonClicked(true);
  };
  const closeButtonClickHandler = () => {
    setPortButtonClicked(false);
  };
  return (
    <Fragment>
      {portButtonClicked && (
        <PortFolioModal
          image={coinImage}
          name={coinName}
          price={coinBasicInfo.currentPrice}
          close={closeButtonClickHandler}
          id={coinID}
        />
      )}

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
      <div className="page-header">
        <h1>{coinName} Detailed Price Changes, Stats & Charts(soon) </h1>
      </div>

      <div className="coin-page">
        <div className="coin-logopic">
          <img
            src={coinImage}
            alt="coin-image-pic"
            style={{ borderRadius: "50%" }}
          ></img>
        </div>
        <div className="coin-name">
          <h3>{coinName}</h3>
        </div>
        <div className="coin-ticker">
          <h3>{coinSymbol}</h3>
        </div>
        <div className="coin-current-price-large">
          <h1>${coinBasicInfo.currentPrice}</h1>
        </div>
        <div className="portfolio-button">
          <button onClick={buttonClickHandler}>
            <b style={{ fontSize: "21px", marginTop: "-50px" }}>+</b> &nbsp;Add{" "}
            {coinName}
          </button>
        </div>
      </div>

      <div className="data-container">
        <div className="price-stats">
          <div className="coin-current-price">
            <h3>
              Price: <b>${coinBasicInfo.currentPrice}</b>
            </h3>
          </div>

          <div className="price-changes">
            <h3
              style={{ color: coinBasicInfo.priceChange < 0 ? "red" : "green" }}
            >
              Price Change 24H: <b>${coinBasicInfo.priceChange}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3 style={{ color: coinHourChange < 0 ? "red" : "green" }}>
              1H Change: <b>{coinHourChange}%</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3 style={{ color: coinDayChange < 0 ? "red" : "green" }}>
              24H Change: <b>{coinDayChange}%</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3
              style={{
                color: coinWeekChange < 0 ? "red" : "green",
              }}
            >
              7D Change: <b>{coinWeekChange}%</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3
              style={{
                color: coinMonthChange < 0 ? "red" : "green",
              }}
            >
              1M Change: <b>{coinMonthChange}%</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3
              style={{
                color: coinYearChange < 0 ? "red" : "green",
              }}
            >
              1Y Change: <b>{coinYearChange}%</b>
            </h3>
          </div>
        </div>
        <div className="vl"></div>
        <div className="coin-volume-mcap-data">
          <div className="price-change-percentages">
            <h3>
              High 24H: <b>${coin24HHigh}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3>
              Low 24H: <b>${coin24HLow}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3>
              Fully Diluted Valuation: <b>${dilutedValuation}</b>
            </h3>
          </div>
          <div className="coin-current-price">
            <h3>
              Volume 24H: <b>${totalVolume}</b>
            </h3>
          </div>

          <div className="price-changes">
            <h3>
              MarketCap: <b>${mCap}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3>
              MarketCap Change 24H: <b>${mCapChange}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3>
              MarketCap Change% 24H: <b>{mCapChangePercentage}%</b>
            </h3>
          </div>
        </div>
        <div className="vl"></div>

        <div className="coin-general-data">
          <div className="coin-current-price">
            <h3>
              All Time High Price: <b>${coinAth}</b>
            </h3>
          </div>

          <div className="price-changes">
            <h3>
              All Time Low Price: <b>${coinAtl}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3>
              Genesis Date: <b>{genesisDate}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3>
              Website: <b>{websiteUrl}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3>
              Official Forum: <b>{coinForum}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3>
              Twitter: <b>{twitter}</b>
            </h3>
          </div>
          <div className="price-change-percentages">
            <h3>
              Telegram: <b>{telegram}</b>
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
