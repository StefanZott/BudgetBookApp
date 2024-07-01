import React, { createContext, useContext } from 'react';

export type DarkModeContent = {
    isDarkTheme: boolean
    setDarkTheme: (c: boolean) => void
}

export const DarkModeContext = createContext<DarkModeContent>({
    isDarkTheme: false,
    setDarkTheme: () => {}
});

export const useDarkModeContext = () => useContext(DarkModeContext)