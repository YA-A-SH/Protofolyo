import { Box } from "@mui/material";
import RightAboutMe from "./Components/RightAboutMe";
import LeftAboutMe from "./Components/LeftAboutMe";

export default function AboutMe() {
  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: { xs: "center", lg: "space-evenly" },
          alignItems: "center",
          gap: { xs: 4, md: 5, lg: 0, xl: 35 },
          width: "100%",
          height: "auto",
          p: 4,
        }}
      >
        <RightAboutMe />
        <LeftAboutMe />
      </Box>
    </>
  );
}
