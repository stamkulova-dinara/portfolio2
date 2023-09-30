import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./style.css";
export const AboutHeader = () => {
  return (
    <div className="component-header wrap">
      <div className="box">
        <h2 className="component-header__title">About</h2>
      </div>
      <div className="about-box">
        <p>
        Hi! My name is Nurzada. I am a front-end developer.
        </p>
        <Link to={"/portfolio"}>
          <Button children="View my work" />
        </Link>
      </div>
    </div>
  );
};
