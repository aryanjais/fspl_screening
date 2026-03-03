import React, { Fragment } from 'react';
import './Stats.css';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import StatItem from './StatItem';

const statData = [
    { label: 'Org:', value: 'Project X' },
    { label: 'Owner:', value: 'Nammagiri' },
    { label: 'Total Scans:', value: '100' },
    { label: 'Scheduled:', value: '1000' },
    { label: 'Rescans:', value: '100' },
    { label: 'Failed Scans:', value: '100' }
];

const Stats = () => {
    return (
        <div className="dashboard-stats">
            {statData.map((stat, index) => (
                <Fragment key={index}>
                    <StatItem label={stat.label} value={stat.value} />
                    {index < statData.length - 1 && <div className="stat-divider"></div>}
                </Fragment>
            ))}

            <div className="stat-spacer"></div>

            <div className="stat-last-updated">
                <LoopOutlinedIcon fontSize="small" className="update-icon" />
                <span>10 mins ago</span>
            </div>
        </div>
    );
};

export default Stats;
