import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function FullAndWar({ sideTitleVariants }) {
  return (
    <>
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
    </>
  );
}
