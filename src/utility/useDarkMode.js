import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
  useEffect(() => {
    if (darkMode) {
      // add the darkmode class to the body element
      document.body.classList.add("dark-mode");
    } else {
      // Remove the darkmode class from the body element
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
