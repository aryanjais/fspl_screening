import React from 'react';

const StatItem = ({ label, value }) => {
    return (
        <div className="stat-item">
            <span className="stat-label">{label}</span>
            <span className="stat-value">{value}</span>
        </div>
    );
};

export default StatItem;
