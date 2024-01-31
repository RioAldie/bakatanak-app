'use client';
import { configureStore } from '@reduxjs/toolkit';
import consultReducer from './slice';

const store = configureStore({
  reducer: {
    consult: consultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
