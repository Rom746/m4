import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "assets/Items";
import { IProduct } from "models/IProduct";

interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: product,
    isLoading: false,
    error: ''
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProducts(state, action: PayloadAction<IProduct[]>) {
            state.products = [...state.products, ...action.payload];
        },

        addProduct(state, action: PayloadAction<IProduct>) {
            state.products.push(action.payload);
        },
    }
});

export default productSlice.reducer;