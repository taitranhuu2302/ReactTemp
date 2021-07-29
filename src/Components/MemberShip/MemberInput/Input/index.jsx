import React, { useState } from "react";
import {
  Grid,
  Box,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

export default function InputForm(props) {
  const [show, setShow] = useState(false);

  return (
    <Grid item xs={props.item.width}>
      <InputLabel sx={{ color: "#999" }}>{props.item.label}</InputLabel>
      <Input
        type={
          props.item.type === "password"
            ? show
              ? "text"
              : "password"
            : props.item.type
        }
        name={props.item.name}
        onChange={props.handleChange}
        value={props.item.value}
        className="member-input form-control  shadow-none"
        sx={
          props.item.name === "email"
            ? {
                background: "#161616 !important",
                color: "#999 !important",
              }
            : {}
        }
        placeholder={props.item.place ? props.item.place : null}
        readOnly={props.item.disabled ? props.item.disabled : false}
        endAdornment={
          props.item.name === "password" ? (
            <InputAdornment position="end">
              <IconButton aria-label="" onClick={() => setShow(!show)}>
                {show ? (
                  <VisibilityIcon sx={{ fill: "white" }} />
                ) : (
                  <VisibilityOffIcon sx={{ fill: "white" }} />
                )}
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
      {props.item.caption ? (
        <Box className="form-text color-orange font-ubun">
          {props.item.caption}
        </Box>
      ) : null}
    </Grid>
  );
}
