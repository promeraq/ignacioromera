import React from "react";

import classes from "./PhotoItem.module.css";

const PhotoItem = (props) => {
  return (
    <React.Fragment>
      <body className={classes.body}>
        <h3>{props.number}</h3>
        <div className={classes.div}>
          <img src={props.image} alt="img" className={classes.image} />
        </div>
        <h4>{props.name}</h4>
      </body>
    </React.Fragment>
  );
};

// App
export default PhotoItem;
