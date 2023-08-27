import { purple, neutral } from "./colors";
import { breakpoints } from "./breakpoints";
import { fontSize, fontFamily } from "./typography";

const theme = {
  fontSize,
  fontFamily,
  bp: breakpoints,
};

const darkTheme = {
  ...theme,
  colors: {
    bg: neutral[300],
    text: neutral[100],
    linkText: purple[400],
    primary: purple[400],
    disabled: neutral[200],
    neutralWhite: neutral[100],
    neutralGrayLight: neutral[150],
    neutralGray: neutral[200],
    neutralBlack: neutral[300],
    neutralBlackDarker: neutral[400],
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

const obj = { darkTheme, lightTheme };
export default obj;
