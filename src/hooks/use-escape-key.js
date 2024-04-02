import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        callback(e);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

export default useEscapeKey;
