import { IFilters } from "models/IFilters";
import { IProduct } from "models/IProduct"

export const productFilter = (products: IProduct[], s: IFilters): IProduct[] => {

    let filtered = products.filter(product => product);
    if (s.gostFilter) {
        filtered = filtered.filter(product => product.gost.id === s.gostFilter);
    }
    if (s.priceFilter.length === 2) {
        filtered = filtered.filter(product => s.priceFilter[0] <= product.price && product.price <= s.priceFilter[1]);
    }
    return filtered;
}