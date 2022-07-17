import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterGost } from "models/IFilters";

const initialState: IFilterGost = {gostFilter: null}

export const filterGostStlice = createSlice({
    name: 'gost',
    initialState,
    reducers: {
        setStateGost(state, action: PayloadAction<number | null>) {
            state.gostFilter = action.payload;
        },
    }
});

export default filterGostStlice.reducer;