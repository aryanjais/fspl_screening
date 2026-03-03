import React from 'react';
import './Header.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Header = () => {
    return (
        <div className="dashboard-header">
            <div className="header-breadcrumbs">
                <span className="breadcrumb-main">Scan</span>
                <HomeOutlinedIcon className="breadcrumb-icon" fontSize="small" />
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item">Private Assets</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item active">New Scan</span>
            </div>

            <div className="header-actions">
                <button className="btn-export">Export Report</button>
                <button className="btn-stop">Stop Scan</button>
            </div>
        </div>
    );
};

export default Header;
