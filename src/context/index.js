
/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, useContext, useReducer } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// The Vision UI Dashboard  Material main context
const VisionUI = createContext();

// Setting custom name for the context which is visible on react dev tools
VisionUI.displayName = "VisionUIContext";

// Vision UI Dashboard React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "SELECTED_CATEGORY": {
      return {...state, category: action.value };
    }
    case "SEARCH": {
      return {...state, search: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Vision UI Dashboard React context provider
function VisionUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: true,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    category: "All Tools",
    search: ""
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  return <VisionUI.Provider value={[controller, dispatch]}>{children}</VisionUI.Provider>;
}

// Vision UI Dashboard React custom hook for using context
function useVisionUIController() {
  const context = useContext(VisionUI);

  if (!context) {
    throw new Error("useVisionUIController should be used inside the VisionUIControllerProvider.");
  }

  return context;
}

// Typechecking props for the VisionUIControllerProvider
VisionUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch, value) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (dispatch, value) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
const setSelectedCategory = (dispatch, value) => dispatch({ type: "SELECTED_CATEGORY", value });
const setSearch = (dispatch, value) => dispatch({ type: "SEARCH", value });

export {
  VisionUIControllerProvider,
  useVisionUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setSelectedCategory,
  setSearch
};
