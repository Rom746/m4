import { IFilters } from "models/IFilters";
import { IProduct } from "models/IProduct"

export const productFilter = (products: IProduct[], s: IFilters): IProduct[] => {
   
    let filtered = products.filter(product => product);
    if (s.gostFilter.length > 0) {
        filtered = filtered.filter(product => s.gostFilter.includes(product.gost.id));
    }
    if (s.priceFilter.length === 2) {
        filtered = filtered.filter(product => s.priceFilter[0] <= product.price && product.price <= s.priceFilter[1]);
    }
    if (s.typeFilter.length > 0) {
        filtered = filtered.filter(product => s.typeFilter.includes(product.type.id));
    }
    return filtered;
}

