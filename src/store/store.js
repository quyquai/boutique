import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import chatSlice from './chatSlice';

const store = configureStore({
  reducer: {
    popup: popupReducer,
    user: userReducer,
    cart: cartReducer,
    chat: chatSlice,
  },
});

export default store;
