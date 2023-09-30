import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__box">
        <div className="footer__box__text">
          <h3 className="footer__box__title">Connect with me</h3>
          <p className="footer__box__text">Let's work together!</p>
        </div>
        <div className="footer__box__social-icons">
          <a href="mailto:nurzadabaktybekovna01@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+12067171113">
            <FontAwesomeIcon icon={faMobileScreen} />
          </a>
          <a
            href="https://www.linkedin.com/in/nurzada-baktybekovna/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Nurzada13" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};
