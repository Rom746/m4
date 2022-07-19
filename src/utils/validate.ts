
export const validNumber = new RegExp(/[^0-9]+$/ig);
export const validString = new RegExp(/[^A-ZА-ЯЁ]+$/ig);
export const validStrNum= new RegExp(/[^0-9A-ZА-ЯЁ]+$/ig);

interface IREGEXP {
    [index: string]: RegExp;
}

const REGEXP:IREGEXP = {
    'strnum': /[^0-9A-ZА-ЯЁ]+$/ig,
    'string': /[^\s A-ZА-ЯЁ]+$/ig,
    'number': /[^0-9]+$/ig,
    'strnumsp': /[^\s\- 0-9A-ZА-ЯЁ]+$/ig,
    'mail':  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    'tel': /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
}

const PATTERN = {
    'tel': '(123) 456-7890',
    'mail': 'example@mail.com'

}

type typeRegexp = 'strnum' | 'string' | 'number' | 'strnumsp' | 'mail' | 'tel';

export const validEmpty = (input: HTMLInputElement): boolean | string => {
    if (!input.value) {
        return `Поле ${input.placeholder} не заполнено!`;
    }
    return false;
}

export const validRegexp = (input: HTMLInputElement, type: typeRegexp) => {

    if (type === 'mail' || type === 'tel') {
        if (!REGEXP[type].test(input.value)) {
            return `Поле ${input.placeholder} заполнено не правильно!
                попробуйте шаблон: ${PATTERN[type]}`;
        }
    } else

    if (REGEXP[type].test(input.value)) {
        return `В поле ${input.placeholder} недопустимые символы!`;
    }
    return false;
}

export const validTest = (input: HTMLInputElement, type: typeRegexp) => {
    return validEmpty(input) || validRegexp(input, type)
}