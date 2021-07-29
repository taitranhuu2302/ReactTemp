import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

export default function HeaderTask(props) {
  return (
    <>
      <Box className={`box ${props.bgr} py-3`} sx={{ marginTop: "-30px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: `${props.position}`,
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Button sx={{ color: "white" }}>
            {props.title === "TODOLIST" ? <WorkOutlineIcon /> : null}
            <Typography
              component="p"
              variant="subtitle1"
              sx={{ fontSize: "20px " }}
              className="ms-2"
            >
              {props.title}
            </Typography>
          </Button>
          {props.caption ? (
            <Typography component="p" variant="caption" className="ms-3">
              {props.caption}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </>
  );
}
