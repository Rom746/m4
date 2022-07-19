import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICartProduct } from "models/ICartProduct";

interface CartState {
    products: ICartProduct[];
    amount: number;
    sum: number
}

interface IUpdateAction {
    id: number;
    amount: number;
}

const initialState: CartState = {
    products: [],
    amount: 0,
    sum: 0
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
            state.sum += action.payload.sum;
            state.amount += action.payload.amount;
        },

        updateAmountProductCart(state, action: PayloadAction<IUpdateAction>) {
            const ind = state.products.findIndex(p => p.id === action.payload.id);
            state.products[ind].amount +=  action.payload.amount;
            state.amount += action.payload.amount;
            state.sum += state.products[ind].price * action.payload.amount;
        },

        deleteProductCart(state, action: PayloadAction<ICartProduct>) {
            state.amount -= action.payload.amount;
            state.sum -= action.payload.amount * action.payload.price;
            state.products = state.products.filter(p => p.id !== action.payload.id);
        },

        deleteCart(state) {
            state.amount = initialState.amount;
            state.products = initialState.products;
            state.sum = initialState.sum;
        }
    }
});

export default cartSlice.reducer;