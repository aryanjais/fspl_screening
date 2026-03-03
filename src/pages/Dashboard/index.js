import React from 'react';
import './Dashboard.css';
import Header from './components/Header';
import Stats from './components/Stats';
import SeverityCards from './components/SeverityCards';
import ScanTable from './components/Scan';

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
