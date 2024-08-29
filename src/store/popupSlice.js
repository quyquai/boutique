import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showPopup: false,
  product: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup: (state, action) => {
      state.showPopup = true;
      state.product = action.payload;
    },
    hidePopup: (state) => {
      state.showPopup = false;
      state.product = null;
    },
  },
});

// Export actions
export const { showPopup, hidePopup } = popupSlice.actions;

// Export reducer
export default popupSlice.reducer;
