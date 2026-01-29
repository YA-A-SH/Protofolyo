import { alpha, Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function Loader({ color = "#B0FC51" }) {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: theme.palette.background.default,
        }}
      >
        <Box sx={{ position: "relative", width: 120, height: 120 }}>
          <Box
            className="loader"
            sx={{
              position: "absolute",
              inset: 0,
              border: `2px solid ${alpha(color, 0.2 * 0.05)}`,
              boxShadow: `0 0 20px ${alpha(color, 0.2)}`,
            }}
          />

          <Box
            component={motion.div}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: color,
              fontSize: "2rem",
              fontWeight: 900,
            }}
          >
            YA.A.SH
          </Box>
        </Box>

        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          sx={{
            mt: 4,
            fontWeight: 800,
            letterSpacing: 2,
            color: "#96f521",
            fontSize: "0.75rem",
            textTransform: "uppercase",
          }}
        >
          Preparing Portfolio
        </Typography>
      </Box>
    </>
  );
}
