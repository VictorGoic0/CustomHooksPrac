import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = element => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  useEffect(() => {
    if (darkMode) {
      // add the darkmode class to the body element
      element.classList.add("dark-mode");
    } else {
      // Remove the darkmode class from the body element
      element.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
