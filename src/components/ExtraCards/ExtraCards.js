import "./ExtraCards.css";
import Venus from "../../img/venus.png";
import Yfi from "../../img/yfi.png";
import Curve from "../../img/curve.png";
import Suship from "../../img/sushi_p.png";
import Snx from "../../img/snx.png";
import Karura from "../../img/karura.svg";
import MoonRiver from "../../img/moonriver.png";
import Khala from "../../img/khala.png";
import Shiden from "../../img/shiden.png";
import Bifrost from "../../img/bifrost.png";
const ExtraCards = () => {
  return (
    <>
      <div className="extra-cards">
        <div className="yield-farming">
          <h1>
            Check out Yield Farming Protocols on Ethereum and BSC Networks
          </h1>
          <h3>
            Farm & Stake your tokens on the Yield Farming Protocols and earn
            attractive APY on your investment
          </h3>
          <div className="yield-farming-logos">
            <img
              src={Yfi}
              alt="yearn-finance"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Curve}
              alt="curve"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Venus}
              alt="venus"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Suship}
              alt="suship"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Snx}
              alt="snx"
              style={{ height: "35px", width: "35px" }}
            ></img>
          </div>
        </div>
        <div className="kusama-parachain-auction">
          <h1>Checkout Parachain Auctions on Kusama & PolkaDot Networks </h1>
          <h3>
            Track the Parachain Auction progress on Kusama & PolkaDot Networks.
            Stake your $KSM and contribute to the projects
          </h3>
          <div className="parachain-logos">
            <img
              src={Karura}
              alt="karura"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={MoonRiver}
              alt="moonriver"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Khala}
              alt="khala"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Shiden}
              alt="shiden"
              style={{ height: "35px", width: "35px" }}
            ></img>
            <img
              src={Bifrost}
              alt="bifrost"
              style={{ height: "35px", width: "35px" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraCards;
