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

// Data
import globe from "assets/images/globe.png";

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
            <Grid item xs={12} md={6} xl={4}>
            <DefaultProjectCard
                    image={profile1}
                    label="project #2"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                  />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
            <DefaultProjectCard
                    image={profile1}
                    label="project #2"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                  />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
               <DefaultProjectCard
                    image={profile1}
                    label="project #2"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                  />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
            <DefaultProjectCard
                    image={profile1}
                    label="project #2"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                  />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
