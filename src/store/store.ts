import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductSlice";
import typeReducer from "./reducers/TypeProductSlice";
import gostReducer from "./reducers/GostSlice";
import cartReducer from "./reducers/CartSlice";
import filterGostReducer from "./reducers/FilterGostSlice";
import filterPriceReducer from "./reducers/FilterPriceSlice";
import filterTypeReducer from "./reducers/FilterTypeSlice";

const rootReducer = combineReducers({
    productReducer,
    typeReducer,
    gostReducer,
    cartReducer,
    filterGostReducer,
    filterPriceReducer,
    filterTypeReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer, 
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']