import { useCountryCodeContext } from '../../Components/Context/i18nContext';

type Translations = {
    [key: string]: string;
};

type LanguageResources = {
    [key: string]: Translations;
};

const resources: LanguageResources = {
    en: require('./en.json'),
    US: require('./de.json'),
    de: require('./de.json'),
    // add more languages here
};

export const i18n = (countryCode: string, key: string) => {
    const translation = resources[countryCode][key];

    return translation;
}

  