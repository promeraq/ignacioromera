import React from "react";

import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <React.Fragment>
      <div className={classes.project}>
        <h3>{props.number}</h3>
        <div className={classes.image}>
          <img src={props.image} alt="img" />
        </div>
        <h4>{props.name}</h4>
      </div>
    </React.Fragment>
  );
};

// App
export default Project;
