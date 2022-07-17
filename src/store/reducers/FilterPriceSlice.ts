import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterPrice } from "models/IFilters";

const initialState: IFilterPrice = {priceFilter: [0, 100000]}

export const filterPriceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        setStatePrice(state, action: PayloadAction<number[]>) {
            state.priceFilter = action.payload;
        },
    }
});

export default filterPriceSlice.reducer;