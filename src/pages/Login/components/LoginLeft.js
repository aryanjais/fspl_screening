import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const LoginLeft = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            color: 'white',
            pl: { xs: 4, md: 8, lg: 12 },
            pr: 4
        }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.2 }}>
                Expert level Cybersecurity<br />
                in <Typography component="span" color="primary" sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>hours</Typography> not weeks.
            </Typography>

            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 6, mb: 3 }}>
                What's included
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <CheckIcon color="primary" fontSize="small" />
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Effortlessly spider and map targets to uncover hidden security<br />flaws</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <CheckIcon color="primary" fontSize="small" />
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Deliver high-quality, validated findings in hours, not weeks.</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <CheckIcon color="primary" fontSize="small" />
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Generate professional, enterprise-grade security reports<br />automatically.</Typography>
                </Box>
            </Box>

            <Box sx={{ mt: 10 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Box sx={{ color: 'primary.main', display: 'flex', fontSize: '1rem' }}>
                        ★
                    </Box>
                    <Typography fontWeight="bold" variant="body1">Trustpilot</Typography>
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Rated 4.5/5.0 <Typography component="span" variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 'normal' }}>(100k+ reviews)</Typography>
                </Typography>
            </Box>
        </Box>
    );
};

export default LoginLeft;
