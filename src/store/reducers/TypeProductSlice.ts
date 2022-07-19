import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typesItems } from "assets/Items";
import { ITypesProduct } from "models/ITypesProduct";

interface TypeProductState {
    types: ITypesProduct[];
    isLoading: boolean;
    error: string;
}


const initialState: TypeProductState = {
    types: typesItems,
    isLoading: false,
    error: ''
}

export const typeProductSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        addType(state, action: PayloadAction<ITypesProduct>) {

           if (state.types.find(v => v.id === action.payload.id)) { return }

            state.types.push(action.payload);

        },
    }
});

export default typeProductSlice.reducer;