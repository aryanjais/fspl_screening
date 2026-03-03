import React from 'react';
import { Box, Typography } from '@mui/material';
import './ConsoleTabs.css';

const ConsoleTabs = () => {
    return (
        <div className="console-tabs-container">
            <div className="console-tab active">
                <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>Activity Log</Typography>
            </div>
            <div className="console-tab">
                <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#64748b' }}>Verification Loops</Typography>
            </div>
        </div>
    );
};

export default ConsoleTabs;
