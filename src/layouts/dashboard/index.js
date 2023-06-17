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
import profile1 from "assets/images/profile-1.png";
import VuiInput from "components/VuiInput";
import projects from "data/projects";
import categories from "data/categories";

// Data
import globe from "assets/images/globe.png";

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

const cards = projects.map((proj,i) => 
<Grid item xs={12} md={6} xl={4} key={i}>
<DefaultProjectCard
        image={proj.image}
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
);

function Dashboard() {
  const { gradients } = colors;

  return (
    <DashboardLayout>
      <VuiBox display="flex"
        justifyContent="center"
        alignItems="center" flexDirection="column">
        <VuiBox
          component="img"
          src={globe}
          alt="pattern-lines"
          width="15rem"
          textAlign="center"
          opacity={0.8}
        />
        <VuiTypography color="white" variant="h2" fontWeight="bold" mb="18px" textAlign="center" marginTop="20px">
          Aerospace Hacking Tools
        </VuiTypography>
        <VuiInput
        placeholder="Type here..."
        icon={{ component: "search", direction: "left" }}
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
            {cards} 
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
