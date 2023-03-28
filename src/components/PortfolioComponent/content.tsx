import { ProjectsCard } from "../Projects/component/ProjectsCard";
import business from "../../assets/screen.png";
import seoflow from "../../assets/seoflow.png";
import happy from "../../assets/happy.png";
import pomodoro from "../../assets/pomodoro.png";
import "./style.css";

export const PortfolioContent = () => {
  return (
    <div className="portfolio-con">
        <div className="portfolio-con__theme">
            <h3>My pet projects</h3>
        </div>
    
      <ProjectsCard
        link="https://tiny-cascaron-f55b43.netlify.app/"
        photo={business}
        title="Бизнес практика"
        descB={true}
        desc="Using live data via an API this application can recall the weather conditions from user inputted cities or by the user's current location coordinates."
        tools="Built using Pug, SCSS, JavaScript, Webpack and Bootstrap."
      />
      <ProjectsCard
        link="https://stamkulova-dinara.github.io/SEOFlow/"
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
        link="https://stamkulova-dinara.github.io/Pomodoro-App/"
        photo={pomodoro}
        title="Pomodoro"
        descB={true}
        desc="An analogue of the pomodoro time managment"
        tools="Built using JavaScript, CSS, React and Redux."
        left={true}
      />
    </div>
  );
};
