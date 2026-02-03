import { Box, useTheme, Typography, Stack, Chip } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LeftAboutMe() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const [activeItem, setActiveItem] = useState(null);

  const years = [
    {
      year: "2022",
      pos: "0%",
      title: t("A Step into the Unknown"),
      info: t("desc3"),
      skills: ["Problem Solving", "Logic Building"],
    },
    {
      year: "2023",
      pos: "25%",
      title: t("Synergy and Resilience"),
      info: t("desc4"),
      skills: ["JavaFX", "SQL", "SQLite", "Software Architecture"],
    },
    {
      year: "2024",
      pos: "50%",
      title: t("Displacement, Adaptation, and Resilience"),
      info: t("desc5"),
      skills: ["HTML5", "CSS3", "Responsive Design", "Self-Learning"],
    },
    {
      year: "2025",
      pos: "75%",
      title: t("Mastery Under Fire"),
      info: t("desc6"),
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "API Integration (Axios)",
        "A lotttttt Of Tools ",
      ],
    },
    {
      year: "2026",
      pos: "100%",
      title: t("The Launchpad – Reaching the World"),
      info: t("desc7"),
      skills: [],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <>
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        sx={{
          direction: i18n.language === "ar" ? "rtl" : "ltr",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: { xs: "300px", sm: "400px", md: "280px", lg: "320px" },
          width: { xs: "100px", md: "300px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "4px",
            height: "100%",
            background: `linear-gradient(to bottom, transparent, ${theme.palette.background.main}, transparent)`,
            borderRadius: "4px",
            boxShadow: `0 0 15px ${theme.palette.background.main}66`,
          }}
        />

        {years.map((item, i) => (
          <Box
            onMouseEnter={() => setActiveItem(item)}
            onMouseLeave={() => setActiveItem(null)}
            key={item.year}
            component={motion.div}
            variants={dotVariants}
            sx={{
              position: "absolute",
              top: item.pos,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "16px",
                height: "16px",
                bgcolor: theme.palette.background.default,
                border: `3px solid ${theme.palette.background.main}`,
                borderRadius: "50%",
                boxShadow: `0 0 10px ${theme.palette.background.main}`,
                zIndex: 2,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: theme.palette.background.main,
                  opacity: 0.15,
                  filter: "blur(5px)",
                },
              }}
            />

            <Typography
              sx={{
                position: "absolute",
                left: i % 2 === 0 ? "30px" : "auto",
                right: i % 2 !== 0 ? "30px" : "auto",
                whiteSpace: "nowrap",
                color: "#fff",
                fontWeight: 900,
                fontSize: "1.1rem",
                letterSpacing: 1,
                p: "4px 12px",
                borderRadius: "12px",
                background: "rgba(153, 255, 204, 0.05)",
                backdropFilter: "blur(4px)",
                borderBottom: `2px solid ${theme.palette.background.main}`,
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: theme.palette.background.main,
                },
              }}
            >
              {item.year}
            </Typography>
          </Box>
        ))}

        <AnimatePresence>
          {activeItem && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              sx={{
                width: { xs: 260, sm: 400, md: 300 },
                p: 2.5,
                background: "rgba(10, 25, 41, 0.95)",
                backdropFilter: "blur(15px)",
                borderRadius: "16px",
                border: `1px solid ${theme.palette.background.main}55`,
                pointerEvents: "none",
                zIndex: 99999,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: theme.palette.background.main, fontWeight: 800 }}
              >
                {activeItem.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}
              >
                {activeItem.info}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={0.5}>
                {activeItem.skills.map((s) => (
                  <Chip key={s} label={s} size="small" />
                ))}
              </Stack>
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
}
