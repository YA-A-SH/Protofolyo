import { Box, Grid } from "@mui/material";
import RightProj from "./Components/RightProj";
import LeftProj from "./Components/LeftProj";

export default function MyProjects() {
  return (
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
        // p: 4,
      }}
    >
      <RightProj />
      <LeftProj />
    </Box>
  );
}
