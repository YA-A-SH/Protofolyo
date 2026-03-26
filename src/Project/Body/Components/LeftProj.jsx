import { useState, useEffect, useCallback } from "react";
import { Box, IconButton, Stack, useTheme } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

import fir from "../../../assets/ProjPhotos/1.webp";
import sec from "../../../assets/ProjPhotos/2.webp";
import the from "../../../assets/ProjPhotos/3.webp";
import fou from "../../../assets/ProjPhotos/4.webp";
import fif from "../../../assets/ProjPhotos/5.webp";
import sex from "../../../assets/ProjPhotos/6.webp";
import sev from "../../../assets/ProjPhotos/7.webp";
import egh from "../../../assets/ProjPhotos/8.webp";
import nin from "../../../assets/ProjPhotos/9.webp";
import ten from "../../../assets/ProjPhotos/10.webp";
import ele from "../../../assets/ProjPhotos/11.webp";
import tew from "../../../assets/ProjPhotos/12.webp";
import ther from "../../../assets/ProjPhotos/13.webp";
import fift from "../../../assets/ProjPhotos/15.webp";
import sexteen from "../../../assets/ProjPhotos/16.webp";
import seventeen from "../../../assets/ProjPhotos/17.webp";
import eghtteen from "../../../assets/ProjPhotos/18.webp";

export default function LeftProj() {
  const images = [
    fir,
    sec,
    the,
    fou,
    fif,
    sex,
    sev,
    egh,
    nin,
    ten,
    ele,
    tew,
    ther,
    fift,
    sexteen,
    seventeen,
    eghtteen,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const theme = useTheme();
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(handleNext, 10000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        width: "100%",
        maxWidth: "550px",
        minWidth: { xs: "270px", ss: "390px", sm: "520px", md: "350px" },
        px: { xs: 1, md: 0 },
        position: "relative",
      }}
    >
      {/* Photos */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(153, 230, 255, 0.61)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          background: "rgba(10, 25, 41, 0.5)",
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <Box
            key={currentIndex}
            component={motion.img}
            loading="lazy"
            src={images[currentIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { damping: 30 },
              opacity: { duration: 0.3 },
            }}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "drop-shadow(0px 0px 10px rgba(153, 226, 255, 0.43))",
              objectPosition: "top",
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </AnimatePresence>

        {/* Arrows */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: theme.palette.background.default,
            color: theme.palette.background.main,
            "&:hover": {
              bgcolor: theme.palette.background.main,
              color: theme.palette.background.default,
            },
          }}
        >
          <ArrowBackIosNew fontSize="small" />
        </IconButton>
        {/* Arrows */}

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: theme.palette.background.default,
            color: theme.palette.background.main,
            "&:hover": {
              bgcolor: theme.palette.background.main,
              color: theme.palette.background.default,
            },
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>

      {/* Dots  */}
      <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            sx={{
              width: currentIndex === index ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              bgcolor:
                currentIndex === index
                  ? theme.palette.background.main
                  : "rgba(153, 246, 255, 0.69)",
              cursor: "pointer",
              transition: "all 0.4s ease",
              boxShadow:
                currentIndex === index
                  ? `0 0 10px ${theme.palette.background.main}`
                  : "none",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
