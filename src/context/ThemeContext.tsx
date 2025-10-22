import React, {createContext, useState, useContext, useEffect} from 'react'
import type { ThemeContextType, ThemeProviderType, themeType } from '../types/theme'

const ThemeContext = createContext<ThemeContextType | undefined>({
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
    console.warn(`⚠️ : ${theme}`)
    
    const toggleTheme = () => {
        setTheme((prev)=> (prev === 'light' ? 'dark' : 'light'))
        console.log(`Theme Toggled to be : ${theme}`)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div style={{ backgroundColor: theme === 'light' ? "var(--light-bg)" : "var(--dark-bg)", color: theme === 'light' ? "var(--light-text)" : "var(--dark-text)", minHeight: '100vh', padding: '2rem' }}>
                {children}
            </div>
        </ThemeContext.Provider>
    )

}



// export default function ThemeProvider() {
//   return (
//     <div>ThemeContext</div>
//   )
// }
