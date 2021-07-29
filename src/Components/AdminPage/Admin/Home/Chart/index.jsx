import React from "react";
import { Grid, Box } from "@material-ui/core";
import ProductsCharts from "../../../ProductsCharts";

export default function Chart() {
  return (
    <Grid container spacing={3} className="p-4">
      <Grid item xs={12}>
        <Box className="box">
          <ProductsCharts />
        </Box>
      </Grid>
    </Grid>
  );
}
