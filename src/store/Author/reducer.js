import { createSlice } from "@reduxjs/toolkit";

// Reducer para los datos del autor
const authorSlice = createSlice({
  name: "author",
  initialState: null,
  reducers: {
    setAuthor: (state, action) => {
      return action.payload;
    },
    clearAuthor: () => null,
  },
});

export const { setAuthor, clearAuthor } = authorSlice.actions;
export default authorSlice.reducer;


