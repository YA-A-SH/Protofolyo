import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import RightHead from "../Header/RightHead";
import LeftHead from "../Header/LeftHead";
import { motion } from "framer-motion";
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

  const sideTitleVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)", x: -50 },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      x: 0,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

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
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: theme.palette.background.green,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          height: { xs: "99%", md: "96vh" },
          maxWidth: "98%",
          bgcolor: theme.palette.background.default,
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 1,
          m: { sm: 1 },
        }}
      >
        {/* The Top Name */}
        <Stack
          sx={{
            width: "55%",
            height: "30px",
            bgcolor: theme.palette.background.green,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
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
        {/* The Bottom Links */}
        <Stack
          sx={{
            width: "35%",
            height: "50px",
            bgcolor: theme.palette.background.green,
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
          {[<GitHub />, <Email />, <LinkedIn />].map((icon, index) => (
            <IconButton
              key={index}
              component={motion.button}
              variants={iconVariants}
              sx={{
                fontSize: { xs: "1px" },
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "white",
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
        {/* Soft Eng */}
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
            // bgcolor: "red",
            // px: { xs: 1 },
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
            Software Engineer
          </Typography>
        </Box>
        {/* Front End Dev */}
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
            Front End Developer
          </Typography>
        </Box>
        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            mt: { xs: 6, sm: 12, md: 7 },
            gap: { xs: 2, ss: 3, sm: 7, md: 10, lg: 10 },
          }}
        >
          {" "}
          <Box
            sx={{
              flex: 1,
              textAlign: "left",
              height: "70%",
              mb: { xs: 12 },
              ml: { lg: 10 },
            }}
          >
            <RightHead />
          </Box>{" "}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              height: "70%",
              position: "relative",
              minHeight: {
                xs: "300px",
                ss: "350px",
                sm: "450px",
                md: "350px",
                ms: "450px",
              },
              minWidth: {
                xs: "300px",
                ss: "350px",
                sm: "450px",
                md: "350px",
                ms: "450px",
              },
            }}
          >
            <LeftHead />
          </Box>
        </Box>
        {/* Full Name */}
        <Box
          component={motion.div}
          variants={sideTitleVariants}
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: {
              xs: "100px",
              ss: "150px",
              sm: "200px",
              md: "250px",
              lg: "300px",
            },
            height: { xs: "30px", sm: "30px", md: "50px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 1,
            // bgcolor: "red",
            ml: { md: 2 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: {
                xs: "0.8rem",
                ss: "1.1rem",
                sm: "1.5rem",
                md: "1.9rem",
                lg: "1.7rem",
              },
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            Yaser Ali Shagfa
          </Typography>
        </Box>
        {/* War */}
        <Box
          component={motion.div}
          variants={sideTitleVariants}
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: {
              xs: "100px",
              ss: "150px",
              sm: "200px",
              md: "300px",
              lg: "400px",
            },
            height: { xs: "40px", ss: "50px", sm: "50px", md: "30px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            // bgcolor: "red",
            mb: { sm: 0.4, md: 0, lg: 1 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "0.7rem",
                ss: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
                lg: "1.7rem",
              },
              fontWeight: "bold",
            }}
          >
            From Gaza :{" "}
            <Box
              component="br"
              sx={{
                display: { xs: "block", md: "none" },
              }}
            />{" "}
            Means War Engineer
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}
