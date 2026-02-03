import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SoftAndFront() {
  const sideTitleVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)", x: -50 },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      x: 0,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

  const { t } = useTranslation();
  return (
    <>
      <Box
        component={motion.div}
        variants={sideTitleVariants}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: {
            xs: "90px",
            ss: "120px",
            sm: "150px",
            md: "220px",
            lg: "300px",
          },
          height: { xs: "50px", md: "70px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: "0.7rem",
              ss: "0.9rem",
              sm: "1.1rem",
              md: "1.6rem",
              lg: "1.7rem",
            },
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          {t("Software Engineer")}
        </Typography>
      </Box>

      <Box
        component={motion.div}
        variants={sideTitleVariants}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: {
            xs: "100px",
            ss: "130px",
            sm: "143px",
            md: "220px",
            ms: "250px",
            lg: "300px",
          },
          height: { xs: "50px", md: "70px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          // bgcolor: "red",
          // ml: { xs: 1, sm: 0 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            ml: { xs: 1, sm: 0 },
            fontSize: {
              xs: "0.62rem",
              ss: "0.8rem",
              sm: "1rem",
              md: "1.5rem",
              ms: "1.7rem",
              lg: "1.7rem",
            },
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          {t("Front End Developer")}
        </Typography>
      </Box>
    </>
  );
}
