


import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";


// import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

export default {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};
