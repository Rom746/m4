import { IGost } from "./IGost";
import { ITypesProduct } from "./ITypesProduct";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    gost: IGost;
    stocks: String[];
    image: string;
    type: ITypesProduct;
}