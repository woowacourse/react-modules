import { createContext, ReactNode } from "react";
import { THEME_MAP, ThemeMode, ThemeType } from "../constants/theme";

export interface ModalContextType {
  theme: ThemeMode;
  currentTheme: ThemeType;
  onClose: () => void;
}

interface ModalProviderProps {
  theme: ThemeMode;
  onClose: () => void;
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({
  theme,
  onClose,
  children,
}: ModalProviderProps) => {
  const currentTheme = THEME_MAP[theme];

  return (
    <ModalContext.Provider value={{ theme, currentTheme, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};
