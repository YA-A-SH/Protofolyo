import {
  LiveTv,
  GitHub,
  Extension,
  SettingsSuggest,
  Devices,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
  Stack,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

export default function RightProj() {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const techStack = ["React.js", "Redux", "Firebase", "MUI", "Framer", "i18n"];

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxHeight: { xs: "auto", md: "60vh", lg: "70vh" },
        overflowY: "auto",
        background:
          "linear-gradient(135deg, rgba(153, 255, 204, 0.03) 0%, rgba(10, 25, 41, 0.9) 100%)",
        backdropFilter: "blur(12px)",
        p: { xs: 2, md: 3 },
        borderRadius: "24px",
        border: "1px solid rgba(153, 233, 255, 0.15)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        position: "relative",
        // overflow: "hidden",
        maxWidth: "550px",
      }}
    >
      {/* Decorative Side Lines */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "2px",
          height: "100%",
          background: `linear-gradient(to bottom, transparent, ${theme.palette.background.main}, transparent)`,
        }}
      />

      {/* Header Section */}
      <Box component={motion.div} variants={itemVariants} sx={{ mb: 1 }}>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: "1.2rem", md: "1.6rem" }, // صغرت الخط قليلاً
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <span style={{ fontSize: "1.8rem" }}>🍽️</span> Restaurant System
        </Typography>
        <Typography
          sx={{
            color: theme.palette.background.main,
            fontWeight: 700,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Full-Stack Solution / Admin Dashboard
        </Typography>
      </Box>

      <Divider
        variants={itemVariants}
        sx={{
          mb: 2,
          width: "50px",
          borderColor: theme.palette.background.main,
        }}
      />

      {/* Description */}
      <Typography
        component={motion.p}
        variants={itemVariants}
        sx={{
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.5,
          fontSize: "0.85rem",
          mb: 2,
        }}
      >
        High-performance <b>React</b> app with scalable architecture (SOLID).
        Features seamless customer UX and a robust management system.
      </Typography>

      {/* Features */}
      <Stack spacing={1} sx={{ mb: 2.5 }}>
        {[
          {
            icon: <Extension sx={{ fontSize: 16 }} />,
            text: "Localization (i18n): 5,000+ entries.",
          },
          {
            icon: <SettingsSuggest sx={{ fontSize: 16 }} />,
            text: "Admin: Real-time analytics & inventory.",
          },
          {
            icon: <Devices sx={{ fontSize: 16 }} />,
            text: "Optimized: Fast loads via Lazy/Memoization.",
          },
        ].map((feature, idx) => (
          <Box
            key={idx}
            component={motion.div}
            variants={itemVariants}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            <Box sx={{ color: theme.palette.background.main, display: "flex" }}>
              {feature.icon}
            </Box>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {feature.text}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Tech Stack  */}
      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3 }}
      >
        {techStack.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            size="small"
            sx={{
              bgcolor: "rgba(153, 255, 204, 0.05)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: "0.65rem",
              height: "22px",
            }}
          />
        ))}
      </Box>

      {/* Action Buttons*/}
      <Stack
        direction="row"
        spacing={2}
        component={motion.div}
        variants={itemVariants}
      >
        <Button
          variant="contained"
          component="a"
          href="https://resturant-pro-react.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LiveTv />}
          sx={{
            bgcolor: theme.palette.background.main,
            color: "#000",
            fontWeight: "bold",
            fontSize: "0.8rem",
            borderRadius: "8px",
            flex: 1,
            py: 1,
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          Demo
        </Button>
        <Button
          variant="outlined"
          component="a"
          href="https://github.com/YA-A-SH/Resturant-Pro-React"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHub />}
          sx={{
            borderColor: theme.palette.background.main,
            color: theme.palette.background.main,
            fontWeight: "bold",
            fontSize: "0.8rem",
            borderRadius: "8px",
            flex: 1,
            py: 1,
            "&:hover": { borderColor: "#fff", color: "#fff" },
          }}
        >
          Code
        </Button>
      </Stack>
    </Box>
  );
}
