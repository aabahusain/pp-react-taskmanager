import React, { createContext, useState, useContext } from 'react'

import type { ThemeContextType, ThemeProviderType, themeType } from '../types/theme'

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";


const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderType> = ({ children }) => {
    const getInitial = (): themeType => {
        // if (typeof window !== 'undefined' ) return 'light';
        const stored = localStorage.getItem('theme') as themeType | null;
        if (stored === 'light' || stored === 'dark') return stored;
        return 'light';

    }
    const [theme, setTheme] = useState<themeType>(getInitial);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    const muiTheme = createTheme({
        palette: {
            mode: theme,
        },
    });


    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {/* <div style={{ backgroundColor: theme === 'light' ? "var(--light-bg)" : "var(--dark-bg)", color: theme === 'light' ? "var(--light-text)" : "var(--dark-text)"}}>
                {children}
            </div> */}
              <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                    {children}
              </MuiThemeProvider>
        </ThemeContext.Provider>
    )

}



// export default function ThemeProvider() {
//   return (
//     <div>ThemeContext</div>
//   )
// }
