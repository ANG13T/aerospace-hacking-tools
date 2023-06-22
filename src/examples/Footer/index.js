


import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      direction="row"
      component="footer"
      py={2}
      pb={0}
    >
      <VuiBox item xs={12} sx={{ textAlign: "center" }}>
        <VuiTypography
          variant="button"
          sx={{ textAlign: "center", fontWeight: "200 !important" }}
          color="white"
          fontFamily="Spacemono"
        >
          @ 2023, Made with ✨ by {" "}
          <VuiTypography
            component="a"
            variant="button"
            fontWeight="bold"
            target="_blank"
            href="https:/angelinatsuboi.net/"
            sx={{ textAlign: "center", fontWeight: "700 !important", cursor: "pointer" }}
            color="white"
            mr="2px"
            fontFamily="Spacemono"
          >
            Angelina Tsuboi
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
      <VuiBox item xs={10}>
        <VuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              target="_blank"
              href="https://github.com/ANG13T/aerospace-cybersecurity-tools/blob/main/CONTRIBUTING.md"
              variant="body2"
              color="white"
              fontFamily="Spacemono"
            >
              Submit a Tool
            </VuiTypography>
          </VuiBox>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              target="_blank"
              href="https://github.com/ANG13T/aerospace-cybersecurity-tools"
              variant="body2"
              color="white"
              fontFamily="Spacemono"
            >
              GitHub
            </VuiTypography>
          </VuiBox>
          <VuiBox>
            <VuiTypography
              component="a"
              target="_blank"
              href="https://github.com/ANG13T/aerospace-cybersecurity-tools/blob/main/LICENSE"
              variant="body2"
              color="white"
              fontFamily="Spacemono"
            >
              License
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

export default Footer;
