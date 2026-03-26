import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import Loader from "../Else/Loader";
const RightHead = lazy(() => import("../Header/RightHead"));
const LeftHead = lazy(() => import("../Header/LeftHead"));

export default function HomeSec() {
  return (
    <>
      {" "}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, md: 10, lg: 15, xl: 35 },
          width: "100%",
          height: "auto",
        }}
      >
        <Suspense fallback={<Loader />}>
          <RightHead />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <LeftHead />
        </Suspense>
      </Box>
    </>
  );
}
