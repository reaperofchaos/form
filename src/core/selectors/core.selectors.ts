import { RootState } from "../store";

export const selectRandomOptions = (state: RootState)=>state.core.randomOptions;