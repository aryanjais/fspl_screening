import React from 'react';
import { Box, Typography } from '@mui/material';

const LoginHeader = () => {
    return (
        <Box sx={{ p: { xs: 3, md: 5 }, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 26, height: 26, borderRadius: '50%', bgcolor: 'white', border: '9px solid', borderColor: 'primary.main' }} />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                aps
            </Typography>
        </Box>
    );
};

export default LoginHeader;
