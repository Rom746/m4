import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gosts } from "assets/Items";
import { IGost } from "models/IGost";

interface GostState {
    gosts: IGost[];
    isLoading: boolean;
    error: string;
}

const initialState: GostState = {
    gosts: gosts,
    isLoading: false,
    error: ''
}

export const gostStlice = createSlice({
    name: 'gost',
    initialState,
    reducers: {
        addGost(state, action: PayloadAction<IGost>) {
            state.gosts.push(action.payload);
        },
    }
});

export default gostStlice.reducer;