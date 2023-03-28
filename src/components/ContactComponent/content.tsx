import { Button } from "../Button";
import "./style.css";

export const ContactComponent = () => {
  return (
    <div className="contact">
      <div className="contact__content">
        <form action="">
            <h3>Get in touch</h3>
            <div className="contact__content__form">
                <label htmlFor="firstname">First name</label>
                <input type="text" id="firstname" />
            </div>
            <div className="contact__content__form">
                <label htmlFor="lastname">Last name</label>
                <input type="text" id="lastname" />
            </div>
            <div className="contact__content__form">
                <label htmlFor="name">Email</label>
                <input type="email" id="email" />
            </div>
            <div className="contact__content__form">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" />
            </div>
            <div className="contact__content__form">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
            </div>
            <Button children="Send enquiry"/>
        </form>
      </div>
    </div>
  );
};
