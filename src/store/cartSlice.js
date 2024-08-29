import { createSlice } from '@reduxjs/toolkit'; // Import createSlice từ thư viện '@reduxjs/toolkit'

const initialState = {
  listCart: JSON.parse(localStorage.getItem('cart')) || [], // Khởi tạo state ban đầu, lấy danh sách sản phẩm từ localStorage nếu có
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart)); // Lưu danh sách sản phẩm vào localStorage dưới dạng JSON
};

const cartSlice = createSlice({
  name: 'cart', // Tên của slice
  initialState, // State ban đầu
  reducers: {
    addCart: (state, action) => {
      // Thêm sản phẩm vào giỏ hàng
      const index = state.listCart.findIndex(
        (item) => item._id.$oid === action.payload._id.$oid,
      );

      if (index !== -1) {
        // Sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
        state.listCart[index].quantity += action.payload.quantity;
      } else {
        // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới
        state.listCart.push(action.payload);
      }
      saveCartToLocalStorage(state.listCart);
    },

    deleteCart: (state, action) => {
      state.listCart = state.listCart.filter(
        (item) => item._id.$oid !== action.payload,
      );

      saveCartToLocalStorage(state.listCart);
    },
    increaseQuantity: (state, action) => {
      const index = state.listCart.findIndex(
        (item) => item._id === action.payload,
      );
      if (index !== -1) {
        state.listCart[index].quantity += 1;
        saveCartToLocalStorage(state.listCart);
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.listCart.findIndex(
        (item) => item._id === action.payload,
      );
      if (index !== -1 && state.listCart[index].quantity > 1) {
        state.listCart[index].quantity -= 1;
        saveCartToLocalStorage(state.listCart);
      }
    },
  },
});

export const { addCart, deleteCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
