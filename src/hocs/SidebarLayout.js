import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Sidebar';
import './sidebar.css';

const SidebarLayout = () => {
    return (
        <div className="sidebar-container">
            <Sidebar />
            <div className="sidebar-main">
                <Outlet />
            </div>
        </div>
    );
};

export default SidebarLayout;
