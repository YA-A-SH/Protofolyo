import { Box, Typography, Divider, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download"; // إضافة أيقونة بتعطي شكل أحلى

export default function RightHead() {
  const theme = useTheme();
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
        delay: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
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
        background:
          "linear-gradient(135deg, rgba(153, 255, 204, 0.03) 0%, rgba(10, 25, 41, 0.8) 100%)",
        backdropFilter: "blur(12px)",
        p: { xs: 3 },
        borderRadius: "24px",
        border: "1px solid rgba(153, 233, 255, 0.15)",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(153, 255, 204, 0.02)",
        position: "relative",
        overflow: "hidden",
        mt: { ms: 5 },
      }}
    >
      <Box
        component={motion.div}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: "100%",
          background: `linear-gradient(to bottom, transparent, ${theme.palette.background.main}, transparent)`,
          zIndex: 1,
        }}
      />
      <Box
        component={motion.div}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "3px",
          height: "100%",
          background: `linear-gradient(to bottom, transparent, ${theme.palette.background.main}, transparent)`,
          zIndex: 1,
        }}
      />

      <Typography
        component={motion.h3}
        variants={itemVariants}
        variant="h3"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "1.8rem", md: "2rem", lg: "2.4rem" },
          textAlign: { xs: "center", md: "left" },
          letterSpacing: -0.5,
          color: "#fff",
          textShadow: "0 0 20px rgba(255,255,255,0.1)",
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
          color: "#3eccfc",
          fontWeight: 700,
          textAlign: { xs: "center", md: "left" },
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        EXPERIENCES
      </Typography>

      <Divider
        component={motion.hr}
        variants={itemVariants}
        sx={{
          mb: 3,
          width: "60px",
          borderBottomWidth: 3,
          borderRadius: 2,
          borderColor: theme.palette.background.main,
          alignSelf: { xs: "center", md: "flex-start" },
          boxShadow: `0 0 10px ${theme.palette.background.main}`,
        }}
      />

      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="body1"
        sx={{
          lineHeight: { xs: 1.8, md: 1.3, ms: 1.6 },
          color: "rgba(255,255,255,0.7)",
          fontSize: { xs: "0.95rem", md: "0.9rem", lg: "1.1rem" },
          textAlign: "justify",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        As a Bachelor of{" "}
        <span
          style={{ color: theme.palette.background.main, fontWeight: "bold" }}
        >
          Software Engineering
        </span>{" "}
        student at the University of Palestine, I go beyond mere coding to
        engineer web systems. I specialize in transforming complex designs into
        high-performance, live interfaces with a rigorous focus on scalability
        and UX standards.
      </Typography>

      <Button
        component={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variant="contained"
        startIcon={<DownloadIcon />}
        sx={{
          mt: 4,
          alignSelf: { xs: "center", md: "flex-start" },
          bgcolor: "transparent",
          color: theme.palette.background.main,
          border: `2px solid ${theme.palette.background.main}`,
          fontWeight: "bold",
          borderRadius: "12px",
          "&:hover": {
            bgcolor: theme.palette.background.main,
            color: "#000",
            boxShadow: "0 0 20px rgba(42, 220, 252, 0.4)",
          },
          transition: "all 0.3s ease",
          px: 4,
          py: 1.5,
          textTransform: "none",
          fontSize: "1rem",
        }}
      >
        Download CV
      </Button>
    </Box>
  );
}
