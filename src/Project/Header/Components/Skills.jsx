import { Box } from "@mui/material";

export default function Skills({ logo, angle, radius }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `
          translate(-50%, -50%)
          rotate(${angle}deg)
          translateX(${radius})
          rotate(-${angle}deg)
        `,
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
            width: 44,
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
