import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthAxios from "../../../core/api/request";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await AuthAxios.post("/user/log-in", {
        email,
        password,
      });
      return data.accessToken;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
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
      .addCase(login.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(state.user));
      });
  },
});

export const { setLogout, setUser } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;
