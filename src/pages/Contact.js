import React from "react";
import Email from "../components/Email";
import MainHeader from "../components/headers/MainHeader";
import MenuHeader from "../components/headers/MenuHeader";
import Footer from "../components/Footer";

const Contact = (props) => {
  return (
    <React.Fragment>
      <MainHeader />
      <MenuHeader />
      <Email />
      <Footer />
    </React.Fragment>
  );
};

// App
export default Contact;
