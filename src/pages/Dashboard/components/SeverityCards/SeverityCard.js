import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const SeverityCard = ({ title, type, icon: Icon, number, trend, trendText }) => {
    return (
        <div className="severity-card">
            <div className="card-top">
                <span className="card-title">{title}</span>
                <div className={`card-icon ${type}`}>
                    <Icon fontSize="small" />
                </div>
            </div>
            <div className="card-bottom">
                <span className="card-number">{number}</span>
                <div className={`card-trend ${trend}`}>
                    {trend === 'increase' ? (
                        <ArrowUpwardOutlinedIcon className="trend-icon" />
                    ) : (
                        <ArrowDownwardOutlinedIcon className="trend-icon" />
                    )}
                    <span>{trendText}</span>
                </div>
            </div>
        </div>
    );
};

export default SeverityCard;