import React from 'react';
import './Dashboard.css';
import Header from './components/Header';
import Stats from './components/Stats';
import SeverityCards from './components/SeverityCards';

const ScanTable = () => {
    return (
        <div className="scan-table">
            <h2>Scan Table</h2>
        </div>
    );
};

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="dashboard-content">
                <Stats />
                <SeverityCards />
                <ScanTable />
            </div>
        </>
    );
};

export default Dashboard;
