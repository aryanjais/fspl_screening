import React from 'react';
import { Accordion, AccordionDetails, Box } from '@mui/material';
import './LiveConsole.css';
import LiveConsoleHeader from './LiveConsoleHeader';
import ConsoleTabs from './components/ConsoleTabs';
import ActivityTerminal from './components/ActivityTerminal';
import FindingsLog from './components/FindingsLog';
import ConsoleFooter from './components/ConsoleFooter';

const LiveConsole = () => {
    return (
        <>
            <div className="live-console-container">
                <Accordion
                    defaultExpanded
                    sx={{
                        boxShadow: (theme) => theme.palette.mode === 'dark'
                            ? '0 4px 20px rgba(0,0,0,0.5)'
                            : '0 4px 20px rgba(0,0,0,0.05)'
                    }}
                >
                    <LiveConsoleHeader />
                    <AccordionDetails sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                        <ConsoleTabs />
                        <div className="console-body">
                            <ActivityTerminal />
                            <FindingsLog />
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <ConsoleFooter />
        </>

    );
};

export default LiveConsole;
