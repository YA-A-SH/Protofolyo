import { Box } from "@mui/material";

export default function Skills({ logo, angle, radius }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: {
          xs: `translate(-50%, -50%) rotate(${angle}deg) translateX(calc(${radius.xs} / 2)) rotate(-${angle}deg)`,
          ss: `translate(-50%, -50%) rotate(${angle}deg) translateX(calc(${radius.ss} / 2)) rotate(-${angle}deg)`,
          sm: `translate(-50%, -50%) rotate(${angle}deg) translateX(calc(${radius.sm} / 2)) rotate(-${angle}deg)`,
          md: `translate(-50%, -50%) rotate(${angle}deg) translateX(calc(${radius.md} / 2)) rotate(-${angle}deg)`,
          ms: `translate(-50%, -50%) rotate(${angle}deg) translateX(calc(${radius.ms} / 2)) rotate(-${angle}deg)`,
          lg: `translate(-50%, -50%) rotate(${angle}deg) translateX(calc(${radius.lg} / 2)) rotate(-${angle}deg)`,
        },

        pointerEvents: "auto",
      }}
    >
      <Box
        sx={{
          width: 15,
          height: 15,
          bgcolor: "primary.main",
          borderRadius: "50%",
          cursor: "pointer",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.3s",
          "& img": {
            width: 0,
            transition: "0.3s",
          },
          "&:hover img": {
            width: { xs: 25, ss: 35 },
          },
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="My Logo"
          sx={{ bgcolor: "background.default" }}
        />
      </Box>
    </Box>
  );
}
