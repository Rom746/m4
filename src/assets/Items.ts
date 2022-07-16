import { IGost } from "models/IGost";
import image from "assets/product/1.png";

export const gosts: IGost[] = [
    {
        id: 1,
        title: 'ГОСТ 14911-82'
    },
    {
        id: 2,
        title: 'ОСТ 36-146-88'
    },
    {
        id: 3,
        title: 'НТС 65-06'
    },
    {
        id: 4,
        title: 'НТС 11-11'
    },
    {
        id: 5,
        title: 'ГОСТ 5656-82'
    },
];


export const product = [
    {
        id: 1,
        title: 'Опора тавровая хомутовая ТХ',
        price: 849,
        gost: gosts[0],
        stocks: ['o', 'a', 'd'],
        image: image,
        type: {
            id: 1,
            title: 'string'
        },
    },
    {
        id: 2,
        title: 'Опора корпусная приварная КП',
        price: 149,
        gost: gosts[1],
        stocks: [],
        image: image,
        type: {
            id: 2,
            title: 'string2'
        },
    },
    {
        id: 3,
        title: 'Опора корпусная приварная КП 333',
        price: 149,
        gost: gosts[0],
        stocks: [],
        image: image,
        type: {
            id: 2,
            title: 'string2'
        },
    },
    {
        id: 4,
        title: 'Опора корпусная приварная КП 444',
        price: 149,
        gost: gosts[3],
        stocks: [],
        image: image,
        type: {
            id: 2,
            title: 'string2'
        },
    },
    {
        id: 5,
        title: 'Опора корпусная приварная КП 555',
        price: 149,
        gost: gosts[3],
        stocks: [],
        image: image,
        type: {
            id: 2,
            title: 'string2'
        },
    }
]
