import React, { createContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { getTheme } from './theme';

export const ThemeContext = createContext({
    toggleColorMode: () => { },
    mode: 'dark',
});

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => {
                const newMode = prevMode === 'light' ? 'dark' : 'light';
                localStorage.setItem('themeMode', newMode);
                return newMode;
            });
        },
        mode,
    }),
        [mode]
    );

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ThemeContext.Provider value={colorMode}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};
