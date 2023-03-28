import { Button } from "../Button";
import avatar from "../../assets/avatar2.jpeg";
import "./style.css";
import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <div className="component-header">
      <div className="box">
        <h2 className="component-header__title">Stamkulova Dinara</h2>
        <p>Front-End Developer</p>
        <Link to={"/about"}>
          <Button children="A little bit about me" />
        </Link>
      </div>
      <div className="right-box">
        <div className="avatar-box">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    </div>
  );
};
