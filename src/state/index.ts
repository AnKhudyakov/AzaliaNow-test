import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../pages/index";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  count: number;
};

const initialState = {
  cart: [] as Array<Item>,
  favoriveProducts: [] as Array<Item>,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.cart = [...state.cart, action.payload];

      console.log("STATE", current(state));
    },

    setFavoriteProducts: (state, action: PayloadAction<Item>) => {
      state.favoriveProducts = [...state.favoriveProducts, action.payload];
      console.log("STATE", current(state));
    },

    removeFavotiteProducts: (state, action: PayloadAction<Item>) => {
      state.favoriveProducts = state.favoriveProducts.filter((item) => item.id !== action.payload.id);
      console.log("STATE", current(state));
    },

    increaseCount: (state, action: PayloadAction<Item>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count = item.count + action.payload.count;
        }
        return item;
      });
      console.log("STATE", current(state));
    },
  },
});

export const { addToCart, setFavoriteProducts,removeFavotiteProducts,increaseCount } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;
export const selectProducts = (state: RootState) => state.cart.favoriveProducts;

export default cartSlice.reducer;
