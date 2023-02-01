import { IconContext } from "react-icons";
import { FaPlay, FaPause } from "react-icons/fa";

const Icon = () => {
  return (
    <IconContext.Provider
      value={{
        style: {
          fontSize: "27px",
          color: "rgb(256, 256, 256)",
        },
      }}
    >
      <div>
        <FaPlay />
        <FaPause />
      </div>
    </IconContext.Provider>
  );
};

export default Icon;
