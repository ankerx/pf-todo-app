import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
const reducer = {
  auth: authReducer,
};
export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
