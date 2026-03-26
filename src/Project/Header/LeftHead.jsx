import { Box, useTheme } from "@mui/material";
import myLogo from "../../assets/myLogo.webp";
import html from "../../assets/html.webp";
import css from "../../assets/css.webp";
import js from "../../assets/js.webp";
import react from "../../assets/react.webp";
import api from "../../assets/api.webp";
import next from "../../assets/next.webp";
import ts from "../../assets/ts.webp";
import postman from "../../assets/postman.webp";
import axios from "../../assets/axios.webp";
import mui from "../../assets/mui.webp";
import framerMotion from "../../assets/framermotion.webp";
import i18n from "../../assets/i18n.webp";
import reactRouter from "../../assets/reactRouter.webp";
import redux from "../../assets/redux.webp";
import Skills from "./Components/Skills";
import { motion } from "framer-motion";

export default function LeftHead() {
  const theme = useTheme();
  const baseSkills = [html, css, js];
  const advSkills = [ts, react, next, api];
  const myTools = [postman, axios, mui, framerMotion, i18n, reactRouter, redux];

  const orbitAnimation = (delay, duration) => ({
    opacity: [0, 1],
    scale: [0, 1],
    rotate: [0, 360],
    transition: {
      opacity: { duration: 1.2, delay: delay },
      scale: { duration: 1.2, delay: delay },
      rotate: {
        delay: delay + 1.2,
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  });

  const innerSize = {
    xs: "100px",
    ss: "160px",
    sm: "290px",
    md: "180px",
    ms: "150px",
    lg: "200px",
  };

  const middleSize = {
    xs: "180px",
    ss: "240px",
    sm: "370px",
    md: "250px",
    ms: "230px",
    lg: "280px",
  };

  const outerSize = {
    xs: "260px",
    ss: "320px",
    sm: "450px",
    md: "320px",
    ms: "310px",
    lg: "360px",
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: {
          xs: `calc(${outerSize.xs} + 80px)`,
          sm: `calc(${outerSize.sm} + 100px)`,
          lg: `calc(${outerSize.lg} + 20px)`,
        },
        width: {
          xs: `calc(${outerSize.xs} + 80px)`,
      },
        flexShrink: 0,
      }}
    >
      <Box
        component={motion.img}
        initial={{ opacity: 0, scale: 0.5, rotate: -360 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        src={myLogo}
        alt="My Logo"
        sx={{
          width: {
            xs: "50px",
            ss: "100px",
            sm: "190px",
            md: "110px",
            lg: "140px",
          },

          filter: "drop-shadow(0px 0px 20px rgba(153, 228, 255, 0.88))",
        }}
      />
      <Box
        component={motion.div}
        animate={orbitAnimation(1.5, 13)}
        sx={{
          height: innerSize,
          width: innerSize,
          position: "absolute",
          border: `2px solid ${theme.palette.background.main}`,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      >
        {baseSkills.map((skill, i) => {
          const angle = (360 / baseSkills.length) * i;

          return (
            <Skills key={skill} angle={angle} radius={innerSize} logo={skill} />
          );
        })}
      </Box>
      <Box
        component={motion.div}
        animate={orbitAnimation(2, 17)}
        sx={{
          height: middleSize,
          width: middleSize,
          position: "absolute",
          border: `2px solid ${theme.palette.background.main}`,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      >
        {advSkills.map((skill, i) => {
          const angle = (360 / advSkills.length) * i;

          return (
            <Skills
              key={skill}
              angle={angle}
              radius={middleSize}
              logo={skill}
            />
          );
        })}
      </Box>
      <Box
        component={motion.div}
        animate={orbitAnimation(2.5, 22)}
        sx={{
          height: outerSize,

          width: outerSize,

          position: "absolute",

          border: `2px solid ${theme.palette.background.main}`,

          borderRadius: "50%",

          pointerEvents: "none",
        }}
      >
        {" "}
        {myTools.map((skill, i) => {
          const angle = (360 / myTools.length) * i;

          return (
            <Skills key={skill} angle={angle} radius={outerSize} logo={skill} />
          );
        })}
      </Box>
    </Box>
  );
}
