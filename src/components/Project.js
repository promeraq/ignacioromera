import React, { useState } from "react";

import classes from "./Project.module.css";

const Project = (props) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <React.Fragment>
      <div className={classes.project}>
        <h3 className={classes.number}>{props.number}</h3>
        <div className={classes.image}>
          {showVideo ? (
            <iframe
              className={classes.video}
              title={props.name}
              src={props.video_id}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              className={classes.img}
              src={props.image}
              alt={props.name}
              onClick={() => setShowVideo(true)}
            />
          )}
        </div>
        <h4 className={classes.name} onClick={() => setShowVideo(false)}>
          {props.name}
        </h4>
      </div>
    </React.Fragment>
  );
};

// App
export default Project;
