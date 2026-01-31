import { Code, Fingerprint, Handshake, Home } from "@mui/icons-material";
import { Box, useTheme, IconButton, Typography, Tooltip } from "@mui/material";
import { motion } from "framer-motion";

export default function NavBar({ handleSectionChange, section }) {
  const theme = useTheme();

  const nav = [
    { icon: <Home />, title: "Home", sec: "home" },
    { icon: <Fingerprint />, title: "About Me", sec: "aboutMe" },
    { icon: <Code />, title: "Projects", sec: "projects" },
    { icon: <Handshake />, title: "Contact", sec: "contact" },
  ];

  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0.3,
      x: -200,
    },
    hover: {
      opacity: 1,
      scale: 1,
      x: [200, 0],
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    active: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", damping: 15 },
    },
  };

  const textVariants = {
    initial: { y: 0, opacity: 0.7 },
    hover: {
      y: 7,
      scale: 1.1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0.5, y: -200, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 1, delay: 2.4 }}
      sx={{
        position: "fixed",
        width: { xs: "90%", sm: "70%", md: "40%" },
        height: "60px",
        top: { xs: 70, xl: 60 },
        left: "50%",
        borderRadius: "50px",
        px: { xs: 1, sm: 3 },

        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        bgcolor: theme.palette.background.main,
        boxShadow: "0px 10px 40px rgba(0,0,0,0.12)",
        zIndex: 1000,
      }}
    >
      {nav.map((item, index) => {
        const isActive = section === item.sec;
        return (
          <Tooltip key={index} title={item.label} arrow placement="bottom">
            <Box
              key={index}
              component={motion.div}
              initial="initial"
              whileHover="hover"
              animate={isActive ? "active" : "initial"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
                width: { xs: "60px", sm: "80px" },
                borderRadius: 24,
                borderLeft:
                  section === item.sec
                    ? {
                        xs: `2px solid ${theme.palette.background.default}`,
                        sm: `4px solid ${theme.palette.background.default}`,
                      }
                    : "",
                borderRight:
                  section === item.sec
                    ? {
                        xs: `2px solid ${theme.palette.background.default}`,
                        sm: `4px solid ${theme.palette.background.default}`,
                      }
                    : "",
              }}
              onClick={() => {
                handleSectionChange(item.sec);
              }}
            >
              <IconButton
                component={motion.div}
                variants={iconVariants}
                whileHover={null}
                sx={{
                  position: "absolute",
                  top: -51,
                  bgcolor: theme.palette.background.main,
                  border: `6px solid ${theme.palette.background.default}`,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  pointerEvents: isActive ? "none" : "auto",
                  "&:hover": { bgcolor: theme.palette.background.main },

                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    top: "25px",
                    width: "20px",
                    height: "20px",
                    background: "transparent",
                    boxShadow: `0 -10px 0 0 ${theme.palette.background.default}`,
                  },
                  "&::before": {
                    left: "-18px",
                    borderRadius: "0px 70px",
                  },
                  "&::after": {
                    right: "-18px",
                    borderRadius: "70px 0px",
                  },
                }}
              >
                {item.icon}
              </IconButton>
              <Typography
                variant="caption"
                component={motion.span}
                variants={textVariants}
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  zIndex: 2,
                  color: "primary.dark",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Tooltip>
        );
      })}
    </Box>
  );
}
