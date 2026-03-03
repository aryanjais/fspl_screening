import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import withSidebar from '../hocs/withSidebar';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const ScanDetail = lazy(() => import('../pages/Scan'));
const DashboardWithSidebar = withSidebar(Dashboard);
const ScanDetailWithSidebar = withSidebar(ScanDetail);

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/dashboard" element={<DashboardWithSidebar />} />
                <Route path="/scans" element={<ScanDetailWithSidebar />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
