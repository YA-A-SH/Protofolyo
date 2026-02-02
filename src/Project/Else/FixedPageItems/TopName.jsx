import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function TopNameAndBtmLinks() {
  const theme = useTheme();
  const letterVariants = {
    hidden: { y: 20, opacity: 0, rotate: -20 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, y: 20 },
    visible: { scale: 1, y: 0, transition: { type: "spring", damping: 4 } },
  };

  const links = [
    { icon: <GitHub />, href: "https://github.com/YA-A-SH" },
    { icon: <Email />, href: "mailto:cr7yaser2004@gmail.com" },
    {
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/ya-a-sh-4494743a3",
    },
  ];
  return (
    <>
      <Stack
        sx={{
          width: "55%",
          height: "30px",
          bgcolor: theme.palette.background.main,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          top: 0,
          px: { xs: 3, md: 4, xl: 6 },

          "&::after": {
            content: '""',
            position: "absolute",
            right: "0px",
            top: 0,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "32px 32px 32px 32px",
            borderColor: `transparent  transparent ${theme.palette.background.default}   ${theme.palette.background.default}   `,
            transform: "scaleX(-1)",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            left: "0px",
            top: 0,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "0 0 40px 32px",
            borderColor: `${theme.palette.background.default}  ${theme.palette.background.default} ${theme.palette.background.default} transparent`,
            transform: "scaleX(-1)",
          },
        }}
      >
        {/* FirstLine */}
        <Box
          component={motion.div}
          initial={{ y: 20, opacity: 0, rotate: -360 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.3, delay: 1.3 }}
          sx={{
            flexGrow: 1,
            borderRadius: "50px",
            height: "2.3px",
            bgcolor: theme.palette.background.default,
          }}
        />{" "}
        {/* DOT */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -50, x: 40 }}
          animate={{
            opacity: 1,
            y: [-50, -20, -30, 0],
            x: [40, 80, 80, 170, 0],
          }}
          transition={{ duration: 1.5, delay: 1.3 }}
          sx={{
            width: "7px",
            height: "7px",
            border: "2px solid black",
            borderRadius: "50%",
            bgcolor: theme.palette.background.default,
            position: "relative",
            left: "-2px",
            top: "0px",
            transform: "translateY(-20%)",
          }}
        />
        {/* YA.A.SH */}
        <Typography
          component={motion.h1}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          variant="h4"
          color="primary.dark"
          sx={{
            px: { xs: 0 },
            fontSize: {
              xs: "1.4rem",
              ss: "1.6rem",
              sm: "1.9rem",
              md: "2.2rem",
            },
          }}
        >
          {Array.from("YA.A.SH").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </Typography>
        {/* DOT */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -50, x: 40 }}
          animate={{
            opacity: 1,
            y: [-50, -20, -30, 0],
            x: [40, -80, -80, -170, 0],
          }}
          transition={{ duration: 1.5, delay: 1.3 }}
          sx={{
            width: "7px",
            height: "7px",
            border: "2px solid black",
            borderRadius: "50%",
            bgcolor: theme.palette.background.default,
            position: "relative",
            right: "-2px",
            top: "0px",
            transform: "translateY(-20%)",
          }}
        />
        {/* Second Line */}
        <Box
          component={motion.div}
          initial={{ y: 20, opacity: 0, rotate: -360 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.3, delay: 1.3 }}
          sx={{
            flexGrow: 1,
            borderRadius: "50px",
            height: "2.3px",
            bgcolor: theme.palette.background.default,
          }}
        />
      </Stack>
      <Stack
        sx={{
          width: "35%",
          height: "50px",
          bgcolor: theme.palette.background.main,
          textAlign: "center",
          display: "flex",
          justifyContent: { xs: "center", sm: "space-evenly" },
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          pt: 1.5,
          px: { xs: 0, md: 4, xl: 6 },

          "&::after": {
            content: '""',
            position: "absolute",
            right: "0px",
            top: -14,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "22px 22px 22px 22px",
            borderColor: ` ${theme.palette.background.default} transparent   transparent    ${theme.palette.background.default}   `,
            transform: "scaleX(-1)",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            left: "0px",
            top: -14,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "22px 22px 22px 22px",
            borderColor: `${theme.palette.background.default} ${theme.palette.background.default} transparent  transparent`,
            transform: "scaleX(-1)",
          },
        }}
      >
        {links.map((link, index) => (
          <IconButton
            key={index}
            component={motion.a}
            href={link.href}
            variants={iconVariants}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: { xs: "1px" },
              "&:hover": {
                color: "primary.main",
                bgcolor: "white",
              },
            }}
          >
            {link.icon}
          </IconButton>
        ))}
      </Stack>
    </>
  );
}
