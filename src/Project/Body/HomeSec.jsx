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
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, md: 10, lg: 15, xl: 35 },
          width: "100%",
          height: "auto",
        }}
      >
        <RightHead />
        <LeftHead />
      </Box>
    </>
  );
}
