import Header from "./components/Header/Header";
import TopFiveCrypto from "./components/TopFiveCrypto/TopFiveCrypto";
import { React, Fragment, useState } from "react";
import MainCards from "./components/MainCards/MainCards";
import ExtraCards from "./components/ExtraCards/ExtraCards";
import UniSwap from "./components/UniSwap/UniSwap";
import { useEffect } from "react";
import axios from "axios";
import PriceTable from "./components/PriceTable/PriceTable";

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [priceData, setPriceData] = useState([]);
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
      )
      .then((res) => {
        setPriceData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setPrices(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Fragment>
      <Header />
      <TopFiveCrypto pricedata={priceData} />
      <MainCards />
      <ExtraCards />
      <PriceTable prices={prices} />
      <UniSwap />
    </Fragment>
  );
}

export default App;
