'use client';
import { configureStore } from '@reduxjs/toolkit';
import consultReducer from './slice';
import resultReducer from './result/slice';

const store = configureStore({
  reducer: {
    consult: consultReducer,
    result: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
