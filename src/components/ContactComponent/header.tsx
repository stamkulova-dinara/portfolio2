import "./style.css";
export const ContactHaeder = () => {
  return (
    <div className="component-header wrap">
      <div className="box">
        <h2 className="component-header__title">Contact</h2>
      </div>
      <div className="contact-box">
        <p>
          If you are interested in working with me, please get in touch via
          email:<br /><a href="mailto:nurzadabaktybekovna01@gmail.com" className="contact-box__email">nurzadabaktybekovna01@gmail.com</a>, or send an enquiry below.
        </p>
      </div>
    </div>
  );
};
