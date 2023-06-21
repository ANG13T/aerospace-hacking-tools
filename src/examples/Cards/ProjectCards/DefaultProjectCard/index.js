

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function DefaultProjectCard({ image, label, title, description, action, authors }) {

  return (
    <VuiBox
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        overflow: "visible",
        backgroundColor: "#080f30",
        border: "1rem solid #080f30",
        borderRadius: "7px"
      }}
    >
      <VuiBox
        component="img"
        src={image}
        mb="8px"
        borderRadius="15px"
        sx={({ breakpoints }) => ({
          [breakpoints.up("xl")]: {
            height: "200px",
          },
        })}
      />

      <VuiBox
        sx={({ breakpoints }) => ({
          [breakpoints.only("xl")]: {
            minHeight: "200px",
          },
        })}
      >
        <VuiBox mb={1} mt={2}>
            <VuiTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              color="white"
              variant="h5"
              textTransform="capitalize"
              fontFamily="atmospheric"
            >
              {title}
            </VuiTypography>
        </VuiBox>
        <VuiBox lineHeight={0} height={65}>
          <VuiTypography variant="button" fontWeight="regular" color="text"  fontFamily="Spacemono">
            {description}
          </VuiTypography>
        </VuiBox>
        <VuiBox mb={2}>
          <VuiTypography variant="button" sx={{fontSize: "12px"}} color="text" fontWeight="medium" textTransform="capitalize"  fontFamily="Spacemono">
            {label}
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={0}>
          <VuiButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            size="small"
            sx={{width: "100%"}}
            color={action.color}
          >
            VIEW TOOL
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "white",
      "text",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProjectCard;
