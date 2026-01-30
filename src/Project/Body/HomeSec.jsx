import { Box } from "@mui/material";
import RightHead from "../Header/RightHead";
import LeftHead from "../Header/LeftHead";

export default function HomeSec() {
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
        <RightHead />
      </Box>{" "}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
          position: "relative",
          minHeight: {
            xs: "300px",
            ss: "350px",
            sm: "470px",
            md: "350px",
            ms: "450px",
          },
          minWidth: {
            xs: "300px",
            ss: "350px",
            sm: "470px",
            md: "350px",
            ms: "450px",
          },
          mb: { sm: 7 },
        }}
      >
        <LeftHead />
      </Box>
    </>
  );
}
