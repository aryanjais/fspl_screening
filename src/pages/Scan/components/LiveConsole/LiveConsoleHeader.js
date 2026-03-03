import React from 'react';
import { AccordionSummary, Typography, Box, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const LiveConsoleHeader = () => {
    return (
        <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#94a3b8' }} />}
            aria-controls="live-console-content"
            id="live-console-header"
            sx={{
                borderBottom: '1px solid #e2e8f0',
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
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#1a9e8e' }} />
                <Typography sx={{ fontWeight: 600, color: '#0f172a', fontSize: '15px' }}>Live Scan Console</Typography>

                <Box sx={{
                    ml: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    bgcolor: '#f1f5f9',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '16px'
                }}>
                    <AccessTimeOutlinedIcon sx={{ fontSize: 14, color: '#64748b' }} />
                    <Typography sx={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>Running...</Typography>
                </Box>
            </Box>

            <Box sx={{ position: 'absolute', right: 16, display: 'flex', alignItems: 'center' }}>
                <IconButton size="small" onClick={(e) => e.stopPropagation()} sx={{ color: '#94a3b8' }}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
        </AccordionSummary>
    );
};

export default LiveConsoleHeader;
