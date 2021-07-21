import React from "react";
import PriceItem from "../PriceItem/PriceItem";
import "./PriceTable.css";

const PriceTable = ({ prices }) => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "60px 60px 60px 60px" }}>
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
        {prices.map((price) => {
          return (
            <PriceItem
              key={price.id}
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
    </>
  );
};

export default PriceTable;
