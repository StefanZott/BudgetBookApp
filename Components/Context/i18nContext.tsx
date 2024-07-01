import React, { createContext, useContext } from 'react';

export type CountryCodeContent = {
    countryCode: string
    setCountryCode: (c: string) => void
}

export const CountryCodeContext = createContext<CountryCodeContent>({
    countryCode: '',
    setCountryCode: () => {}
});

export const useCountryCodeContext = () => useContext(CountryCodeContext)