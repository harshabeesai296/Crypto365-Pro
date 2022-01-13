import "./ParaChain.css";
import * as React from "react";
import Karura from "../../img/karura.svg";
import Moonriver from "../../img/moonriver.png";
import Shiden from "../../img/shiden.png";
import Khala from "../../img/khala.png";
import Bifrost from "../../img/bifrost.png";
import Inprogress from "../../img/in-progress-icon.jpeg";
import headerImage from "../../img/headerpicture.png";
import { Fragment } from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const ParachainAuction = () => {
  function responseGoogle(response) {
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.familyName);
    console.log(response.profileObj.givenName);
    console.log(response.profileObj.imageUrl);
  }
  return (
    <React.Fragment>
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

      <h1 className="auction-header">Kusama PLO Parachain Slot Auctions</h1>
      <h3 className="auction-p">
        For a parachain to be added to Polkadot it must inhabit one of the
        available parachain slots. A parachain slot is a scarce resource on
        Polkadot and only a limited number will be available. As parachains ramp
        up there may only be a few slots that are unlocked every few months.
        <p>
          The goal is to eventually have 100 parachain slots available on
          Polkadot (these will be split between parachains and the parathread
          pool).The parachain slots will be sold according to an unpermissioned
          candle auction that has been slightly modified to be secure on a
          blockchain.
        </p>
      </h3>
      <table className="auction-table">
        <tr className="auction-item-row">
          <td>
            <label htmlFor="a1-slider" className="auction-label">
              <b>Auction 1 Progress</b>
            </label>
          </td>
          <td>
            <input
              type="range"
              min="1"
              max="100"
              value="100"
              class="auction-slider"
              id="a1-slider"
            />
          </td>
          <td>
            <p>Winner: </p>
          </td>
          <td>
            <img
              src={Karura}
              style={{ height: "35px", width: "35px" }}
              alt="karura-logo"
            />
          </td>
          <td>
            <p>
              <b>Karura</b>{" "}
            </p>
          </td>
        </tr>
        <tr className="auction-item-row">
          <td>
            <label htmlFor="a1-slider" className="auction-label">
              <b>Auction 2 Progress</b>
            </label>
          </td>
          <td>
            <input
              type="range"
              min="1"
              max="100"
              value="100"
              class="auction-slider"
              id="a1-slider"
            />
          </td>
          <td>
            <p>Winner: </p>
          </td>
          <td>
            <img
              src={Moonriver}
              style={{ height: "35px", width: "35px" }}
              alt="karura-logo"
            />
          </td>
          <td>
            <p>
              <b>Moonriver</b>
            </p>
          </td>
        </tr>
        <tr className="auction-item-row">
          <td>
            <label htmlFor="a1-slider" className="auction-label">
              <b>Auction 3 Progress</b>
            </label>
          </td>
          <td>
            <input
              type="range"
              min="1"
              max="100"
              value="100"
              class="auction-slider"
              id="a1-slider"
            />
          </td>
          <td>
            <p>Winner: </p>
          </td>
          <td>
            <img
              src={Shiden}
              style={{ height: "35px", width: "35px" }}
              alt="karura-logo"
            />
          </td>
          <td>
            <p>
              <b>Shiden Network</b>
            </p>
          </td>
        </tr>
        <tr className="auction-item-row">
          <td>
            <label htmlFor="a1-slider" className="auction-label">
              <b>Auction 4 Progress</b>
            </label>
          </td>
          <td>
            <input
              type="range"
              min="1"
              max="100"
              value="100"
              class="auction-slider"
              id="a1-slider"
            />
          </td>
          <td>
            <p>Winner: </p>
          </td>
          <td>
            <img
              src={Khala}
              style={{ height: "35px", width: "35px" }}
              alt="karura-logo"
            />
          </td>
          <td>
            <p>
              <b>Khala Network</b>{" "}
            </p>
          </td>
        </tr>
        <tr className="auction-item-row">
          <td>
            <label htmlFor="a1-slider" className="auction-label">
              <b>Auction 5 Progress</b>
            </label>
          </td>
          <td>
            <input
              type="range"
              min="1"
              max="100"
              value="100"
              class="auction-slider"
              id="a1-slider"
            />
          </td>
          <td>
            <p>Winner: </p>
          </td>
          <td>
            <img
              src={Bifrost}
              style={{ height: "35px", width: "35px" }}
              alt="karura-logo"
            />
          </td>
          <td>
            <p>
              <b>BiFrost</b>
            </p>
          </td>
        </tr>
        <tr className="auction-item-row">
          <td>
            <label htmlFor="a1-slider" className="auction-label">
              <b>Auction 6 Progress</b>
            </label>
          </td>
          <td>
            <input
              type="range"
              min="1"
              max="100"
              value="0"
              class="auction-slider"
              id="a1-slider"
            />
          </td>
          <td>
            <p>Winner: </p>
          </td>
          <td>
            <img
              src={Inprogress}
              style={{ height: "35px", width: "35px" }}
              alt="karura-logo"
            />
          </td>
          <td>
            <p>
              <b>Auction In Progress</b>
            </p>
          </td>
        </tr>
      </table>

      <Footer />
    </React.Fragment>
  );
};

export default ParachainAuction;
