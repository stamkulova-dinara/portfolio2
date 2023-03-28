import { Button } from "../Button";
import "./style.css";

export const AboutContent = () => {
  return (
    <div className="container">
      <div className="boxs box1">
        <div className="boxs_theme">
          <h3 className="box__title">My story</h3>
        </div>
        <div className="box__content">
          <p>
            I've been working as a frontend developer in IT for more than 1 year
            <br />
            <br />I learned React, Redux, Js, Html, CSS on the course Later,
            while working at work, I learned Typescript, webpack, next js,
            graphQL, apollo on my own.
            <br /> <br />
            I'm tech-savvy person with a strong interest in frontend development
            and an ability to learn and quickly adapt to emerging new
            technologies
          </p>
          <Button children="View my CV/Resume" />
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
              <li>HTML5 / Pug</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Responsive</li>
              <li>Redux / Redux toolkit / RTK Query </li>
              <li>TypeScript</li>
              <li>Next js</li>
              <li>CSS3 / CSS modules / SASS / SCSS</li>
              <li>Styled components</li>
              <li>Bootstrap / Material UI / Ant design</li>
              <li>Rest API / Axios</li>
              <li>GraphQL / Apollo</li>
            </ul>
          </div>
          <div>
            <p>Project Management</p>
            <ul className="project">
              <li>Agile</li>
              <li>Lean</li>
              <li>Waterfall</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
