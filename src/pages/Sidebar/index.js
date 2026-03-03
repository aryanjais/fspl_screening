import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './sidebar.css';
import ThemeToggle from '../../components/ThemeToggle';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <div className="aps-logo-icon"></div>
                <h2>aps</h2>
                <div className="theme-toggle-wrapper">
                    <ThemeToggle />
                </div>
            </div>

            <div className="sidebar-nav">
                <ul className="sidebar-menu">
                    <li
                        className={`sidebar-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
                        onClick={() => navigate('/dashboard')}
                        title="Dashboard"
                    >
                        <GridViewRoundedIcon fontSize="small" className="sidebar-icon" />
                        <span className="menu-label">Dashboard</span>
                    </li>
                    <li className="sidebar-item" title="Projects">
                        <AssignmentOutlinedIcon fontSize="small" className="sidebar-icon" />
                        <span className="menu-label">Projects</span>
                    </li>
                    <li
                        className={`sidebar-item ${location.pathname.startsWith('/scans') ? 'active' : ''}`}
                        onClick={() => navigate('/scans')}
                        title="Scans"
                    >
                        <AnalyticsOutlinedIcon fontSize="small" className="sidebar-icon" />
                        <span className="menu-label">Scans</span>
                    </li>
                    <li className="sidebar-item" title="Schedule">
                        <CalendarMonthOutlinedIcon fontSize="small" className="sidebar-icon" />
                        <span className="menu-label">Schedule</span>
                    </li>
                </ul>

                <div className="sidebar-spacer"></div>

                <ul className="sidebar-menu">
                    <li className="sidebar-item notifications" title="Notifications">
                        <div className="notification-icon-wrapper">
                            <NotificationsNoneOutlinedIcon fontSize="small" className="sidebar-icon" />
                            <span className="notification-dot"></span>
                        </div>
                        <span className="menu-label">Notifications</span>
                    </li>
                    <li className="sidebar-item" title="Settings">
                        <SettingsOutlinedIcon fontSize="small" className="sidebar-icon" />
                        <span className="menu-label">Settings</span>
                    </li>
                    <li className="sidebar-item" title="Support">
                        <InfoOutlinedIcon fontSize="small" className="sidebar-icon" />
                        <span className="menu-label">Support</span>
                    </li>
                </ul>
            </div>

            <div className="sidebar-profile">
                <div className="profile-avatar">
                    <img src="https://ui-avatars.com/api/?name=Admin&background=f1c40f&color=fff" alt="avatar" />
                </div>
                <div className="profile-info">
                    <span className="profile-email">admin@edu.com</span>
                    <span className="profile-role">Security Lead</span>
                </div>
                <KeyboardArrowRightOutlinedIcon className="profile-arrow" />
            </div>
        </div>
    );
};

export default Sidebar;
