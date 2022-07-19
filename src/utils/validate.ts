
export const validNumber = new RegExp(/[^0-9]+$/ig);
export const validString = new RegExp(/[^A-ZА-ЯЁ]+$/ig);
export const validStrNum= new RegExp(/[^0-9A-ZА-ЯЁ]+$/ig);

interface IREGEXP {
    [index: string]: RegExp;
}

const REGEXP:IREGEXP = {
    'strnum': /[^0-9A-ZА-ЯЁ]+$/ig,
    'string': /[^A-ZА-ЯЁ]+$/ig,
    'number': /[^0-9]+$/ig,
    'strnumsp': /[^\s\- 0-9A-ZА-ЯЁ]+$/ig,
}

type typeRegexp = 'strnum' | 'string' | 'number' | 'strnumsp';

export const validEmpty = (input: HTMLInputElement): boolean | string => {
    if (!input.value) {
        return `Поле ${input.placeholder} не заполнено!`;
    }
    return false;
}

export const validRegexp = (input: HTMLInputElement, regexp: RegExp) => {
    if (regexp.test(input.value)) {
        return `В поле ${input.placeholder} недопустимые символы!`;
    }
    return false;
}

export const validTest = (input: HTMLInputElement, type: typeRegexp) => {
    return validEmpty(input) || validRegexp(input, REGEXP[type])
}