export const coinFetcher = async (url, coinsTrendSetter) => {
  let coinsInfo;

  try {
    let coinApiResonse = await fetch(url);

    if (!coinApiResonse.ok) {
      throw new Error("Invalid api call");
    }

    let coinResoponseData = await coinApiResonse.json();

    coinsInfo = coinResoponseData.coins;
  } catch (err) {
    console.log(err, err.message);
  }

  coinsTrendSetter((prev) => coinsInfo);
};
