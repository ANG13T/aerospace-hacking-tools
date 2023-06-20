import Grid from "@mui/material/Grid";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Dashboard layout components
import VuiInput from "components/VuiInput";
import projects from "data/projects";
import categories from "data/categories";

// Data
import globe from "assets/images/globe.png";

import {
  useVisionUIController
} from "context";


const tagsToString = (tags) => {
  let output = "";
  tags.forEach((tag, i) => {
    if (i != tags.length - 1 && tags.length != 0) {
      output += tag + ", ";
    } else {
      output += tag;
    }
  })
  console.log("o", output, tags)
  return output
}

const generateCards = (selectedTag) => {
  return projects.filter(project => project.tags.includes(selectedTag) || selectedTag == "All Tools").map((proj, i) => (
    <Grid item xs={12} md={6} xl={4} key={i}>
  <DefaultProjectCard
          image={require(`../../assets/tools/${proj.image}`).default}
          label={tagsToString(proj.tags)}
          title={proj.name}
          description={proj.description}
          action={{
            route: proj.website,
            color: "white",
            label: "VIEW ALL",
          }}
        />
  </Grid>
  ))
}


function Dashboard() {
  const { gradients } = colors;
  const [controller] = useVisionUIController();
  const { direction, category } = controller;

  return (
    <DashboardLayout>
      <VuiBox display="flex"
        justifyContent="center"
        alignItems="center" flexDirection="column"
        marginBottom="20px">
        <VuiBox
          component="img"
          src={globe}
          alt="pattern-lines"
          width="15rem"
          textAlign="center"
          opacity={0.8}
        />
        <VuiTypography color="white" variant="h2" fontWeight="bold" mb="10px" textAlign="center" marginTop="25px" fontFamily="nulshock">
          Aerospace Hacking Tools
        </VuiTypography>
        <VuiTypography color="white" variant="p" mb="18px" textAlign="center" fontFamily="Spacemono">
          A comprehensive collection of space-related cybersecurity tools
        </VuiTypography>
        <VuiInput
        placeholder="Search for tools..."
        icon={{ component: "search", direction: "left" }}
        marginTop="25px"
        sx={({ breakpoints }) => ({
          [breakpoints.down("sm")]: {
            maxWidth: "80px",
          },
          [breakpoints.only("sm")]: {
            maxWidth: "80px",
          },
          backgroundColor: "info.main !important",
        })}
      />
      </VuiBox>
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            {generateCards(category)} 
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
