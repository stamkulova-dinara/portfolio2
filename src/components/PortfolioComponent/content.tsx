import { ProjectsCard } from "../Projects/component/ProjectsCard";
import math from "../../assets/math-game.jpg";
import seoflow from "../../assets/seoflow.png";
import happy from "../../assets/happy.png";
import countries from "../../assets/countries.jpg";
import "./style.css";

export const PortfolioContent = () => {
  return (
    <div className="portfolio-con">
        <div className="portfolio-con__theme">
            <h3 className="portfolio_title">My personal projects</h3>
        </div>
    
      <ProjectsCard
        link="https://polite-griffin-e2d32a.netlify.app/"
        photo={math}
        title="Math game"
        descB={true}
        desc="Math Game - online that practice math skills using fun interactive content."
        tools="Built using HTML, CSS, JavaScript, Webpack."
      />
      <ProjectsCard
        link="https://nurzada13.github.io/SEOFlow/"
        photo={seoflow}
        title="SEOFlow"
        descB={true}
        desc="This responsive, single-page website"
        tools="Built using HTML, CSS and JavaScript"
        left={true}
      />
      <ProjectsCard
        link="https://happy-application.netlify.app/"
        photo={happy}
        title="H(app)y"
        descB={true}
        desc=""
        tools="Built using HTML, CSS, JavaScript and Webpack."
      />
       <ProjectsCard
        link="https://gentle-dodol-2c4f7c.netlify.app/"
        photo={countries}
        title="Countries"
        descB={true}
        desc=""
        tools="Built using Typescript, CSS, React and Apollo."
        left={true}
      />
    </div>
  );
};
