import { Box, Container, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import FullAndWar from "./FixedPageItems/FullNameAndWar";
import TopNameAndBtmLinks from "./FixedPageItems/TopName";
import SoftAndFront from "./FixedPageItems/SoftAndFront";
import NavBar from "./FixedPageItems/NavBar";
import HomeSec from "../Body/HomeSec";
import { useState } from "react";
import AboutMe from "../Body/AboutMe";
import MyProjects from "../Body/MyProjects";
import ContactMe from "../Body/ContactMe";
export default function AllConverter() {
  const theme = useTheme();

  const containerVariants = {
    hidden: {
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      filter: "blur(10px) brightness(0)",
    },
    visible: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      filter: "blur(0px) brightness(1)",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const [isExpanding, setIsExpanding] = useState(false);
  const [section, setSection] = useState("home");

  const handleSectionChange = (newSection) => {
    if (newSection === section || isExpanding) return;

    setIsExpanding(true);
    setSection(newSection);

    setTimeout(() => {
      setIsExpanding(false);
    }, 1000);
  };

  const scanVariants = {
    initial: {
      clipPath: "inset(0 0 100% 0)",
      filter: "brightness(2) blur(5px)",
    },
    animate: {
      clipPath: "inset(0 0 0% 0)",
      filter: "brightness(1) blur(0px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          width: "100%",
          bgcolor: theme.palette.background.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <Container
          maxWidth={false}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            minHeight: { xs: "99vh", md: "96vh" },
            maxWidth: "98%",
            bgcolor: theme.palette.background.default,
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 1,
            m: { sm: 1 },
          }}
        >
          {/* The Top Name & The Bottom Links */}
          <TopNameAndBtmLinks />
          <NavBar handleSectionChange={handleSectionChange} section={section} />
          {/* Soft Eng & Front End Dev  */}

          <SoftAndFront />
          {/* Main Content */}
          <Box
            sx={{
              flexGrow: 1,
              minHeight: { xs: "auto", md: "60vh" },
              height: "auto",
              py: { xs: 8, md: 4 },
              overflow: "visible",
              minWidth: "99%",
              mt: { xs: 15, md: 10 },
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              zIndex: 4,
              flexDirection: { xs: "column-reverse", md: "row" },
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={section}
                variants={scanVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  overflow: "hidden",
                  flexDirection: "inherit",
                }}
              >
                {section === "home" && <HomeSec />}
                {section === "aboutMe" && <AboutMe />}
                {section === "projects" && <MyProjects />}
                {section === "contact" && <ContactMe />}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              {isExpanding && (
                <motion.div
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: theme.palette.primary.main, // أو اللون السماوي عندك
                    boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                    zIndex: 10,
                    pointerEvents: "none",
                  }}
                />
              )}
            </AnimatePresence>
          </Box>
          {/* Full Name & War*/}
          <FullAndWar />
        </Container>
      </Container>
    </>
  );
}
