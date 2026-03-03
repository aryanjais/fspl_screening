import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SidebarLayout from '../hocs/SidebarLayout';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const ScanDetail = lazy(() => import('../pages/Scan'));

// Helper to check auth
const isAuthenticated = () => localStorage.getItem('isLoggedIn') === 'true';

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/dashboard" replace /> : children;
};

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />

                <Route
                    element={
                        <ProtectedRoute>
                            <SidebarLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/scans" element={<ScanDetail />} />
                </Route>

                {/* Catch all redirect to dashboard (which will then redirect to login if not authed) */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
