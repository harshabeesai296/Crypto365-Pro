import "./Top5Items.css";

const Top5Items = ({
  key,
  image,
  name,
  symbol,
  price,
  daychange,
  volume,
  marketcap,
}) => {
  console.log(name);
  return (
    <div className="crypto-1">
      <div className="image-ticker">
        <img
          src={image}
          alt="Crypto_Logo"
          style={{ height: "35px", width: "35px" }}
        ></img>
        <p>
          <b>{name}</b>
        </p>
        <p style={{ color: "rgb(88, 102, 126)" }}>{symbol.toUpperCase()}</p>
      </div>

      <div className="price-pricechanges">
        <p>
          <b>Price:</b> ${price.toLocaleString()}
        </p>
        <div>
          <span>
            <b>24H Change: </b>
          </span>
          <span style={{ color: daychange < 0 ? "red" : "green" }}>
            {daychange.toFixed(2)} %
          </span>
        </div>
        <p>
          <b>Volume:</b> ${volume.toLocaleString()}
        </p>
        <p className="marketcapitem">
          <b>Market Cap:</b> ${marketcap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Top5Items;
