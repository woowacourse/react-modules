import { useContext } from "react";
import { ThemeContext } from "../components/contextProvider/ThemeProvider";

const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  if (!theme) return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  return theme;
};

export default useThemeContext;
