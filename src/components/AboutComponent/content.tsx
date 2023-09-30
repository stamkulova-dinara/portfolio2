import { Button } from "../Button";
import "./style.css";
import s from "../../assets/Nurzada's Resume.pdf"

export const AboutContent = () => {
  return (
    <div className="container">
      <div className="boxs box1">
        <div className="boxs_theme">
          <h3 className="box__title">About me</h3>
        </div>
        <div className="box__content">
          <p>
            {/* I've been working as a frontend developer in IT for more than 1 year
            <br /> 
            <br /> */}I'm a Front-end developer with 1,5 years of real-world project experience, including building reusable and gorgeous UI components using
Agile Methodologies
            <br /> <br />
            I'm tech-savvy person with a strong interest in frontend development
            and an ability to learn and quickly adapt to emerging new
            technologies
          </p>
          {/* <Button children="Download my CV/Resume"></Button> */}
          <button className="btn">
          <a href={s} download>Download my CV/Resume</a>
          </button>
        </div>
      </div>
      <hr />
      <div className="boxs">
        <div className="boxs_theme">
          <h3 className="box__title">Skills & Expertise</h3>
        </div>
        <div className="box__content skills">
          <div>
            <p>Website Development</p>
            <ul>
              <li>HTML5 </li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Responsive</li>
              <li>Redux / Redux toolkit </li>
              <li>CSS3 / SASS / SCSS</li>
              <li>Styled components</li>
              <li>Bootstrap / Material UI / Ant design</li>
              <li>Rest API / Axios</li>
            </ul>
          </div>
          <div>
            <p>Project Management</p>
            <ul className="project">
              <li>Agile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
