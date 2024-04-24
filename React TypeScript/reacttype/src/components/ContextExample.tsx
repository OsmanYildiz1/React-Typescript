import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextExample() {
  const theme = useContext(ThemeContext); // theme'in css'lerini artık kullanabiliriz.
  return (
    <div
      style={{
        backgroundColor: theme.secondary.main,
        color: theme.secondary.text,
      }}
    >
      ContextExample
    </div>
  );
}

export default ContextExample;
