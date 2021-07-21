import React from "react";
import "./PriceItem.css";

const PriceItem = ({
  key,
  rank,
  image,
  symbol,
  name,
  price,
  onedaychange,
  marketcap,
  volume,
  circsupply,
}) => {
  return (
    <>
      <tr>
        <td>{rank}</td>
        <td className="image-coin">
          <img
            src={image}
            alt="coin-pic"
            style={{ height: "35px", width: "35px" }}
          ></img>
        </td>
        <td>
          <b>{name}</b>
        </td>
        <td style={{ color: "rgb(88, 102, 126)" }}>{symbol.toUpperCase()}</td>
        <td>${price.toLocaleString()}</td>
        <td style={{ color: onedaychange < 0 ? "red" : "green" }}>
          {onedaychange.toFixed(2)}%
        </td>
        <td>${volume.toLocaleString()}</td>
        <td>${marketcap.toLocaleString()}</td>
        <td>{circsupply.toLocaleString()}</td>
      </tr>
    </>
  );
};

export default PriceItem;
