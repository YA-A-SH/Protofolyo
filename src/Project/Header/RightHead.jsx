import { Box, Typography, Divider, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function RightHead() {
  const containerVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "rgba(153, 255, 204, 0.05)",
        backdropFilter: "blur(10px)",
        p: { xs: 3 },
        borderRadius: "24px",
        border: "1px solid rgba(153, 255, 204, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.05)",
        position: "relative",
        overflow: "hidden",
        mt: { ms: 5 },
      }}
    >
      {/* Line */}

      <Box
        component={motion.div}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "4px",
          height: "100%",
          bgcolor: "primary.main",
        }}
      />

      <Typography
        component={motion.h3}
        variants={itemVariants}
        variant="h3"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        ENGINEERING
      </Typography>

      <Typography
        component={motion.h5}
        variants={itemVariants}
        variant="h5"
        sx={{
          mb: 2,
          color: "#affc518f",
          textAlign: { xs: "center", md: "left" },
          letterSpacing: 1,
        }}
      >
        EXPERIENCES
      </Typography>

      <Divider
        component={motion.hr}
        variants={itemVariants}
        sx={{
          mb: 3,
          width: "100px",
          borderBottomWidth: 3,
          borderColor: "primary.main",
          alignSelf: { xs: "center", md: "flex-start" },
        }}
      />

      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="body1"
        sx={{
          lineHeight: { xs: 1.8, md: 1.3, ms: 1.6 },
          color: "text.secondary",
          fontSize: { xs: "0.95rem", md: "1.1rem" },
          textAlign: "justify",
        }}
      >
        As a Bachelor of Software Engineering student at the University of
        Palestine, I go beyond mere coding to engineer web systems. I specialize
        in transforming complex designs into high-performance, live interfaces
        with a rigorous focus on scalability and UX standards.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 4,
          alignSelf: { xs: "center", md: "flex-start" },
          "&:hover": {
            bgcolor: "#affc51b1",
          },
          px: 4,
        }}
      >
        Download CV
      </Button>
    </Box>
  );
}
