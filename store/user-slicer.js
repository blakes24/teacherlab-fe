import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {
  setIsAuthenticated,
} = userSlice.actions;

export default userSlice.reducer;
