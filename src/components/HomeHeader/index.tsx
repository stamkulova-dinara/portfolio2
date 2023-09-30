import { Button } from "../Button";
import avatar from "../../assets/Nurzada.jpg";
import "./style.css";
import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <div className="component-header">
      <div className="box">
        <h2 className="component-header__title">Nurzada Baktybek Kyzy</h2>
        <p>Front-End Developer</p>
        <Link to={"/about"}>
          <Button children="About me" />
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
