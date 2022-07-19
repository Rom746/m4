import { IProduct } from "models/IProduct";

export const getRange = (products: IProduct[]): number[] => {
    let min = 1e10 , max = 0;
    products.forEach(pr => {
        max = Math.max(max, pr.price);
        min = Math.min(max, pr.price);
    });
    return [min ,max]
}