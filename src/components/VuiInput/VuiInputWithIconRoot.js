

import { styled } from "@mui/material/styles";

export default styled("div")(({ theme, ownerState }) => {
  const { palette, functions, borders } = theme;
  const { error, success, disabled } = ownerState;

  const { inputColors, grey, white } = palette;
  const { pxToRem } = functions;
  const { borderRadius, borderWidth } = borders;

  // border color value
  let borderColorValue = inputColors.borderColor.main;

  if (error) {
    borderColorValue = inputColors.error;
  } else if (success) {
    borderColorValue = inputColors.success;
  }

  return {
    display: "flex",
    alignItems: "center",
    backgroundColor: disabled ? grey[600] : inputColors.backgroundColor,
    border: `${borderWidth[1]} solid`,
    borderRadius: borderRadius.lg,
    borderColor: borderColorValue,
    "& .MuiIcon-root": {
      color: grey[500],
    },

    "& .MuiInputBase-input": {
      color: white.main,
      height: "100%",
      paddingX: pxToRem(20),
      backgroundColor: disabled ? grey[600] : inputColors.backgroundColor,
    },
    "& .MuiInputBase-root": {
      border: `unset`,
      borderRadius: borderRadius.lg,
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      backgroundColor: `${disabled ? grey[600] : inputColors.backgroundColor} !important`,
      "& ::placeholder": {
        color: `${white.main} !important`,
      },
    },
  };
});
