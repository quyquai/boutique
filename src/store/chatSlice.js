import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChatVisible: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    toggleChatVisibility(state) {
      state.isChatVisible = !state.isChatVisible;
    },
  },
});

export const { toggleChatVisibility } = chatSlice.actions;
export default chatSlice.reducer;
