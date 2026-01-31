import { Box } from "@mui/material";
import RightHead from "../Header/RightHead";
import LeftHead from "../Header/LeftHead";
import RightAboutMe from "./Components/RightAboutMe";
import LeftAboutMe from "./Components/LeftAboutMe";

export default function AboutMe() {
  return (
    <>
      {" "}
      <Box
        sx={{
          flex: 1,
          textAlign: "left",
          height: "70%",
          mb: { xs: 12 },
          ml: { lg: 10 },
        }}
      >
        <RightAboutMe />
      </Box>{" "}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
          position: "relative",
        
          mb: { sm: 7 },
        }}
      >
        <LeftAboutMe />
      </Box>
    </>
  );
}
