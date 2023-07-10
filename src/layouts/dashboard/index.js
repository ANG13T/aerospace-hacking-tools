import Grid from "@mui/material/Grid";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// Dashboard layout components
import VuiInput from "components/VuiInput";
import projects from "data/projects";

// Assets
import globe from "assets/images/globe.png";

import { useVisionUIController, setSearch } from "context";

const tagsToString = (tags) => {
  return tags.join(', ');
};

const sortCardsByDate = (projects) => {
  return [...projects].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
};

const filterProjectsByQuery = (project, query, selectedTag) => {
  const isQueryEmpty = query.length === 0;
  const isProjectMatchTag = project.tags.includes(selectedTag);
  const isAllToolsSelected = selectedTag === "All Tools";
  const doesProjectMatchQuery = project.name.toLowerCase().includes(query.toLowerCase());

  return (
    (isQueryEmpty && (isProjectMatchTag || isAllToolsSelected)) ||
    (!isQueryEmpty && doesProjectMatchQuery)
  );
};

const generateCardElement = (proj, i) => (
  <Grid item xs={12} md={6} xl={4} key={i}>
    <DefaultProjectCard
      image={`/tools/${proj.image}`}
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

const generateCards = (selectedTag, query) => {
  const sortedProjects = sortCardsByDate(projects);
  const filteredProjects = sortedProjects
    .filter((project) => filterProjectsByQuery(project, query, selectedTag));

  return filteredProjects.map(generateCardElement);
};

function Dashboard() {
  const [controller, dispatch] = useVisionUIController();
  const { category, search } = controller;

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearch(dispatch, value);
  };

  return (
    <DashboardLayout>
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginBottom="20px"
      >
        <VuiBox
          component="img"
          src={globe}
          alt="pattern-lines"
          width="15rem"
          textAlign="center"
          opacity={0.8}
        />
        <VuiTypography
          color="white"
          variant="h2"
          fontWeight="bold"
          mb="10px"
          textAlign="center"
          marginTop="25px"
          fontFamily="nulshock"
        >
          Aerospace Hacking Tools
        </VuiTypography>
        <VuiTypography
          color="white"
          variant="p"
          mb="18px"
          textAlign="center"
          fontFamily="Spacemono"
        >
          A comprehensive collection of space-related cybersecurity tools
        </VuiTypography>
        <VuiInput
          placeholder="Search for tools..."
          icon={{ component: "search", direction: "left" }}
          marginTop="25px"
          onChange={handleSearchChange}
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
            {generateCards(category, search)}
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
