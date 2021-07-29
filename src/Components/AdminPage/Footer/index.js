import React from "react";
import { Grid, ListItem, List, Box, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <Box className="body-admin bgr-admin ps-4 border-top">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <List
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <ListItem>
              <Typography variant="subtitle2" color="initial">
                HOME
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" color="initial">
                COMPANY
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" color="initial">
                PORTFOLIO
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" color="initial">
                BLOG
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            className="h-100"
          >
            <Typography variant="subtitle2" color="initial">
              © 2021 Ralph, Made with love for a better web
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
