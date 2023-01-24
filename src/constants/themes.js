import { purple, neutral } from "./colors";
import { fontSize, fontFamily } from "./typography";

const theme = {
  fontSize,
  fontFamily,
};

const darkTheme = {
  ...theme,
  colors: {
    bg: neutral[300],
    text: neutral[100],
    linkText: purple[400],
    primary: purple[400],
    disabled: neutral[200],
  },
};

const lightTheme = {
  ...theme,
  colors: {
    bg: neutral[100],
    text: neutral[300],
    linkText: purple[400],
    primary: purple[400],
    disabled: neutral[200],
  },
};

export default { darkTheme, lightTheme };
