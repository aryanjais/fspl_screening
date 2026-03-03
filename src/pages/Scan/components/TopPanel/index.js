import React from 'react';
import './TopPanel.css';
import { CircularProgress, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // For Spidering
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'; // Mapping
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined'; // Testing
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; // Validating
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'; // Reporting

const TopPanel = () => {
    return (
        <div className="top-panel-container">
            <div className="progress-section">
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress
                        variant="determinate"
                        value={100}
                        size={100}
                        thickness={4}
                        sx={{ color: '#0b1a26' }}
                    />
                    <CircularProgress
                        variant="determinate"
                        value={0}
                        size={100}
                        thickness={4}
                        sx={{
                            color: '#1a9e8e',
                            position: 'absolute',
                            left: 0,
                            circle: { strokeLinecap: 'round' }
                        }}
                    />
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div className="progress-text">
                            <span className="percent">0%</span>
                            <span className="status">In Progress</span>
                        </div>
                    </Box>
                </Box>
            </div>

            <div className="stepper-section">
                <div className="stepper-line"></div>
                <div className="step active">
                    <div className="step-icon">
                        <SearchIcon fontSize="small" />
                    </div>
                    <span className="step-label">Spidering</span>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <AccountTreeOutlinedIcon fontSize="small" />
                    </div>
                    <span className="step-label">Mapping</span>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <BiotechOutlinedIcon fontSize="small" />
                    </div>
                    <span className="step-label">Testing</span>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <VerifiedUserOutlinedIcon fontSize="small" />
                    </div>
                    <span className="step-label">Validating</span>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <DescriptionOutlinedIcon fontSize="small" />
                    </div>
                    <span className="step-label">Reporting</span>
                </div>
            </div>

            <div className="meta-section">
                <div className="meta-item">
                    <span className="meta-label">Scan Type</span>
                    <span className="meta-value">Grey Box</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Targets</span>
                    <span className="meta-value">google.com</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Started At</span>
                    <span className="meta-value">Nov 22, 09:00AM</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Credentials</span>
                    <span className="meta-value">2 Active</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Files</span>
                    <span className="meta-value">Control.pdf</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Checklists</span>
                    <span className="meta-value highlight">40/350</span>
                </div>
            </div>
        </div>
    );
};

export default TopPanel;
