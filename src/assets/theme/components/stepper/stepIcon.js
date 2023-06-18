

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Vision UI Dashboard React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";

const { dark, white } = colors;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      background: white.main,
      fill: white.main,
      stroke: white.main,
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      border: `${borderWidth[2]} solid ${borderColor}`,
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",

      "&.Mui-active": {
        background: dark.main,
        fill: dark.main,
        stroke: dark.main,
        borderColor: dark.main,
        boxShadow: boxShadow([0, 0], [0, 2], dark.main, 1),
      },

      "&.Mui-completed": {
        background: dark.main,
        fill: dark.main,
        stroke: dark.main,
        borderColor: dark.main,
        boxShadow: boxShadow([0, 0], [0, 2], dark.main, 1),
      },
    },
  },
};
