import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'Transaction',
  initialState: [],
  reducers: {
    Addtransaction: (state, action) => {
      state.push(action.payload);
      // state.transactions.push({
      //   id: action.payload,
      //   text: action.payload,
      //   num: action.payload,
      // });
    },
    del: (state, action) => state.filter(t => t.id !== action.payload),
    zero: (state, action) => {
      state.pop(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {Currency, Balance, del, Addtransaction, zero} =
  counterSlice.actions;

export default counterSlice.reducer;
