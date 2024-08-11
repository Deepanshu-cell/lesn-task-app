import {
  getLocalStorage,
  isLocalStorageEmpty,
  setLocalStorage,
} from "@/lib/utils";
import { createContext, useEffect, useState } from "react";

const MyThemeContext = createContext({
  isDarkTheme: false,
  toggleThemeHandler: () => {},
});

export function MyThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => initialThemeHandler(), []);

  //   This function will handle theme initially when page loads or refresh
  const initialThemeHandler = () => {
    if (isLocalStorageEmpty("isDarkTheme")) {
      localStorage.setItem("isDarkTheme", `false`);
    } else {
      const isDarkTheme = getLocalStorage("isDarkTheme");

      if (isDarkTheme) {
        document?.querySelector("html")?.classList?.add("dark");
        setIsDarkTheme(true);
      }
    }
  };

  //   This will toggle theme accordingly if it's dark then turns light and vice versa
  const toggleThemeHandler = () => {
    const isDarkTheme = getLocalStorage("isDarkTheme");

    // Getting from local storage toggling and then modifying html , storing to local state and storage
    setIsDarkTheme(!isDarkTheme);
    document?.querySelector("html")?.classList?.toggle("dark");
    setLocalStorage(!isDarkTheme);
  };

  return (
    <MyThemeContext.Provider
      value={{ isDarkTheme: false, toggleThemeHandler }}
    >
        {props.children}
    </MyThemeContext.Provider>
  );
}
