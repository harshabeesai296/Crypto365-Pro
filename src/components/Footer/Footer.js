import React from "react";
import headerImage from "../../img/headerpicture.png";

import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <hr />
      <div className="footer-container">
        <img
          src={headerImage}
          alt="crypto-365"
          style={{ height: "200px", width: "400px" }}
        />
        <div className="sub-footer-container">
          <h3>
            <b>Crypto 365 Socials</b>
          </h3>
          <h3>Facebook</h3>
          <h3>Instagram</h3>
          <h3>Snapchat</h3>
          <h3>Twitter</h3>
          <h3>Telegram</h3>
        </div>
        <div className="sub-footer-container">
          <h3>
            <b>Important Links</b>
          </h3>
          <h3>Crypto Currency Prices</h3>
          <h3>NFT Collections</h3>
          <h3>Yield Farming</h3>
          <h3>DEX Swap</h3>
          <h3>Parachain Auctions</h3>
        </div>
        <div className="sub-footer-container">
          <h3>
            <b>Crypto 365</b>
          </h3>
          <h3>Founder & Co-Founders</h3>
          <h3>Developers</h3>
          <h3>About Us</h3>
          <h3>Contact Us</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
