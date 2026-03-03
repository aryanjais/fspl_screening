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
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    borderRadius: 12,
                    backgroundColor: 'var(--background-paper)', // Use CSS variable
                    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                    '&.MuiPaper-elevation3': {
                        boxShadow: mode === 'dark'
                            ? '0px 10px 40px rgba(0,0,0,0.5)'
                            : '0px 10px 40px rgba(0,0,0,0.1)',
                    }
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: 'var(--background-paper)',
                    color: 'var(--text-primary)',
                    borderRadius: 12,
                    '&:before': { display: 'none' },
                    overflow: 'hidden',
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid var(--divider)',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderColor: 'var(--divider)',
                    color: 'var(--text-secondary)',
                },
                head: {
                    color: 'var(--text-tertiary)',
                    fontWeight: 600,
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 12,
                        backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#fff',
                        transition: 'background-color 0.3s ease',
                        '& fieldset': {
                            borderColor: 'var(--border-light)', // Use CSS variable
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--border-medium)', // Use CSS variable
                        },
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 'bold',
                    padding: '8px 24px',
                },
            },
        },
    },
});

export const getTheme = (mode) => createTheme(getDesignTokens(mode));
