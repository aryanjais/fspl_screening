import React from 'react';
import Header from '../Dashboard/components/Header';
import TopPanel from './components/TopPanel';
import LiveConsole from './components/LiveConsole';

const ScanDetail = () => {
    return (
        <>
            <Header />
            <div className="dashboard-content">
                <TopPanel />
                <LiveConsole />
            </div>
        </>
    )
};

export default ScanDetail;
