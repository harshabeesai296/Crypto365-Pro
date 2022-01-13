import { createSlice } from "@reduxjs/toolkit";

const initialPortfolio = [
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

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: initialPortfolio,
  reducers: {
    addCoin(state, action) {
      state[0].coin.coinQuantity = state[0].coin.coinQuantity + action.payload;
    },

    deleteCoin(state, action) {
      state[0].coin.coinQuantity = state[0].coin.coinQuantity - action.payload;
    },
  },
});

export const portfolioActions = portfolioSlice.actions;
export default portfolioSlice.reducer;
