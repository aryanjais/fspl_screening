import React from 'react';
import Header from '../Dashboard/components/Header';
import TopPanel from './components/TopPanel';

const ScanDetail = () => {
    return (
        <>
            <Header />
            <div className="dashboard-content">
                <TopPanel />
            </div>
        </>
    )
};

export default ScanDetail;
