import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../features/Transactions/AddSlice';

export const store = configureStore({
  reducer: {
    Transaction: counterSlice,
  },
});
