import { IGost } from "./IGost";
import { ITypesProduct } from "./ITypesProduct";

export interface IFilters {
    price: number[] | null;
    type: ITypesProduct | null;
    gost: IGost | null;
}

