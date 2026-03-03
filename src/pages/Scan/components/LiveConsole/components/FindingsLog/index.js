import React from 'react';
import './FindingsLog.css';

const findingsData = [
    {
        severity: 'Critical',
        title: 'SQL Injection in Authentication Endpoint',
        path: '/api/users/profile',
        time: '16:45:23',
        description: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.',
        className: 'critical'
    },
    {
        severity: 'High',
        title: 'Unauthorized Access to User Metadata',
        path: '/api/auth/login',
        time: '16:45:23',
        description: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
        className: 'high'
    },
    {
        severity: 'Medium',
        title: 'Broken Authentication Rate Limiting',
        path: '/api/search',
        time: '16:45:23',
        description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
        className: 'medium'
    }
];

const FindingsLog = () => {
    return (
        <div className="findings-log">
            <div className="findings-header">
                <span className="findings-title">Finding Log</span>
            </div>
            <div className="findings-list">
                {findingsData.map((finding, index) => (
                    <div key={index} className="finding-card">
                        <div className="finding-header-row">
                            <span className={`severity-badge ${finding.className}`}>{finding.severity}</span>
                            <span className="finding-time">{finding.time}</span>
                        </div>
                        <h4 className="finding-card-title">{finding.title}</h4>
                        <span className="finding-path">{finding.path}</span>
                        <p className="finding-desc">{finding.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindingsLog;
