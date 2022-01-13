import PriceItem from "../PriceItem/PriceItem";
import "./PriceTable.css";
import { Fragment } from "react";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import headerImage from "../../img/headerpicture.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const PriceTable = () => {
  const [prices, setPrices] = useState([]);
  function responseGoogle(response) {
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.familyName);
    console.log(response.profileObj.givenName);
    console.log(response.profileObj.imageUrl);
  }

  const [searchCoins, setSearchCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(prices);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredCoins = prices.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((res) => {
        setPrices(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(searchCoins);
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
      <div>
        <form className="search-bar">
          <label htmlFor="searchBar"> Search: &nbsp;</label>
          <input
            type="text"
            id="searchBar"
            placeholder="Search coins"
            onChange={handleChange}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <h1 style={{ textAlign: "center", margin: "40px 60px 60px 60px" }}>
        Check out Prices and Market Data of Top 100 Crypto Currencies
      </h1>

      <table className="price-table">
        <tr>
          <th>Rank</th>
          <th>Coin Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>24H %</th>
          <th>Volume</th>
          <th>Market Cap</th>
          <th>Circulating Supply</th>
        </tr>
        {filteredCoins.map((price) => {
          return (
            <PriceItem
              id={price.id}
              rank={price.market_cap_rank}
              symbol={price.symbol}
              price={price.current_price}
              image={price.image}
              name={price.name}
              onedaychange={price.price_change_percentage_24h}
              marketcap={price.market_cap}
              volume={price.total_volume}
              circsupply={price.circulating_supply}
              totalsupply={price.max_supply}
            />
          );
        })}
      </table>
      <Footer />
    </Fragment>
  );
};

export default PriceTable;
