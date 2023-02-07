import React, { useState } from "react";

import { send } from "emailjs-com";

import classes from "./Email.module.css";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();
  const [toSend, setToSend] = useState({
    from_name: "",
    /* to_name: "", */
    message: "",
    reply_to: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    send("service_d3s6krh", "template_ushzulp", toSend, "TeCcrNiEXQ1XtIpxD")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    navigate("/ignacioromera");
  };

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <h1>Hi there !</h1>
      <p>
        Got a project to discuss? <br /> Fill out the form and I'll get back to
        you ASAP
      </p>
      <form className={classes.form} onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange}
        /> */}
        <input
          type="text"
          name="reply_to"
          placeholder="Email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={toSend.message}
          onChange={handleChange}
        />

        <button className={classes.bttn} type="submit">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default Email;
