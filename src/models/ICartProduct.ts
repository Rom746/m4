import { IProduct } from "./IProduct";


export interface ICartProduct extends IProduct {
    amount: number;
    sum: number
}