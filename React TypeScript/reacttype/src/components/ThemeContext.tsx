import React, { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode; //React Node, herhangi bir React öğesini, bir React öğeleri dizisini veya bir dizeyi, sayıyı veya boolean'ı tutabileceği anlamına gelir.
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
