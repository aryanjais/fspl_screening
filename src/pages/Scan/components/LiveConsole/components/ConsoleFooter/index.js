import React from 'react';
import './ConsoleFooter.css';

const ConsoleFooter = () => {
    return (
        <div className="console-footer">
            <div className="footer-left">
                <div className="footer-stat">
                    <span className="dot"></span>
                    <span className="stat-label">Sub-Agents: 0</span>
                </div>
                <div className="footer-stat">
                    <span className="dot"></span>
                    <span className="stat-label">Parallel Executions: 2</span>
                </div>
                <div className="footer-stat">
                    <span className="dot"></span>
                    <span className="stat-label">Operations: 1</span>
                </div>
            </div>

            <div className="footer-right">
                <div className="vuln-stat critical">
                    Critical: <span className="stat-val">0</span>
                </div>
                <div className="vuln-stat high">
                    High: <span className="stat-val">0</span>
                </div>
                <div className="vuln-stat medium">
                    Medium: <span className="stat-val">0</span>
                </div>
                <div className="vuln-stat low">
                    Low: <span className="stat-val">0</span>
                </div>
            </div>
        </div>
    );
};

export default ConsoleFooter;
