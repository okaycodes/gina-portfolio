import { useState } from "react";

export default function useTheme() {
  const [themeMode, setThemeMode] = useState("darkTheme");
  const switchTheme = () => {
    setThemeMode((prev) => (prev === "darkTheme" ? "lightTheme" : "darkTheme"));
  };

  return { themeMode, switchTheme };
}
