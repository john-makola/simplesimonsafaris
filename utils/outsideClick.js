import React, { useState, useRef, useEffect } from "react";

const useOutsideClick = (ref) => {
  const [outSideClick, setOutsideClick] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setOutsideClick(true);
      } else {
        setOutsideClick(false);
      }

      setOutsideClick(null);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return outSideClick;
};
