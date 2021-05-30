import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { useForm } from "react-hook-form";
import { schema } from "../utils/schema";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

export default function contact() {
  const [success, setSuccess] = useState("");

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    setSuccess(<p className="contact__success">Your message has been sent!</p>);
  };

  return (
    <Layout>
      <Head title="Contact" />
      <main className="backgoundImage contact">
        <h1 className="contact__heading">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
          <h2 className="contact__subheading">GET IN TOUCH</h2>
          {success}
          <div className="contact__group">
            <input
              ref={register}
              className="contact__input contact__input--name"
              type="text"
              name="firstName"
              id="contact__input--name"
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="contact__error-message">
                <span className="contact__error-message--asterisk">{"* "}</span>
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="contact__group">
            <input
              ref={register}
              className="contact__input contact__input--last-name"
              type="text"
              name="lastName"
              id="contact__input--last-name"
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="contact__error-message">
                <span className="contact__error-message--asterisk">{"* "}</span>
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="contact__group">
            <input
              className="contact__input contact__input--email"
              type="text"
              name="email"
              ref={register}
              id="contact__input--email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="contact__error-message">
                <span className="contact__error-message--asterisk">{"* "}</span>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="contact__group">
            <textarea
              className="contact__textbox"
              name="message"
              ref={register}
              type="text"
              id="contact__input--textbox"
              placeholder="Message"
            />
            {errors.message && (
              <p className="contact__error-message">
                <span className="contact__error-message--asterisk">{"* "}</span>
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            onClick={() => setSuccess("")}
            className="contact__submit"
          >
            Submit
          </button>
        </form>
      </main>
    </Layout>
  );
}
