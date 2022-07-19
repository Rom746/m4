import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterGost } from "models/IFilters";

const initialState: IFilterGost = {gostFilter: []}

export const filterGostStlice = createSlice({
    name: 'gost',
    initialState,
    reducers: {
        setStateGost(state, action: PayloadAction<number>) {
            state.gostFilter.push(action.payload);
        },
        deleteStateGost(state, action: PayloadAction<number>) {
            state.gostFilter = state.gostFilter.filter(v => v !== action.payload);
        },
    }
});

export default filterGostStlice.reducer;