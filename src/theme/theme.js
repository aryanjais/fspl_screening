import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    palette: {
        mode,
        primary: {
            main: '#0CC8A8',
        },
        success: { main: '#4CAF50' },
        warning: { main: '#FF9800' },
        error: { main: '#F44336' },
        ...(mode === 'light'
            ? {

                background: {
                    default: '#F5F5F5',
                    paper: '#FFFFFF',
                },
                text: {
                    primary: '#1A1A1A',
                    secondary: '#4A4A4A',
                },
                divider: 'rgba(0, 0, 0, 0.12)',
            }
            : {
                background: {
                    default: '#0F0F0F',
                    paper: '#1A1A1A',
                },
                text: {
                    primary: '#F5F5F5',
                    secondary: '#A0A0A0',
                },
                divider: 'rgba(255, 255, 255, 0.12)',
            }),
    },
});

export const getTheme = (mode) => createTheme(getDesignTokens(mode));
