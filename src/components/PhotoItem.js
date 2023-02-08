import React from "react";

import classes from "./PhotoItem.module.css";

const PhotoItem = (props) => {
  return (
    <React.Fragment>
      <div className={classes.body}>
        <h3>{props.number}</h3>
        <div>
          <img src={props.image} alt="img" className={classes.image} />
        </div>
        <h4>{props.name}</h4>
      </div>
    </React.Fragment>
  );
};

// Photos
export default PhotoItem;
