import { createSlice } from '@reduxjs/toolkit';
import { getAuthToken } from '../util/auth';

const token = getAuthToken();

const initialState = {
  user: JSON.parse(token),
  isLoggedIn: !!JSON.parse(token),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    onLogout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { onLogin, onLogout } = userSlice.actions;
export default userSlice.reducer;
