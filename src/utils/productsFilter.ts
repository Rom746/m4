import { IProduct } from "models/IProduct"

type settingType = {
    gost?: number | null;
    price?: {min: number; max: number} | null
    type?: number | null;
}



export const productFilter = (products: IProduct[], s: settingType): IProduct[] => {

    let filtered = products.filter(product => product);
    if (s.gost) {
        filtered = filtered.filter(product => product.gost.id === s.gost);
    }
    return filtered;
}