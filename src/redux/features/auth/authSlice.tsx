import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import AuthAxios from "../../../core/api/request";
import { ILoginForm } from "../../../Interfaces";
import { RootState } from "../../store";


interface UserState  {
  user: string | null
  isError: boolean
  isSuccess: boolean
}

export const login = createAsyncThunk(
  "auth/login",
  async ({email, password}) => {
    try {
      const { data }= await AuthAxios.post("/user/log-in", {
        email,
        password,
      });
      return data.accessToken
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState: UserState = {
  user: null,
  isError: false,
  isSuccess: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    setLogout: (state, action: PayloadAction) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(state.user));
      });
  },
});

export const { setLogout, setUser } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
