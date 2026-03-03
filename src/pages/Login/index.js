import React from 'react';
import { Box, Grid } from '@mui/material';
import LoginHeader from './components/LoginHeader';
import LoginLeft from './components/LoginLeft';
import LoginRight from './components/LoginRight';

const Login = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100%',
                backgroundImage: 'url(/images/login_background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Grid container direction="column" sx={{ flexGrow: 1 }}>
                <Grid item>
                    <LoginHeader />
                </Grid>

                <Grid item xs sx={{ display: 'flex', width: '100%' }}>
                    <Grid container alignItems="center" justifyContent="space-around" sx={{ width: '100%', m: 0 }}>
                        <Grid item xs={12} md={6} sx={{ height: '100%', display: 'flex' }}>
                            <LoginLeft />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                            <LoginRight />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;
