import React from "react";
import { Grid, Box } from "@material-ui/core";
import HeaderTask from "./HeaderTask";
import TableTask from "./TableTask";
import TaskUsers from "./TaskUsers";

export default function Tasks() {
  return (
    <Grid container className="p-4" spacing={3}>
      <Grid item xs={12} lg={6}>
        <Box className="box">
          <HeaderTask bgr="badge-purple" title="TODOLIST" position="center" />
          <TableTask />
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box className="box">
          <HeaderTask
            bgr="badge-orange"
            title="Latest registered user"
            position="start"
            caption="Latest users in 24 hours"
          />
          <TaskUsers />
        </Box>
      </Grid>
    </Grid>
  );
}
