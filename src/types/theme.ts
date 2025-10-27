// import React from 'react';
import React from 'react';


export type themeType = 'light' | 'dark';

export type ThemeContextType = {
    theme: themeType,
    toggleTheme: () => void,
}

export type ThemeProviderType = {
    children: React.ReactNode
}