import { Box, useTheme, Typography, Stack, Chip } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function LeftAboutMe() {
  const theme = useTheme();

  const [activeItem, setActiveItem] = useState(null);

  const years = [
    {
      year: "2022",
      pos: "0%",
      title: "A Step into the Unknown",
      info: "This year marked the official start of my bachelor’s degree. I entered a world I knew very little about; at the time, I didn't truly understand what 'programming' was or what this path held for me. Although anxiety was the dominant emotion during that period, it ultimately became my primary driver to explore this new field and take my first steps into the world of technology.",
      skills: ["Problem Solving", "Logic Building"],
    },
    {
      year: "2023",
      pos: "25%",
      title: "Synergy and Resilience",
      info: "In 2023, I partnered with a like-minded colleague to master Java (OOP, GUI, JavaFX) and SQL/SQLite. We began developing a custom e-commerce platform for Gaza, a project fueled by rapid innovation. However, our progress was forced to a halt in October due to the war, turning a year of technical growth into a testament of resilience.",
      skills: ["JavaFX", "SQL", "SQLite", "Software Architecture"],
    },
    {
      year: "2024",
      pos: "50%",
      title: "Displacement, Adaptation, and Resilience",
      info: "A year of 'educational survival.' Amidst displacement from Rafah, I assisted at my father's pharmacy while pivoting to Web Development (HTML/CSS). Despite the lack of electricity and internet, I resumed my university studies online in June, turning a period of immense personal struggle into a persistent pursuit of knowledge.",
      skills: ["HTML5", "CSS3", "Responsive Design", "Self-Learning"],
    },
    {
      year: "2025",
      pos: "75%",
      title: "Mastery Under Fire – The Year of Professional Growth",
      info: "A year of profound transformation. Despite displacement and living in a tent, I mastered React, Next.js, and TypeScript, delving into RTK, Memoization, and API integration. Using AI and Docs, I built a Pharmacy Inventory System and a large-scale consolidated project. Despite the war’s impact on my GPA, I am resiliently finishing my final 46 credit hours, ready to bring my expertise to the global market.",
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
      title: "The Launchpad – Reaching the World",
      info: "Focused on bridging the gap between my projects and the global market by finalizing my portfolio. If you are reading this, my resilience has reached its destination. My 2026 roadmap includes mastering Docker and Backend development to evolve into a versatile Full-Stack Developer. My goal is to transition from a survivor of circumstances to a leader in technology.",
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
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: { xs: "300px", sm: "400px", md: "280px", lg: "400px" },
          width: "100px",
          m: "13px auto",
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
      </Box>
      <AnimatePresence>
        {activeItem && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            sx={{
              position: "absolute",
              // top: "50%",
              // left: "50%",
              // translateX: "-50%",
              // translateY: "-50%",
              width: { xs: 260, sm: 400 },
              p: 2.5,
              background: "rgba(10, 25, 41, 0.95)",
              backdropFilter: "blur(15px)",
              borderRadius: "16px",
              border: `1px solid ${theme.palette.background.main}55`,
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
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
    </>
  );
}
