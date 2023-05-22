import React, { useState } from "react";

function Speciality() {
  const Styles = {
    main: {
      background: "var(--speciality)",
      padding: "10px",
      textAlign: "center",
      color: "#fff",
    },
    mainHover: {
      background: "var(--NavContact)",
      padding: "10px",
      textAlign: "center",
      cursor: "pointer",
      color: "#fff",
    },
  };

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      <h4
        style={hover ? Styles.mainHover : Styles.main}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        I specialize in organizing individual and group hiking trips
      </h4>
    </div>
  );
}

export default Speciality;
