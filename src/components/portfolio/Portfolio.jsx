import { portfolioData } from "../../data/portfolioData.js";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem.jsx";

const Portfolio = () => {
//   console.log(portfolioData);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container flex-center">
        <SectionTitle title="Portfolio" subTitle="Portfolio" />
        <div className="portfolio-wrapper">
          {portfolioData.map((item, index) => {
            <PortfolioItem key={item.id}/>
            return <PortfolioItem key={item.id} item={item} index ={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
