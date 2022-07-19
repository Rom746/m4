import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterType } from "models/IFilters";

const initialState: IFilterType = {typeFilter: []}

export const filterTypeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setStateType(state, action: PayloadAction<number>) {
            state.typeFilter.push(action.payload);
        },
        deleteStateType(state, action: PayloadAction<number>) {
            state.typeFilter = state.typeFilter.filter(value => value !== action.payload);
        },
    }
});

export default filterTypeSlice.reducer;