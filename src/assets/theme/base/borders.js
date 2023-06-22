
import colors from "assets/theme/base/colors";

import pxToRem from "assets/theme/functions/pxToRem";

const { borderCol } = colors;

export default {
  borderColor: {
    grey: { borderCol },
    white: "rgba(226, 232, 240, 0.3)",
  },

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(2),
    sm: pxToRem(4),
    md: pxToRem(8),
    button: pxToRem(12),
    lg: pxToRem(15),
    xl: pxToRem(20),
    xxl: pxToRem(24),
    form: pxToRem(24),
    section: pxToRem(160),
  },
};
