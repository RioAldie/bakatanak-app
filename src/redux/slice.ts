'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConsultState {
  value: Array<object>;
}

const initialState: ConsultState = {
  value: [
    {
      code: 'C01',
      value: 0,
    },
    {
      code: 'C02',
      value: 0,
    },
    {
      code: 'C03',
      value: 0,
    },
    {
      code: 'C04',
      value: 0,
    },
    {
      code: 'C05',
      value: 0,
    },
    {
      code: 'C06',
      value: 0,
    },
    {
      code: 'C07',
      value: 0,
    },
    {
      code: 'C08',
      value: 0,
    },
    {
      code: 'C09',
      value: 0,
    },
    {
      code: 'C10',
      value: 0,
    },

    {
      code: 'C11',
      value: 0,
    },
    {
      code: 'C12',
      value: 0,
    },
    {
      code: 'C13',
      value: 0,
    },
    {
      code: 'C14',
      value: 0,
    },
    {
      code: 'C15',
      value: 0,
    },
    {
      code: 'C16',
      value: 0,
    },
    {
      code: 'C17',
      value: 0,
    },
    {
      code: 'C18',
      value: 0,
    },
    {
      code: 'C19',
      value: 0,
    },
    {
      code: 'C20',
      value: 0,
    },
  ],
};

const consultSlice = createSlice({
  name: 'consult',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { set } = consultSlice.actions;
export default consultSlice.reducer;
