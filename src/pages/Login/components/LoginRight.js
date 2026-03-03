import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Paper,
    InputAdornment,
    IconButton,
    Link
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const LoginRight = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            p: { xs: 2, md: 4 }
        }}>
            <Paper
                elevation={3}
                component="form"
                onSubmit={handleLogin}
                sx={{
                    maxWidth: 440,
                    width: '100%',
                    p: { xs: 4, md: 5 },
                    bgcolor: '#FFFFFF',
                    borderRadius: 3,
                    color: '#000000',
                    boxShadow: '0px 10px 40px rgba(0,0,0,0.1)'
                }}
            >
                <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ color: '#1A1A1A' }}>
                    Sign up
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" gutterBottom sx={{ mb: 4, fontSize: '0.9rem' }}>
                    Already have an account? <Link href="/login" underline="always" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Log in</Link>
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 3 }}>
                    <TextField
                        fullWidth
                        placeholder="First name*"
                        variant="outlined"
                        size="small"
                        sx={{ bgcolor: '#fff', '& .MuiOutlinedInput-root': { borderRadius: 1.5 } }}
                    />
                    <TextField
                        fullWidth
                        placeholder="Last name*"
                        variant="outlined"
                        size="small"
                        sx={{ bgcolor: '#fff', '& .MuiOutlinedInput-root': { borderRadius: 1.5 } }}
                    />
                    <TextField
                        fullWidth
                        placeholder="Email address*"
                        type="email"
                        variant="outlined"
                        size="small"
                        sx={{ bgcolor: '#fff', '& .MuiOutlinedInput-root': { borderRadius: 1.5 } }}
                    />
                    <TextField
                        fullWidth
                        placeholder="Password (8+ characters)*"
                        type="password"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <VisibilityOffIcon fontSize="small" sx={{ color: '#666' }} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        sx={{ bgcolor: '#fff', '& .MuiOutlinedInput-root': { borderRadius: 1.5 } }}
                    />
                </Box>

                <FormControlLabel
                    control={<Checkbox size="small" sx={{ color: '#ccc', '&.Mui-checked': { color: 'primary.main' } }} />}
                    label={
                        <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#333' }}>
                            I agree to Aps's <Link href="#" underline="always" color="primary">Terms & Conditions</Link> and acknowledge the <Link href="#" underline="always" color="primary">Privacy Policy</Link>
                        </Typography>
                    }
                    sx={{ mb: 3, alignItems: 'center', mt: 1, '& .MuiCheckbox-root': { pt: 0, pb: 0 } }}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disableElevation
                    sx={{
                        mb: 4,
                        py: 1.25,
                        borderRadius: 8,
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontSize: '1rem',
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        }
                    }}
                >
                    Create account
                </Button>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button
                        variant="contained"
                        disableElevation
                        sx={{
                            flex: 1,
                            bgcolor: 'black',
                            color: 'white',
                            borderRadius: 8,
                            py: 1.25,
                            '&:hover': { bgcolor: '#333' }
                        }}
                    >
                        <img width={24} height={24} src="assets/apple.svg" alt="Apple" />
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            flex: 1,
                            bgcolor: '#fcfcfc',
                            color: '#000',
                            borderRadius: 8,
                            py: 1.25,
                            borderColor: '#eee',
                            '&:hover': { bgcolor: '#f5f5f5', borderColor: '#ddd' }
                        }}
                    >
                        <img width={24} height={24} src="assets/google.svg" alt="Google" />
                    </Button>
                    <Button
                        variant="contained"
                        disableElevation
                        sx={{
                            flex: 1,
                            bgcolor: '#3b5998',
                            color: 'white',
                            borderRadius: 8,
                            py: 1.25,
                            '&:hover': { bgcolor: '#365899' }
                        }}
                    >
                        <img width={24} height={24} src="assets/meta.svg" alt="Meta" />
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginRight;
