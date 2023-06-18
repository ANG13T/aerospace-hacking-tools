

function navbar(theme, ownerState) {
  const { palette, boxShadows, functions, transitions, breakpoints, borders } = theme;
  const { transparentNavbar, absolute, light } = ownerState;

  const { dark, white, text, transparent, gradients, borderCol } = palette;
  const { navbarBoxShadow } = boxShadows;
  const { linearGradient, pxToRem } = functions;
  const { borderRadius } = borders;

  return {
    boxShadow: transparentNavbar || absolute ? "none" : navbarBoxShadow,
    backdropFilter: transparentNavbar || absolute ? "none" : `blur(${pxToRem(42)})`,
    backgroundColor: `${transparent.main} !important`,
    backgroundImage:
      transparentNavbar || absolute
        ? `none`
        : `${linearGradient(
            gradients.navbar.main,
            gradients.navbar.state,
            gradients.navbar.deg
          )} !importants`,

    color: () => {
      let color;

      if (light) {
        color = white.main;
      } else if (transparentNavbar) {
        color = text.main;
      } else {
        color = dark.main;
      }
      color = white.main;
      return color;
    },
    top: absolute ? 0 : pxToRem(12),
    minHeight: pxToRem(75),
    display: "grid",
    alignItems: "center",

    borderRadius: borderRadius.xl,
    borderColor:
      transparentNavbar || absolute
        ? `${transparent.main} !important`
        : `${borderCol.navbar} !important`,
    paddingTop: pxToRem(8),
    paddingBottom: pxToRem(8),
    paddingRight: absolute ? pxToRem(8) : 0,
    paddingLeft: absolute ? pxToRem(16) : 0,

    "& > *": {
      transition: transitions.create("all", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      [breakpoints.up("sm")]: {
        minHeight: "auto",
        padding: `${pxToRem(4)} ${pxToRem(16)}`,
      },
    },
  };
}

const navbarContainer = ({ breakpoints }) => ({
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  pt: 0.5,
  pb: 0.5,

  [breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "0",
    paddingBottom: "0",
  },
});

const navbarRow = ({ breakpoints, palette: { white } }, { isMini }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  "&.MuiBox-root": {
    "& nav": {
      "& ol": {
        "& li": {
          "&.MuiBreadcrumbs-li": {
            "& a": {
              "& span": {
                color: white.main,
              },
            },
          },
          "&.MuiBreadcrumbs-li span.MuiTypography-button": {
            color: white.main,
          },
          "&.MuiBreadcrumbs-separator": {
            color: white.main,
          },
        },
      },
    },
  },
  "& h6": {
    color: "rgb(255,255,255)",
  },

  [breakpoints.up("md")]: {
    justifyContent: isMini ? "space-between" : "stretch",
    width: isMini ? "100%" : "max-content",
  },

  [breakpoints.up("xl")]: {
    justifyContent: "stretch !important",
    width: "max-content !important",
  },
});

const navbarIconButton = ({ typography: { size }, breakpoints, palette: { grey, white } }) => ({
  px: 0.75,

  "& .material-icons, .material-icons-round": {
    fontSize: `${size.md} !important`,
    color: white.main,
  },

  "& .MuiTypography-root": {
    display: "none",
    color: white.main,

    [breakpoints.up("sm")]: {
      display: "inline-block",
      lineHeight: 1.2,
      ml: 0.5,
    },
  },
});

const navbarMobileMenu = ({ breakpoints, palette: { white } }) => ({
  display: "inline-block",
  lineHeight: 0,
  color: white.main,

  [breakpoints.up("xl")]: {
    display: "none",
  },
});

export { navbar, navbarContainer, navbarRow, navbarIconButton, navbarMobileMenu };
