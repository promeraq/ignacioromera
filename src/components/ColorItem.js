import React from "react";

import classes from "./ColorItem.module.css";

const ColorItem = (props) => {
  return (
    <React.Fragment>
      <div className={classes.body}>
        <h3 className={classes.number}>{props.number}</h3>
        <div className={classes.color}>
          <img src={props.image} alt="img" className={classes.img} />
        </div>
        <h4 className={classes.name}>{props.name}</h4>
      </div>
    </React.Fragment>
  );
};

// Color
export default ColorItem;
