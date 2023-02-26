import React from "react";
import Email from "../components/Email";
import Header from "../components/headers/Header";
import Footer from "../components/Footer";

const Contact = (props) => {
  return (
    <React.Fragment>
      <meta
        name="viewport"
        content="width=device-width,
                       initial-scale=1"
      />
      <Header />
      <Email />
      <Footer />
    </React.Fragment>
  );
};

// App
export default Contact;
