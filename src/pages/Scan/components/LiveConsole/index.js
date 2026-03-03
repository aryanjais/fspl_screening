import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './LiveConsole.css';

const LiveConsole = () => {
    return (
        <div className="live-console-container">
            <Accordion defaultExpanded sx={{ borderRadius: '8px', '&:before': { display: 'none' }, boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="live-console-content"
                    id="live-console-header"
                    sx={{ borderBottom: '1px solid #e2e8f0' }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#1a9e8e' }} />
                        <Typography sx={{ fontWeight: 600, color: '#0f172a' }}>Live Scan Console</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                    <Box sx={{ p: 3 }}>
                        <Typography>
                            Main content skeleton will go here...
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default LiveConsole;
