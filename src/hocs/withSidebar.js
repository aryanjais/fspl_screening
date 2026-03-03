import React from 'react';
import Sidebar from '../pages/Sidebar';
import './sidebar.css';

const withSidebar = (WrappedComponent) => {
    return (props) => (
        <div className="sidebar-container">
            <Sidebar />
            <div className="sidebar-main">
                <WrappedComponent {...props} />
            </div>
        </div>
    );
};

export default withSidebar;
