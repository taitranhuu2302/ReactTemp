import React from "react";
import "./styles.scss";
import { Box } from "@material-ui/core";

import HomeListTop from "./HomeListTop";
import Chart from "./Chart";
import Tasks from "./Tasks";

export default function Home() {
  return (
    <Box className="home-admin bgr-admin pt-5">
      <HomeListTop />
      <Chart />
      <Tasks />
    </Box>
  );
}
