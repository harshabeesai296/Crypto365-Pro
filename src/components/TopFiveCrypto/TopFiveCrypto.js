import "./TopFiveCrypto.css";
import Top5Items from "../Top5Items/Top5Items";

const TopFiveCrypto = ({ pricedata }) => {
  console.log(pricedata);
  return (
    <>
      <h1 className="top5-heading">Top 5 Crypto Currencies by Market Cap</h1>
      <div className="top-5-crypto">
        {pricedata.map((data) => {
          return (
            <Top5Items
              key={data.id}
              name={data.name}
              image={data.image}
              symbol={data.symbol}
              price={data.current_price}
              daychange={data.price_change_percentage_24h}
              volume={data.total_volume}
              marketcap={data.market_cap}
            />
          );
        })}
      </div>
    </>
  );
};

export default TopFiveCrypto;
