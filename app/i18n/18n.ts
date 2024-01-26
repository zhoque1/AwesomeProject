import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "./en.json";
import fr from "./fr.json";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
    I18n.locale = locales[0].languageCode || 'en';
}

I18n.fallbacks = true;
I18n.translations = {
    en,
    fr
};

type DefaultLocale = typeof en;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
    [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
        ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
        : `${TKey}`;
}[keyof TObj & string];

export const t = (key: TxKeyPath, options?: I18n.TranslateOptions) =>
    key ? I18n.t(key, options) : key;


export const defaultOptions = {
    significantDigits: 0,
    thousandsSeparator: ',',
    decimalSeparator: '.',
    symbol: ''
}

export const numberFormatter = (value: any, options: any) => {
    if (typeof value !== 'number') value = 0.0
    options = { ...defaultOptions, ...options }
    value = value.toFixed(options.significantDigits)

    const [currency, decimal] = value.split('.')
    return `${options.symbol}${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
    )}${decimal? options.decimalSeparator : ''}${decimal?? ''}`
}

export const  formatPhoneNumber = (str: string) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        //Remove the matched extension code
        //Change this to format for any country code.
        let intlCode = (match[1] ? '+1 ' : '')
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }

    return '';
}

export default t;
