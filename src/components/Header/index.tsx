import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header className={`${mobile ? "mob-header" : "header"}`}>
      <nav>
        <div className="header__logo">S D</div>
        <ul className="header__menu">
          <li className="header__menu__item">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="header__menu__item">
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="header__menu__item">
            <NavLink
              to={"/portfolio"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="header__menu__item">
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__mobile">
        <FontAwesomeIcon icon={faBars} onClick={() => setMobile(!mobile)} />
      </div>
    </header>
  );
};
