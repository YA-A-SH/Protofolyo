import { Box, Typography, useTheme, alpha } from "@mui/material";

export default function Loader() {
  const theme = useTheme();

  const keyframes = {
    "@keyframes orbit": {
      "0%": { transform: "rotate(0deg) scale(1)" },
      "50%": { transform: "rotate(180deg) scale(1.1)" },
      "100%": { transform: "rotate(360deg) scale(1)" },
    },
    "@keyframes pulseGlow": {
      "0%, 100%": { opacity: 0.5, filter: "blur(20px)" },
      "50%": { opacity: 1, filter: "blur(40px)" },
    },
    "@keyframes textShimmer": {
      "0%": { backgroundPosition: "-200% center" },
      "100%": { backgroundPosition: "200% center" },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background:
          theme.palette.mode === "dark"
            ? `radial-gradient(circle at center, ${alpha("#c0edfc", 0.08)} 0%, #c0edfc 70%)`
            : `radial-gradient(circle at center, ${alpha("#c0edfc", 0.05)} 0%, #121319 70%)`,
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        ...keyframes,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 200,
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: alpha("#c0edfc", 0.3),
            animation: "pulseGlow 3s ease-in-out infinite",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: `2px dashed ${alpha("#c0edfc", 0.2)}`,
            animation: "orbit 8s linear infinite",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "85%",
            height: "85%",
            borderRadius: "50%",
            border: `4px solid transparent`,
            borderTop: `4px solid ${"#c0edfc"}`,
            borderLeft: `4px solid ${alpha("#c0edfc", 0.4)}`,
            animation:
              "orbit 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite",
          }}
        />

        <Typography
          sx={{
            color: "#c0edfc",
            fontSize: "2.2rem",
            fontWeight: 950,
            letterSpacing: 6,
            zIndex: 2,
            background: `linear-gradient(90deg, ${"#c0edfc"}, #fff, ${"#c0edfc"})`,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "textShimmer 2.5s linear infinite",
            textShadow: `0 0 20px ${alpha("#c0edfc", 0.5)}`,
          }}
        >
          ZEUS
        </Typography>
      </Box>

      <Box sx={{ mt: 5, textAlign: "center", width: 250 }}>
        <Typography
          sx={{
            fontWeight: 500,
            letterSpacing: 2,
            color: "text.secondary",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            mb: 1.5,
            opacity: 0.8,
          }}
        >
          Forging Excellence
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: 3,
            bgcolor: alpha("#c0edfc", 0.1),
            borderRadius: 10,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "40%",
              height: "100%",
              bgcolor: "#c0edfc",
              borderRadius: 10,
              boxShadow: `0 0 10px ${"#c0edfc"}`,
              animation: "progressAnim 2s ease-in-out infinite",
              "@keyframes progressAnim": {
                "0%": { left: "-40%" },
                "100%": { left: "100%" },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
