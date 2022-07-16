import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITypesProduct } from "models/ITypesProduct";

interface TypeProductState {
    types: ITypesProduct[];
    isLoading: boolean;
    error: string;
}


const initialState: TypeProductState = {
    types: [],
    isLoading: false,
    error: ''
}

export const typeProductSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        addType(state, action: PayloadAction<ITypesProduct>) {
            state.types.push(action.payload);
        },
    }
});

export default typeProductSlice.reducer;