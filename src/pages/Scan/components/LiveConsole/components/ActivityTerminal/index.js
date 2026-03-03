import React from 'react';
import './ActivityTerminal.css';

const logData = [
    {
        time: '09:00:00',
        content: <>I'll begin a systematic penetration test on <span className="highlight-url">helpdesk.democorp.com</span>. Let me start with reconnaissance and enumeration.</>
    },
    {
        time: '09:01:00',
        content: <>Good! target is online. Now let me perform port scanning to identify running services.</>
    },
    {
        time: '09:02:00',
        content: <>
            Excellent reconnaissance results:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;<span className="dim-text">- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)</span><br />
            Let me probe the web server on target first to understand its structure.
        </>
    },
    {
        time: '09:03:00',
        content: <>Great! I found a login page for a Help Desk Platform. I can see a useful comment: <span className="highlight-code">"TODO: Delete the testing account (test:test)"</span>. Let me test this credential. The login redirects to <span className="highlight-path">/password/test</span>. Let me follow that path and explore it.</>
    },
    {
        time: '09:04:00',
        content: <>The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to <span className="highlight-path">'#'</span> which means the current page. Let me try a different approach.</>
    },
    {
        time: '09:05:00',
        content: <>It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the <span className="highlight-code">test:test</span> password directly on other endpoints.</>
    },
    {
        time: '09:06:00',
        content: <>Great! I can access the dashboard using the <span className="highlight-code">'X-UserId: 10032'</span> header. The dashboard shows "Welcome, John Doe". This suggests an <span className="highlight-error">**IDOR vulnerability**</span> - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...</>
    }
];

const ActivityTerminal = () => {
    return (
        <div className="activity-terminal">
            {logData.map((log, index) => (
                <div key={index} className="log-entry">
                    <span className="log-time">[{log.time}]</span>
                    <span className="log-content">{log.content}</span>
                </div>
            ))}
        </div>
    );
};

export default ActivityTerminal;
