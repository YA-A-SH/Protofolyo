import { Box, Typography, Chip, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function RightAboutMe() {
  const theme = useTheme();
  const skills = {
    Base: ["HTML5", "CSS3", "JavaScript"],
    Advanced: ["TypeScript", "React", "Next.js", "REST APIs"],
    Tools: ["RTK", "Axios", "MUI", "i18n", "Framer Motion", "Postman"],
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      sx={{
        maxHeight: { xs: "auto", md: "60vh", lg: "70vh" },
        overflowY: "auto",
        p: 2,
        background:
          "linear-gradient(135deg, rgba(153, 255, 204, 0.03) 0%, rgba(10, 25, 41, 0.8) 100%)",
        backdropFilter: "blur(12px)",
        borderRadius: "24px",
        border: "1px solid rgba(153, 233, 255, 0.15)",
        position: "relative",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(153, 255, 204, 0.02)",
        maxWidth: { xs: "100%", md: "400px" },
        // overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: "100%",
          background: `linear-gradient(to bottom, transparent, ${theme.palette.background.main}, transparent)`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "3px",
          height: "100%",
          background: `linear-gradient(to bottom, transparent, ${theme.palette.background.main}, transparent)`,
        }}
      />
      {/* Title */}
      <Typography
        component={motion.h4}
        variants={itemVariants}
        variant="h4"
        sx={{
          color: "#fff",
          fontWeight: 900,
          // mb: 1.7,
          textTransform: "uppercase",
          letterSpacing: 2,
          textAlign: { xs: "center", lg: "left" },
          fontSize: { xs: "1.5rem", lg: "1.8rem" },
        }}
      >
        Technical{" "}
        <span style={{ color: theme.palette.background.main }}>Arsenal</span>
      </Typography>

      {/* Skills Groups */}
      <Stack spacing={2}>
        {Object.entries(skills).map(([category, list]) => (
          <Box key={category} component={motion.div} variants={itemVariants}>
            <Typography
              variant="overline"
              sx={{
                textAlign: { xs: "center", lg: "left" },
                color: "#3eccfc",
                fontWeight: "bold",
                mb: { xs: 1, md: 0.5 },
                display: "block",
                letterSpacing: 1.5,
              }}
            >
              {category}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 1.5, md: 1 },
                justifyContent: { xs: "center", lg: "flex-start" },
              }}
            >
              {list.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    bgcolor: "#c0edfc0e",
                    color: "rgba(255,255,255,0.8)",
                    border: `1px solid ${theme.palette.background.main}`,
                    fontWeight: 500,
                    fontSize: "0.7rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: theme.palette.background.main,
                      color: "#000",
                      transform: "translateY(-5px)",
                      boxShadow: `0 5px 15px rgba(153, 223, 255, 0.3)`,
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Stack>

      {/* Footer Text */}
      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="body2"
        sx={{
          mt: { xs: 4, md: 1 },
          color: "rgba(255,255,255,0.5)",
          fontStyle: "italic",
          textAlign: { xs: "center", md: "left" },
          lineHeight: { xs: 1.6, md: 1.3 },
        }}
      >
        While these are my primary tools, I am proficient in many others and
        select the right tool for the specific needs of each project.
      </Typography>
    </Box>
  );
}
