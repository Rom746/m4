export interface IFilters extends IFilterGost, IFilterPrice, IFilterType {}


export type IFilterGost = { gostFilter: number[] }
export type IFilterPrice = { priceFilter: number[] }
export type IFilterType = {   typeFilter: number[] }

