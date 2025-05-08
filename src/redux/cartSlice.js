import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // ← вот это добавь
  customer: {
    name: '',
    surname: '',
    phone: '',
    address: ''
  },
  paymentMethod: ''
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },    
    increment: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    updateCustomer: (state, action) => {
      state.customer = { ...state.customer, ...action.payload };
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    }
  }
});

export const { addToCart } = cartSlice.actions;
export const { increment, decrement, removeItem, updateCustomer, setPaymentMethod } = cartSlice.actions;
export default cartSlice.reducer;
