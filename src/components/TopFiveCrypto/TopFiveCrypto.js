import "./TopFiveCrypto.css";
import Top5Items from "../Top5Items/Top5Items";
import { Fragment } from "react";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TopFiveCrypto = () => {
  const [priceData, setPriceData] = useState([]);
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

  console.log(priceData);
  return (
    <Fragment>
      <h1 className="top5-heading">Top 5 Crypto Currencies by Market Cap</h1>
      <div className="top-5-crypto">
        {priceData.map((data) => {
          return (
            <Top5Items
              key={data.id}
              name={data.name}
              image={data.image}
              symbol={data.symbol}
              price={data.current_price}
              daychange={data.price_change_percentage_24h}
              volume={data.total_volume}
              marketcap={data.market_cap}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default TopFiveCrypto;
