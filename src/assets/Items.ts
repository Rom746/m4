import { IGost } from "models/IGost";
import image from "assets/product/1.png";

export const gosts: IGost[] = [
    {
        id: 0,
        title: 'ГОСТ 14911-82'
    },
    {
        id: 1,
        title: 'ОСТ 36-146-88'
    },
    {
        id: 2,
        title: 'НТС 65-06'
    },
    {
        id: 3,
        title: 'НТС 11-11'
    },
    {
        id: 4,
        title: 'ГОСТ 5656-82'
    },
];

export const typesItems = [
    {
        id: 0,
        title: 'string'
    },
    {
        id: 1,
        title: 'string2'
    },
    {
        id: 2,
        title: 'string3'
    }
]

export const product = [
    {
        id: 0,
        title: 'Опора тавровая хомутовая ТХ',
        price: 849,
        gost: gosts[0],
        stocks: ['o', 'a', 'd'],
        image: image,
        type: typesItems[0],
    },
    {
        id: 1,
        title: 'Опора корпусная приварная КП',
        price: 749,
        gost: gosts[1],
        stocks: [],
        image: image,
        type: typesItems[1],
    },
    {
        id: 2,
        title: 'Опора корпусная приварная КП 333',
        price: 649,
        gost: gosts[0],
        stocks: [],
        image: image,
        type: typesItems[1],
    },
    {
        id: 3,
        title: 'Опора корпусная приварная КП 444',
        price: 549,
        gost: gosts[3],
        stocks: [],
        image: image,
        type: typesItems[1],
    },
    {
        id: 4,
        title: 'Опора корпусная приварная КП 555',
        price: 449,
        gost: gosts[3],
        stocks: [],
        image: image,
        type: typesItems[2],
    }
]




export const categories = [
    {
        id: 1,
        tag: 'Серия 5.904-1 выпуск 1:',
        title: 'Детали крепления воздуховодов',
        count: 95
    },
    {
        id: 6,
        tag: 'Серия 4.903-10 Выпуск 4,5,6: ',
        title: 'Изделия и детали трубопроводов для тепловых сетей',
        count: 15
    },
    {
        id: 2,
        tag: 'Серия 4.900-9 Выпуск 1: ',
        title: 'Узлы и детали трубопроводов из пластмассовых труб для систем водоснабжения и канализации',
        count: 247
    },
    {
        id: 3,
        tag: 'Серия 3.900-9:',
        title: 'Опорные конструкции и средства крепления трубопроводов',
        count: 2
    },
    {
        id: 4,
        tag: 'Л8-508.000 - Л8-524.000: ',
        title: 'Опоры и подвески трубопроводов Дн<89мм',
        count: 15
    },
    {
        id: 5,
        tag: 'Л8-138.000 - Л8-200.000: ',
        title: 'Опоры и подвески станционных трубопроводов',
        count: 247
    }
]

