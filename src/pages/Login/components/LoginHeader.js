import React from 'react';
import { Box, Typography } from '@mui/material';

const LoginHeader = () => {
    return (
        <Box sx={{ p: { xs: 3, md: 5 }, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box className="aps-logo-icon" />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                aps
            </Typography>
        </Box>
    );
};

export default LoginHeader;
