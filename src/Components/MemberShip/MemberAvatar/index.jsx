import React from "react";
import { Box, Avatar, Typography, Button, Input } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function MemberAvatar(props) {
  return (
    <>
      <Box
        className="box mt-4"
        sx={{
          padding: "35px",
          borderRadius: "3px",
          backgroundColor: "#333",
        }}
      >
        <Avatar
          className="avatar-member"
          src={
            props.image
              ? props.image
              : "https://member.aorus.com/images/pic-default.jpg"
          }
        />
        <Typography variant="h5" className="text-center my-3" color="white">
          {props.username}
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <label className="w-100" htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              onChange={props.handleFile}
              sx={{ display: "none" }}
              type="file"
            />
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                background: "#000",
                border: "1px solid #fff",
                width: "100%",
              }}
              className="font-family-Ad"
              component="span"
            >
              Edit Profile Picture
            </Button>
          </label>
          <Link
            to="/membership/changePassword"
            className="text-decoration-none"
          >
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                background: "#000",
                marginTop: "15px",
                border: "1px solid #fff",
                width: "100%",
              }}
              className="font-family-Ad"
              component="span"
            >
              Change Password
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
