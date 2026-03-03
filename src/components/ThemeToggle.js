import React, { useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ThemeContext } from '../theme/ThemeContext';

const ThemeToggle = () => {
    const { mode, toggleColorMode } = useContext(ThemeContext);

    return (
        <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`} arrow>
            <IconButton
                onClick={toggleColorMode}
                size="small"
                sx={{
                    color: 'text.secondary',
                    transition: 'all 0.2s',
                    '&:hover': {
                        backgroundColor: 'action.hover',
                        color: 'primary.main',
                        transform: 'rotate(15deg)',
                    },
                    padding: '8px',
                }}
            >
                {mode === 'light' ? (
                    <DarkModeOutlinedIcon fontSize="small" />
                ) : (
                    <LightModeOutlinedIcon fontSize="small" />
                )}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggle;
