import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
export const createStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};
export type AppStore=ReturnType<typeof createStore>;
export type RootState=ReturnType<AppStore['getState']>;
export type AppDispatch=AppStore['dispatch'];