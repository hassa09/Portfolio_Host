import "../portfolio.css";
import Tab from "../TabComponent/Tab";

function PortfolioSection () {
    return (
        <div className="portfolio-section-container">
            <div className="portfolio-section-banner"> 
                <div className="portfolio-section-header">Portfolio</div>
                <div className="portfolio-section-tab">
                    {/* <Tab /> */}
                </div>
            </div>
            <div className="portfolio-section-main"> 
                <Tab /> 
            </div>
        </div>
    );
}

export default PortfolioSection

// TABS TUTORIAL: https://blog.logrocket.com/how-to-build-tab-component-react/