import { Box, Typography, Divider, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import myCv from "../../assets/YA.A.SH-CV.pdf";
import { useTranslation } from "react-i18next";
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

  const { t, i18n } = useTranslation();
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
        maxWidth: "500px",
        overflow: "visible",
        height: "auto",
        minWidth: { md: "300px" },
        minHeight: { xs: "fit-content", md: "300px" },
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

      {/* ENGINEERING */}
      <Typography
        component={motion.h3}
        variants={itemVariants}
        variant="h3"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "1.8rem", md: "2rem", xl: "2.4rem" },
          textAlign:
            i18n.language === "ar"
              ? { xs: "center", lg: "right" }
              : { xs: "center", lg: "left" },
          letterSpacing: -0.5,
          color: "#fff",
          textShadow: "0 0 20px rgba(255,255,255,0.1)",
        }}
      >
        {t("ENGINEERING")}
      </Typography>

      {/* EXPERIENCES */}
      <Typography
        component={motion.h5}
        variants={itemVariants}
        variant="h5"
        sx={{
          mb: 2,
          color: "#3eccfc",
          fontWeight: 700,
          textAlign:
            i18n.language === "ar"
              ? { xs: "center", lg: "right" }
              : { xs: "center", lg: "left" },
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        {t("EXPERIENCES")}
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
          alignSelf:
            i18n.language === "ar"
              ? { xs: "center", md: "flex-end" }
              : { xs: "center", md: "flex-start" },

          boxShadow: `0 0 10px ${theme.palette.background.main}`,
        }}
      />

      {/* body */}
      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="body1"
        sx={{
          lineHeight: { xs: 1.2, md: 1.3, ms: 1.6 },
          color: "rgba(255,255,255,0.7)",
          fontSize: { xs: "0.9rem", md: "0.9rem", xl: "1.1rem" },
          textAlign:
            i18n.language === "ar"
              ? { xs: "center", lg: "right" }
              : { xs: "center", lg: "left" },
        }}
      >
        {t("As a Bachelor of")}{" "}
        <span
          style={{ color: theme.palette.background.main, fontWeight: "bold" }}
        >
          {t("Software Engineering")}
        </span>{" "}
        {t("desc1")}
      </Typography>

      <Button
        component={motion.a}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variant="contained"
        href={myCv}
        download={myCv}
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
          fontSize: "0.7rem",
        }}
      >
        {t("Download CV")}
      </Button>
    </Box>
  );
}
