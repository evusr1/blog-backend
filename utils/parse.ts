const isString = (text: unknown): text is string => {
    return typeof text == 'string' || text instanceof String;
};

const isNumber = (number: unknown): number is number => {
    return typeof number == 'number' || !isNaN(Number(number));
};

const toString = (text: unknown): string => {
    if(!isString(text))
        throw new Error('Not a string');

    return text;
};

const toNumber = (number: unknown) : number => {
    if(!isNumber(number))
        throw new Error('Not a number');

    return number;
};

export { toString, toNumber };