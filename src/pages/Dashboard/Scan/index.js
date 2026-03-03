import React from 'react';
import './ScanTable.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ScanTableRow from './ScanTableRow';

const dummyData = [
    { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
    { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
    { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
    { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
    { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
    { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
    { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
    { name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulns: [0, 5, 12, 0], lastScan: '4d ago' },
    { name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulns: [0, 5, 12, 0], lastScan: '4d ago' },
    { name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vulns: [2, 4, 8, 1], lastScan: '3d ago' },
    { name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, vulns: [2, 4, 8, 1], lastScan: '3d ago' },
];

const ScanTable = () => {
    return (
        <div className="scan-table-container">
            <div className="table-controls">
                <div className="search-box">
                    <SearchOutlinedIcon fontSize="small" className="search-icon" />
                    <input type="text" placeholder="Search scans by name or type..." />
                </div>
                <div className="controls-right">
                    <button className="control-btn"><FilterListOutlinedIcon fontSize="small" /> Filter</button>
                    <button className="control-btn"><ViewColumnOutlinedIcon fontSize="small" /> Column</button>
                    <button className="btn-new-scan"><AddOutlinedIcon fontSize="small" /> New scan</button>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="scan-table">
                    <thead>
                        <tr>
                            <th>Scan Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Vulnerability</th>
                            <th className="align-right">Last Scan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((row, index) => (
                            <ScanTableRow key={index} row={row} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScanTable;
