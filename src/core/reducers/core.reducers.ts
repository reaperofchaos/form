import { createSlice } from "@reduxjs/toolkit";
import { CoreState } from "../types/core.types";

const initialState: CoreState = {
    randomOptions: [],
  };


  export const coreSlice = createSlice({
    name: "core",
    initialState,
    reducers: {
      setRandomOptions: (state, action) => {
        state.randomOptions = action.payload;
      },
    },
  });

export const { setRandomOptions } = coreSlice.actions;

export default coreSlice.reducer;