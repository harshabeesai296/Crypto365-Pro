import "./Header.css";
import headerImage from "../../img/header-pic.png";

const Header = () => {
  return (
    <>
      <div className="header-main">
        <div className="header-logo">
          <img
            src={headerImage}
            style={{ height: "90px", width: "400px" }}
            alt="crypto-365-logo"
          ></img>
        </div>

        <div className="header-login">
          <button>Login</button>
        </div>

        <div className="header-signup">
          <button> Sign Up</button>
        </div>
      </div>
      <hr className="line" />
    </>
  );
};

export default Header;
