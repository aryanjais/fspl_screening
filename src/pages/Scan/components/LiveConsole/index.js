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
                <Accordion defaultExpanded sx={{ borderRadius: '15px', '&:before': { display: 'none' }, boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' }}>
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
