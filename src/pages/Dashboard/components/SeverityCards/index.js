import React from 'react';
import './SeverityCards.css';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SeverityCard from './SeverityCard';

const cardData = [
    {
        title: 'Critical Severity',
        type: 'critical',
        icon: BlockOutlinedIcon,
        number: 86,
        trend: 'increase',
        trendText: '+2% increase than yesterday',
    },
    {
        title: 'High Severity',
        type: 'high',
        icon: WarningAmberOutlinedIcon,
        number: 16,
        trend: 'increase',
        trendText: '+0.9% increase than yesterday',
    },
    {
        title: 'Medium Severity',
        type: 'medium',
        icon: WarningAmberOutlinedIcon,
        number: 26,
        trend: 'decrease',
        trendText: '+0.9% decrease than yesterday',
    },
    {
        title: 'Low Severity',
        type: 'low',
        icon: SearchOutlinedIcon,
        number: 16,
        trend: 'increase',
        trendText: '+0.9% increase than yesterday',
    },
];

const SeverityCards = () => {
    return (
        <div className="severity-cards">
            {cardData.map((card, index) => (
                <SeverityCard key={index} {...card} />
            ))}
        </div>
    );
};

export default SeverityCards;
