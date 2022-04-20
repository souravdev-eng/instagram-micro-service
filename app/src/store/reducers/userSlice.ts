import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserProps {
  email: string;
  fullName: string;
  userName: string;
  password: string;
}

export const createNewUser = createAsyncThunk(
  "post/user-signup",
  async ({ email, fullName, password, userName }: UserProps) => {
    const response = await axios.post(
      "http://instagram.dev/api/auth/signup",
      { email, fullName, userName, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  }
);

interface INITIAL_STATE_PROPS {
  user: any;
  loading: boolean;
  error: string | null | undefined;
}

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
} as INITIAL_STATE_PROPS;

export const userSlice = createSlice({
  name: "user-details",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createNewUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(createNewUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
