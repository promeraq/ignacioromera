import React, { useState } from "react";

import { send } from "emailjs-com";

import classes from "./Email.module.css";

const Email = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    /* to_name: "", */
    message: "",
    email: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    /* send('SERVICE ID','TEMPLATE ID',formData,'User ID') */
    send("service_1qd4d1g", "template_xm1t6hj", formData, "CEWnXVxuSFNlVgdiD")
      /* send("service_d3s6krh", "template_ushzulp", formData, "TeCcrNiEXQ1XtIpxD") */
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setFormData({
      from_name: "",
      message: "",
      email: "",
    });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <div className={classes.body}>
        <h1 className={classes.hi}>Hi there !</h1>
        <p className={classes.p}>
          Got a project to discuss? <br /> Fill out the form and I'll get back
          to you ASAP
        </p>
        <form className={classes.form} onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            value={formData.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className={classes.message}
            type="text"
            name="message"
            rows="5"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button className={classes.bttn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Email;
