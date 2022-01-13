import React from "react";
import "./Exchange.css";

export default function Exchange({
  rank,
  image,
  name,
  country,
  year,
  trustscore,
  tradingvolume,
}) {
  return (
    <tr className="exchange-row">
      <td>{rank}</td>
      <td>
        <img
          src={image}
          alt="exchange-logo"
          style={{ borderRadius: "50%", height: "30px", width: "30px" }}
        />
      </td>
      <td>
        <b>{name}</b>
      </td>

      <td>{country}</td>
      <td>{year}</td>
      <td>
        <b>{trustscore}</b>
      </td>
      <td>{tradingvolume.toFixed(2)} BTC</td>
    </tr>
  );
}
