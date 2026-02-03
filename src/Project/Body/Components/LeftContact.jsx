import React, { useRef, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
  CircularProgress,
  Divider,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const LeftContact = () => {
  const { t, i18n } = useTranslation();

  const theme = useTheme();
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const textFieldStyle = {
    mb: 1.5,
    "& .MuiOutlinedInput-root": {
      color: "white",
      height: "45px",
      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
      "&:hover fieldset": { borderColor: theme.palette.background.main },
      "&.Mui-focused fieldset": { borderColor: theme.palette.background.main },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: "0.85rem",
      top: "-4px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.background.main,
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_bacj23n",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(() => {
        alert("Sent!");
        form.current.reset();
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box
      sx={{
        direction: i18n.language === "ar" ? "rtl" : "ltr",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        maxWidth: "450px",
        mt: 5,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.background.main,
          fontWeight: "bold",
          mb: 2,
          textAlign: i18n.language === "ar" ? { lg: "right" } : { lg: "left" },
        }}
      >
        {t("Contact With Me")}
      </Typography>

      <form ref={form} onSubmit={sendEmail}>
        <TextField
          fullWidth
          label={t("Your Name")}
          name="from_name"
          variant="outlined"
          required
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          label={t("Your Mail")}
          name="user_email"
          type="email"
          variant="outlined"
          required
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          label={t("Your Message")}
          name="message"
          multiline
          rows={3}
          variant="outlined"
          required
          sx={{
            ...textFieldStyle,
            "& .MuiOutlinedInput-root": { height: "auto", color: "white" },
          }}
        />

        <Button
          type={t("submit")}
          variant="contained"
          disabled={loading}
          fullWidth
          sx={{
            bgcolor: theme.palette.background.main,
            color: "#000",
            fontWeight: "bold",
            py: 1,
            mt: 1,
            "&:hover": {
              bgcolor: theme.palette.background.main,
              boxShadow: `0 0 15px ${theme.palette.background.main}`,
            },
          }}
        >
          {loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            t("SEND MESSAGE")
          )}
        </Button>
      </form>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.05)", my: 2 }}>
        <Typography sx={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem" }}>
          {t("OR")}
        </Typography>
      </Divider>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Typography sx={{ color: "white", opacity: 0.6, fontSize: "0.85rem" }}>
          {t("Reach out directly via")}
        </Typography>
        <IconButton
          href="https://wa.me/970597398570"
          target="_blank"
          sx={{
            color: "#25D366",
            p: 0.5,
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.2)",
              filter: "drop-shadow(0 0 5px #25D366)",
            },
          }}
        >
          <WhatsAppIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LeftContact;
