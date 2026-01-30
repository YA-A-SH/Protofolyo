import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <Box
      component={motion.div}
      layoutId="core-atom" 
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "rgba(20, 20, 20, 0.9)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Typography variant="h2" color="white">
          About Me
        </Typography>
      </motion.div>
    </Box>
  );
}
