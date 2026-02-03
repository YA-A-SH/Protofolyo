import { Box, Divider, Typography, useTheme, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useTranslation } from "react-i18next";

export default function RightContact() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
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
        direction: i18n.language === "ar" ? "rtl" : "ltr",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxHeight: { xs: "auto", md: "60vh", lg: "70vh" },
        overflowY: "auto",
        background:
          "linear-gradient(135deg, rgba(153, 235, 255, 0.05) 0%, rgba(10, 25, 41, 0.95) 100%)",
        backdropFilter: "blur(15px)",
        p: { xs: 3, md: 4 },
        borderRadius: "30px 0 30px 0",
        border: "1px solid rgba(153, 233, 255, 0.2)",
        position: "relative",
        maxWidth: "550px",
      }}
    >
      {/*Neon Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: 0,
          width: "4px",
          height: "80%",
          background:
            "linear-gradient(to bottom, transparent, #5020fb, #3eccfc, transparent)",
          boxShadow: "0 0 15px rgba(9, 206, 255, 0.5)",
          borderRadius: "0 5px 5px 0",
        }}
      />

      {/* Header Section */}
      <Box component={motion.div} variants={itemVariants} sx={{ mb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
          <ConnectWithoutContactIcon
            sx={{ color: theme.palette.background.main, fontSize: "2rem" }}
          />
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              color: "#fff",
              letterSpacing: -0.5,
            }}
          >
            {t("Let's Build Together")}
          </Typography>
        </Stack>
      </Box>

      <Divider
        variants={itemVariants}
        sx={{
          mb: 3,
          width: "80px",
          borderBottomWidth: 3,
          borderColor: theme.palette.background.main,
          boxShadow: "0 0 10px rgba(109, 219, 246, 0.3)",
        }}
      />

      {/* Description */}
      <Stack spacing={2.5}>
        <Typography
          component={motion.p}
          variants={itemVariants}
          sx={{
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.6,
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          {t("Every great system starts with a conversation. Whether you have a")}
          <span style={{ color: theme.palette.background.main }}>
            {" "}
            {t("clear vision")}{" "}
          </span>
          {t("or just a")} <span style={{ color: "#3eccfc" }}> {t("rough idea")}</span>{t("desc9")}
        </Typography>

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            p: 2,
            bgcolor: "rgba(153, 255, 204, 0.05)",
            borderRadius: "15px",
            borderLeft: `2px solid ${theme.palette.background.main}`,
          }}
        >
          <Typography
            sx={{ color: "#fff", fontSize: "0.85rem", mb: 1, fontWeight: 700 }}
          >
            🚀 {t("Why me?")}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.8rem",
              lineHeight: 1.4,
            }}
          >
            {t("desc10")}
          </Typography>
        </Box>

        <Typography
          component={motion.p}
          variants={itemVariants}
          sx={{
            color: "#3eccfc",
            fontSize: "0.9rem",
            fontWeight: 600,
            fontStyle: "italic",
            textAlign: "center",
            mt: 1,
          }}
        >
          {t("Consultation is always free. Let’s talk!")}
        </Typography>
      </Stack>
    </Box>
  );
}
