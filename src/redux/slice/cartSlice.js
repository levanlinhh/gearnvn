import { createSlice } from "@reduxjs/toolkit";

const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cart") !== "undefined"
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

  return cartInfo ? cartInfo : [];
};

const initialState = {
  cartItem: fetchCart().cartItem || [],
  totalAmount: fetchCart().length !== 0 ? fetchCart().totalAmount : 0,
  totalQuantity: fetchCart().length !== 0 ? fetchCart().totalQuantity : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const isItem = state.cartItem.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      if (!isItem) {
        state.cartItem.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        isItem.quantity++;
        isItem.totalPrice = Number(newItem.price) + Number(isItem.totalPrice);
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decreaseItem: (state, action) => {
      const id = action.payload;
      state.totalQuantity--;
      state.cartItem.find((item) => item.id === id).quantity--;
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
      state.totalQuantity = state.cartItem.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteAll: (state, action) => {
      state.cartItem = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
