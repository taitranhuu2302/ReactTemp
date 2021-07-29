import React, { useState } from "react";
import "./styles.scss";

import {
  Box,
  Button,
  List,
  ListItem,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import HeaderNav from "./HeaderNav";
import SideBar from "./SideBar";

export default function Header() {
  const [toggleSide, setToggleSide] = useState(false);
  const [image, setImage] = useState(
    "https://demos.creative-tim.com/material-dashboard-react/static/media/sidebar-1.0a127c58.jpg"
  );
  const [bgrColor, setBgrColor] = useState("badge-purple");
  const [hidden, setHidden] = useState(true);

  const onToggleSide = () => {
    setToggleSide(!toggleSide);
  };

  const changeBgr = (image) => {
    setImage(image);
  };

  const changeBgrColor = (color) => {
    setBgrColor(color);
  };

  return (
    <header className="header-admin">
      <Box className={toggleSide ? "side-bar active-side" : "side-bar"}>
        <SideBar image={image} bgrColor={bgrColor} />
      </Box>
      <Box className="header-nav">
        <HeaderNav toggleSide={toggleSide} onToggleSide={onToggleSide} />
      </Box>
      <Box className="settings">
        <Button onClick={() => setHidden(!hidden)} className="button-settings">
          <SettingsIcon className="settings-icons" />
        </Button>
        <Box
          className={hidden ? "sidebar-filter" : "sidebar-filter active-change"}
        >
          <Box className="sidebar-filter-color text-center">
            <Typography variant="subtitle2" color="initial">
              SIDEBAR FILTERS
            </Typography>
            <List sx={{ display: "flex", justifyContent: "center" }}>
              {color.map((item, index) => {
                return (
                  <ListItem onClick={() => changeBgrColor(item)} key={index}>
                    <span className={`change-color ${item}`}></span>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box className="sidebar-filter-image text-center">
            <Typography variant="subtitle2">IMAGES</Typography>
            <ImageList cols={4}>
              {imageBgr.map((item, index) => {
                return (
                  <ImageListItem
                    sx={{
                      borderRadius: "3px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                    onClick={() => changeBgr(item)}
                    key={index}
                  >
                    <img
                      srcSet={item}
                      className="image-bgr"
                      loading="lazy"
                      alt={item}
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Box>
        </Box>
      </Box>
    </header>
  );
}
const imageBgr = [
  "https://demos.creative-tim.com/material-dashboard-react/static/media/sidebar-1.0a127c58.jpg",
  "https://demos.creative-tim.com/material-dashboard-react/static/media/sidebar-2.22f68ba5.jpg",
  "https://demos.creative-tim.com/material-dashboard-react/static/media/sidebar-3.e667b13e.jpg",
  "https://demos.creative-tim.com/material-dashboard-react/static/media/sidebar-4.dd4b5581.jpg",
];

const color = ["badge-purple", "badge-blue", "badge-green", "badge-orange"];
