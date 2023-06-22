


import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";


import pxToRem from "assets/theme/functions/pxToRem";

const { dark } = colors;
const { size, fontWeightBold } = typography;

export default {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
    },

    label: {
      display: "inline-block",
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: dark.main,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),

      "&.Mui-disabled": {
        color: dark.main,
      },
    },
  },
};
