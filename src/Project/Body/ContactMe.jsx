import { Box } from "@mui/material";
import RightContact from "./Components/RightContact";
import LeftContact from "./Components/LeftContact";

export default function ContactMe() {
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
      }}
    >
      <RightContact />
      <LeftContact />
    </Box>
  );
}
