import React from 'react';
import Header from '../Dashboard/components/Header';
import TopPanel from './components/TopPanel';
import LiveConsole from './components/LiveConsole';
import './Scan.css';

const ScanDetail = () => {
    return (
        <>
            <Header />
            <div className="scan-content">
                <TopPanel />
                <LiveConsole />
            </div>
        </>
    )
};

export default ScanDetail;
