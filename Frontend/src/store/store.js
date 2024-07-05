//this store combines all the reducers and creates a store object that can be used in the application

import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlices';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
