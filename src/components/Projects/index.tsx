import { ProjectsCard } from "./component/ProjectsCard";
import "./style.css";
import business from "../../assets/screen.png"
import seoflow from "../../assets/seoflow.png"

export const Projects = () => {
  return (
    <div className="projects">
      <h3 className="projects__title">Featured Projects</h3>
      <div className="cards">
        <ProjectsCard link="https://tiny-cascaron-f55b43.netlify.app/" photo={business} title="Бизнес практика" descB={false}/>
        <ProjectsCard link="https://stamkulova-dinara.github.io/SEOFlow/" photo={seoflow} title="SEOFlow landing page" descB={false}/>
      </div>
    </div>
  );
};
