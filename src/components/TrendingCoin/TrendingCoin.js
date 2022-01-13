import React from "react";
import "./TrendingCoin.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toArray } from "lodash";
import { BottomNavigationAction } from "@material-ui/core";

export default function TrendingCoin({
  id,
  name,
  ticker,
  rank,
  price,
  image,
  trendingRank,
}) {
  const rounderFunc = (genericVariable) => {
    return genericVariable.toFixed(7);
  };
  const [btcPrice, setbtcPrice] = useState(0);
  let realPrice = btcPrice.priceRequired;
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd "
      )
      .then((res) => {
        let { bitcoin } = res.data;

        setbtcPrice((prev) => {
          return {
            priceRequired: bitcoin.usd,
          };
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <tr className="trending-coin-row">
      <td>{trendingRank + 1}</td>
      <td>{rank}</td>
      <td>
        <img
          src={image}
          alt="trending-coin-logo"
          style={{ borderRadius: "50%", height: "30px", width: "30px" }}
        />
      </td>
      <td>
        <b>{name}</b>
      </td>
      <td style={{ color: "rgb(88, 102, 126)" }}>{ticker}</td>
      <td>
        ${rounderFunc(price * realPrice)}
        {/* {btcArray.map((price) => {
          return price.usd;
        })} */}
      </td>
    </tr>
  );
}
