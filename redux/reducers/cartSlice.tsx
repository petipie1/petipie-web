import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  items: any;
  promoCode: any;
  hasPromo: any;
  discount: any;
  notes?: string;
  lastOrderTime?: string;
  lastWaiterTime?: string;
}

const initialState: CartState = {
  items: {},
  promoCode: "",
  hasPromo: false,
  discount: 0,
  notes: "",
  lastOrderTime: "",
  lastWaiterTime: ""
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const item = action.payload;
      state.items[item.id] = { ...item, quantity: 1 };
    },
    updateCartItemQuantity: (state, action) => {
      const { product, quantity } = action.payload;

      if (quantity === 0) {
        delete state.items[product.id];
      }
      else if (!state.items[product.id]) {
        state.items[product.id] = { ...product, quantity: 1 };
      }
      else {
        state.items[product.id] = { ...product, quantity };
      }
    },
    updateCartNote: (state, action) => {
      const { note } = action.payload;
      state.notes = note;
    },
    clearCart: (state, action) => {
      state.items = {};
      state.promoCode = "";
      state.hasPromo = false;
      state.discount = 0;
      state.notes = "";
      state.lastOrderTime = action.payload ? "" : new Date().toISOString();
    },

    updateWaiterTime: (state) => {
      state.lastWaiterTime = new Date().toISOString();
    }
  },
});

export const { addProductToCart, updateCartItemQuantity,
  updateCartNote, clearCart, updateWaiterTime } = cartSlice.actions;

export default cartSlice.reducer;