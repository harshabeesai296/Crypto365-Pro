import Header from "./components/Header/Header";
import PriceTable from "./components/PriceTable/PriceTable";
import Dex from "./components/Dex/Dex";
import * as React from "react";
import ParachainAuction from "./components/ParachainAuction/ParachainAuction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nft from "./components/Nft/Nft";
import YieldFarming from "./components/YieldFarming/YieldFarming";
import TrendingCoins from "./components/TrendingCoins/TrendingCoins";
import CoinPage from "./components/CoinPage/CoinPage";
import GlobalStats from "./components/GlobalStats/GlobalStats";
import Exchanges from "./components/Exchanges/Exchanges";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Header}></Route>
        <Route path="/check-crypto-prices" exact component={PriceTable}></Route>
        <Route path="/parachain-auctions" component={ParachainAuction}></Route>
        <Route path="/dex-swap" component={Dex}></Route>
        <Route path="/nft-collections" component={Nft}></Route>
        <Route path="/yield-farming" component={YieldFarming}></Route>
        <Route path="/trending-coins" component={TrendingCoins}></Route>
        <Route path="/global-stats" component={GlobalStats}></Route>
        <Route path="/exchanges" component={Exchanges}></Route>
        <Route path="/coin-data/:coin" exact component={CoinPage}></Route>
        <Route path="/user-portfolio" component={Portfolio}></Route>
      </Switch>
    </Router>
  );
}

export default App;
