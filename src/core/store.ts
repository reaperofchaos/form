import { configureStore } from "@reduxjs/toolkit";
import core from './reducers/core.reducers'

const store = configureStore({
    reducer: {
      core,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(),
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;