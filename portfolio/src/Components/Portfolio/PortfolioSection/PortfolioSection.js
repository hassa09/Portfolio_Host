import PortfolioIndividual from "../PortfolioIndividual/PortfolioIndividual";
import "./PortfolioSection.css"
import Tab from "../TabComponent/Tab";

function PortfolioSection () {
    return (
        <div className="portfolio-section-container">
            <div className="portfolio-section-banner"> 
                <div className="portfolio-section-header">Header</div>
                <div className="portfolio-section-tab">
                    <Tab />
                </div>
            </div>
            <div className="portfolio-section-main"> 
                <PortfolioIndividual />
                <PortfolioIndividual />
                <PortfolioIndividual />
            </div>
        </div>
    );
}

export default PortfolioSection