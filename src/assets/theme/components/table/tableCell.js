


import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";


import pxToRem from "assets/theme/functions/pxToRem";

const { borderWidth } = borders;
const { light } = colors;

export default {
  styleOverrides: {
    root: {
      backgroundColor: `${light.main} !important`,
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      "& .MuiBox-root": {
        pl: "0px !important",
      },
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};
