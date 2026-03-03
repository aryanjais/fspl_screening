import React, { useState } from 'react';
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
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from 'react-router-dom';

const LoginRight = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@mail.com',
        password: 'admin'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLogin) {
            const userData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            };
            localStorage.setItem('user', JSON.stringify(userData));
            alert('Account created successfully! You can now log in.');
            setIsLogin(true);
            setFormData({ firstName: '', lastName: '', email: '', password: '' });
        } else {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/dashboard');
            } else {
                alert('Invalid email or password, try -> email: admin@mail.com, password: admin');
            }
        }
    };

    const toggleMode = (e) => {
        e.preventDefault();
        setIsLogin(!isLogin);
        // setFormData({ firstName: '', lastName: '', email: '', password: '' });
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
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    maxWidth: 440,
                    minWidth: { sm: 440 },
                    p: { xs: 4, md: 5 },
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                    {isLogin ? 'Log in' : 'Sign up'}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" gutterBottom sx={{ mb: 4, fontSize: '0.9rem' }}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <Link
                        href="#"
                        onClick={toggleMode}
                        underline="always"
                        sx={{ color: 'primary.main', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                        {isLogin ? 'Sign up' : 'Log in'}
                    </Link>
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 3 }}>
                    {!isLogin && (
                        <>
                            <TextField
                                fullWidth
                                name="firstName"
                                placeholder="First name*"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            // required
                            />
                            <TextField
                                fullWidth
                                name="lastName"
                                placeholder="Last name*"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            // required
                            />
                        </>
                    )}
                    <TextField
                        fullWidth
                        name="email"
                        placeholder="Email address*"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    // required
                    />
                    <TextField
                        fullWidth
                        name="password"
                        placeholder={isLogin ? "Password*" : "Password (8+ characters)*"}
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleInputChange}
                        // required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <VisibilityOutlinedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                                        ) : (
                                            <VisibilityOffIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>

                {!isLogin && (
                    <FormControlLabel
                        control={<Checkbox size="small" sx={{ color: 'divider', '&.Mui-checked': { color: 'primary.main' } }} />}
                        label={
                            <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                                I agree to Aps's <Link href="#" underline="always" color="primary">Terms & Conditions</Link> and acknowledge the <Link href="#" underline="always" color="primary">Privacy Policy</Link>
                            </Typography>
                        }
                        sx={{ mb: 3, alignItems: 'center', mt: 1, '& .MuiCheckbox-root': { pt: 0, pb: 0 } }}
                    />
                )}

                {isLogin && (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3, mt: -1 }}>
                        <Link href="#" variant="body2" color="primary" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                            Forgot password?
                        </Link>
                    </Box>
                )}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                        mb: 4,
                        py: 1.25,
                        fontSize: '1rem',
                    }}
                >
                    {isLogin ? 'Log in' : 'Create account'}
                </Button>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button variant="contained" sx={{ flex: 1, bgcolor: 'black', color: 'white', '&:hover': { bgcolor: '#333' } }}>
                        <img width={24} height={24} src="assets/apple.svg" alt="Apple" />
                    </Button>
                    <Button variant="outlined" sx={{ flex: 1, borderColor: 'divider', '&:hover': { borderColor: 'text.primary' } }}>
                        <img width={24} height={24} src="assets/google.svg" alt="Google" />
                    </Button>
                    <Button variant="contained" sx={{ flex: 1, bgcolor: '#3b5998', color: 'white', '&:hover': { bgcolor: '#365899' } }}>
                        <img width={24} height={24} src="assets/meta.svg" alt="Meta" />
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginRight;
