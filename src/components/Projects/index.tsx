import { ProjectsCard } from "./component/ProjectsCard";
import "./style.css";
import happy from "../../assets/happy.png"
import seoflow from "../../assets/seoflow.png"

export const Projects = () => {
  return (
    <div className="projects">
      <h3 className="projects__title">Featured Projects</h3>
      <div className="cards">
        <ProjectsCard link="https://happy-application.netlify.app/" photo={happy} title="H(app)y" descB={false}/>
        <ProjectsCard link="https://nurzada13.github.io/SEOFlow/" photo={seoflow} title="SEOFlow landing page" descB={false}/>
      </div>
    </div>
  );
};
