import { createSlice } from "@reduxjs/toolkit";

const loadUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || null;
  } catch {
    return null;
  }
};

const initialState = {
  data: loadUser(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.data = null;
      localStorage.removeItem("user");
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
