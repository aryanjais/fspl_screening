import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const ScanDetail = lazy(() => import('../pages/ScanDetail'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/scans/:id" element={<ScanDetail />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
