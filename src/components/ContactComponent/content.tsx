import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { object, string, number } from "yup";
import { Button } from "../Button";
import "./style.css";

const schema = object({
  firstName: string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  phone: number().required("Required"),
  email: string().email("Invalid email address").required("Required"),
  message: string().required("Required"),
});

export const ContactComponent = () => {
  const [value, setValue] = useState("Send enquiry");
  const [succes, setSucces] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const res = await axios.post(
        "https://6422c354001cb9fc202f2501.mockapi.io/api/v1/conatact",
        values
      );
      setValue("processing...");
      if (res.status === 201) {
        setTimeout(() => {
          setSucces(true);
          formik.resetForm();
          setTimeout(() => {
            setValue("Send enquiry");
            setSucces(false);
          }, 500);
        }, 1500);
      }
    },
  });
  return (
    <div className="contact">
      <div className="contact__content">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="contact_title">Get in touch</h3>
          <div className="contact__content__form">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              id="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className={formik.errors.firstName ? "err" : "inp"}
            />
            <p className="contact__content__form__err">
              {formik.errors.firstName}
            </p>
          </div>
          <div className="contact__content__form">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className={formik.errors.lastName ? "err" : "inp"}
            />
            <p className="contact__content__form__err">
              {formik.errors.lastName}
            </p>
          </div>
          <div className="contact__content__form">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={formik.errors.email ? "err" : "inp"}
            />
            <p className="contact__content__form__err">{formik.errors.email}</p>
          </div>
          <div className="contact__content__form">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className={formik.errors.phone ? "err" : "inp"}
            />
            <p className="contact__content__form__err">{formik.errors.phone}</p>
          </div>
          <div className="contact__content__form">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              className={formik.errors.message ? "err" : "inp"}
            ></textarea>
            <p className="contact__content__form__err">
              {formik.errors.message}
            </p>
          </div>
          <Button children={value} />
          {succes && (
            <p className="succes">Your message has been sent successfully</p>
          )}
        </form>
      </div>
    </div>
  );
};
