import React from 'react';
import { AccordionSummary, Typography, Box, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const LiveConsoleHeader = () => {
    return (
        <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'var(--text-tertiary)' }} />}
            aria-controls="live-console-content"
            id="live-console-header"
            sx={{
                borderBottom: '1px solid var(--border-light)',
                px: 3,
                minHeight: 64,
                '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    m: 0
                },
                '& .MuiAccordionSummary-expandIconWrapper': {
                    mr: 4
                }
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'var(--primary-main)' }} />
                <Typography sx={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '15px' }}>Live Scan Console</Typography>

                <Box sx={{
                    ml: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    bgcolor: 'var(--background-default)',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '16px'
                }}>
                    <AccessTimeOutlinedIcon sx={{ fontSize: 14, color: 'var(--text-secondary)' }} />
                    <Typography sx={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Running...</Typography>
                </Box>
            </Box>

            <Box sx={{ position: 'absolute', right: 16, display: 'flex', alignItems: 'center' }}>
                <IconButton size="small" onClick={(e) => e.stopPropagation()} sx={{ color: 'var(--text-tertiary)' }}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
        </AccordionSummary>
    );
};

export default LiveConsoleHeader;
