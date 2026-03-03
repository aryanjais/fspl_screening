import React from 'react';
import './Dashboard.css';

const Header = () => {
    return (
        <div className="header">
            <h2>Header</h2>
        </div>
    );
};

const Stats = () => {
    return (
        <div className="stats">
            <h2>Stats</h2>
        </div>
    );
};

const SeverityCards = () => {
    return (
        <div className="severity-cards">
            <h2>Severity Cards</h2>
        </div>
    );
};

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
