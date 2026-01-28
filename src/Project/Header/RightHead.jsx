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
        p: { xs: 3, md: 5 },
        borderRadius: "24px",
        border: "1px solid rgba(153, 255, 204, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.05)",
        position: "relative",
        overflow: "hidden",
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
          bgcolor: "primary.main",
          boxShadow: "0px 0px 10px primary.main",
        }}
      />
      {/* ENGINEERING */}
      <Typography
        component={motion.h3}
        variants={itemVariants}
        variant="h3"
        sx={{
          fontWeight: 800,
          letterSpacing: 2,
          color: "text.primary",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        ENGINEERING
      </Typography>
      {/* EXPERIENCES */}
      <Typography
        component={motion.h5}
        variants={itemVariants}
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: 500,
          color: "#affc518f",
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
        }}
      />

      {/* Info Text */}
      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="body1"
        sx={{
          lineHeight: 1.8,
          color: "text.secondary",
          fontSize: "1.1rem",
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
        sx={{ mt: 5, "&:hover": { bgcolor: "#8bb953" } }}
      >
        {" "}
        Download CV{" "}
      </Button>
    </Box>
  );
}
