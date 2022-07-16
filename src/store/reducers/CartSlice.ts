import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICartProduct } from "models/ICartProduct";

interface CartState {
    products: ICartProduct[];
    amount: number;
}

const initialState: CartState = {
    products: [],
    amount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductCart(state, action: PayloadAction<ICartProduct>) {
    
            const ind = state.products.findIndex(p => p.id === action.payload.id);

            if (ind === -1) {
                state.products.push(action.payload);
            } else {
                state.products[ind].amount += action.payload.amount;
            }
        
            state.amount += action.payload.amount;
        },

        decProductCart(state, action: PayloadAction<number>) {
            const ind = state.products.findIndex(p => p.id === action.payload);
            state.products[ind].amount-- ;
            state.amount--;
        },

        deleteProductCart(state, action: PayloadAction<ICartProduct>) {
            state.amount -= action.payload.amount;
            state.products = state.products.filter(p => p.id === action.payload.id);
        },
    }
});

export default cartSlice.reducer;