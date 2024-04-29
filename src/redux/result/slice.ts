'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ResultState {
  value: object;
}

const initialState: ResultState = {
  value: {},
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<object>) => {
      state.value = action.payload;
    },
  },
});

export const { setResult } = resultSlice.actions;
export default resultSlice.reducer;
