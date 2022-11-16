import { createSlice } from "@reduxjs/toolkit";

const fetchAuth = () => {
  const user =
    localStorage.getItem("profile") !== "undefined"
      ? JSON.parse(localStorage.getItem("profile"))
      : null;

  return user ? user : null;
};

const initialState = {
  authData: fetchAuth(),
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTH_START: (state, action) => {
      state.loading = true;
    },

    AUTH_SUCCESS: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.authData = action.payload;
      state.loading = false;
    },

    AUTH_FAIL: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    UPDATE_START: (state, action) => {
      state.loading = true;
    },

    UPDATE_SUCCESS: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.authData = action.payload;
      state.loading = false;
    },

    UPDATE_FAIL: (state, action) => {
      state.error = true;
      state.loading = false;
    },

    LOG_OUT: (state, action) => {
      localStorage.clear();
      state.authData = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
