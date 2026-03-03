import React from 'react';
import { Accordion, AccordionDetails, Typography, Box } from '@mui/material';
import './LiveConsole.css';
import LiveConsoleHeader from './LiveConsoleHeader';

const LiveConsole = () => {
    return (
        <div className="live-console-container">
            <Accordion defaultExpanded sx={{ borderRadius: '8px', '&:before': { display: 'none' }, boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' }}>
                <LiveConsoleHeader />
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
