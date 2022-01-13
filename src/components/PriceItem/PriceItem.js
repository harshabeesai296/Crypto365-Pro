import "./PriceItem.css";
import { Fragment } from "react";
import * as React from "react";
import { Link } from "react-router-dom";

const PriceItem = ({
  id,
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
    <Fragment>
      <tr className="price-item-row">
        <td>{rank}</td>
        <td className="image-coin">
          <img
            src={image}
            alt="coin-pic"
            style={{ height: "35px", width: "35px" }}
          ></img>
        </td>
        <td className="coin-data-link">
          <b>
            <Link to={`/coin-data/${id.toLowerCase()}`}>{name}</Link>
          </b>
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
    </Fragment>
  );
};

export default PriceItem;
