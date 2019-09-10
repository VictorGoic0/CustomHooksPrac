import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = boolean => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", boolean);
  useEffect(() => {
    if (darkMode) {
      // add the darkmode class to the body element
    } else {
      // Remove it
    }
  }, [darkMode]);
};

export default useDarkMode;
