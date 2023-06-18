import { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Vision UI Dashboard React context
import { useVisionUIController, setMiniSidenav, setTransparentSidenav } from "context";

// Vision UI Dashboard React icons

// function Sidenav({ color, brand, brandName, routes, ...rest }) {
function Sidenav({ color, brandName, routes, ...rest }) {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  useEffect(() => {
    if (window.innerWidth < 1440) {
      setTransparentSidenav(dispatch, false);
    }
  }, []);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ tag, emoji }) => {
    let returnValue;

    returnValue = (
      <Link
          key={tag}
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            color={color}
            name={tag}
            icon={emoji}
            // active={key === collapseName}
            // noCollapse={noCollapse}
          />
        </Link>
    )

    return returnValue;
  });

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      <VuiBox
        pt={0}
        pb={0}
        px={4}
        textAlign="center"
        sx={{
          overflow: "unset !important",
        }}
      >
        <VuiBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <VuiTypography variant="h6" color="text">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </VuiTypography>
        </VuiBox>
       
      </VuiBox>
      <List>{renderRoutes}</List>
      <VuiBox
        my={2}
        mx={2}
        mt="auto"
        sx={({ breakpoints }) => ({
          [breakpoints.up("xl")]: {
            pt: 2,
          },
          [breakpoints.only("xl")]: {
            pt: 1,
          },
          [breakpoints.down("xl")]: {
            pt: 2,
          },
        })}
      >
  
      </VuiBox>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  // brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  // brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
