import { PropsWithChildren, createContext } from "react";

interface ThemeProps extends PropsWithChildren {
  value?: ThemeType;
}

export const ThemeContext = createContext<ThemeType | null>(null);

const ThemeProvider: React.FC<ThemeProps> = ({ value, children }) => {
  const THEME = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  return <ThemeContext.Provider value={value ?? THEME}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
