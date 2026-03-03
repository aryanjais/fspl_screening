import React from 'react'

const ScanTableRow = ({ row, index }) => {
    return (
        <tr key={index}>
            <td className="row-name">{row.name}</td>
            <td className="row-type">{row.type}</td>
            <td>
                <span className={`status-badge ${row.status.toLowerCase()}`}>
                    {row.status}
                </span>
            </td>
            <td>
                <div className="progress-container">
                    <div className="progress-track">
                        <div className={`progress-bar ${row.status.toLowerCase()}`} style={{ width: `${row.progress}%` }}></div>
                    </div>
                    <span className="progress-text">{row.progress}%</span>
                </div>
            </td>
            <td>
                <div className="vuln-badges">
                    {row.vulns[0] > 0 && <span className="vuln-badge critical">{row.vulns[0]}</span>}
                    {row.vulns[1] > 0 && <span className="vuln-badge high">{row.vulns[1]}</span>}
                    {row.vulns[2] > 0 && <span className="vuln-badge medium">{row.vulns[2]}</span>}
                    {row.vulns[3] > 0 && <span className="vuln-badge low">{row.vulns[3]}</span>}
                </div>
            </td>
            <td className="row-date align-right">{row.lastScan}</td>
        </tr>
    )
}

export default ScanTableRow