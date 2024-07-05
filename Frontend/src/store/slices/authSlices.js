import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
});

export const { loginSuccess, logout, setCurrentUser } = authSlice.actions;
export default authSlice.reducer ;
