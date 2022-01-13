import React from "react";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { portfolioActions } from "../store/portfolio";
import "./Portfolio.css";

export default function Portfolio() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const coinID = "coinID";
  const coinName = "coinName";
  const coinPrice = "coinPrice";
  const coinImage = "coinImage";
  const coinQuantity = "coinQuantity";

  const exportPortfolio = [
    {
      coin: {
        coinID: "",
        coinName: "",
        coinPrice: 0,
        coinImage: "",
        coinQuantity: 0,
      },
    },
  ];
  console.log(exportPortfolio[0].coin.coinPrice);
  const addCoinHandler = () => {
    dispatch(portfolioActions.addCoin(10));
  };
  const removeCoinHandler = () => {
    dispatch(portfolioActions.deleteCoin(10));
  };

  return (
    <div className="portfolio-header">
      <h1> User's Portfolio</h1>
      <div className="portfolio-buttons">
        <div className="coin-id">
          <button type="submit" onClick={addCoinHandler}>
            Add to Portfolio
          </button>
        </div>
        <div className="coin-quantity">
          <button type="submit" onClick={removeCoinHandler}>
            Remove from Portfolio
          </button>
        </div>
      </div>
      <ul>
        {state.map((newCoin) => {
          return (
            <li>
              Coin ID: {newCoin.coin.coinID} Quantity:
              {newCoin.coin.coinQuantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
