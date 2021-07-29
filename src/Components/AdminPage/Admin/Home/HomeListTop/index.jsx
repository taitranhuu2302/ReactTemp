import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Divider } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import StoreIcon from "@material-ui/icons/Store";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import UpdateIcon from "@material-ui/icons/Update";

export default function HomeListTop() {
  return (
    <>
      <Grid container className="list-top px-3 mb-2" spacing={3}>
        {listTop.map((item, index) => {
          return (
            <Grid key={index} item xl={3} sm={6} xs={12}>
              <Box className="list-top-item">
                <Box>
                  <Box className={`list-top-item-logo ${item.bgrLogo}`}>
                    {item.icons}
                  </Box>
                  <Typography className="text-box" variant="body2" color="#999">
                    {item.title}
                  </Typography>
                  <Typography className="text-box" component="p" color="#333">
                    {item.body}
                  </Typography>
                </Box>
                <Divider sx={{ textAlign: "center" }} />
                <Box className="list-top-item-bottom">
                  {item.iconCaption}
                  <Link
                    to="/admin"
                    className="text-decoration-none text-secondary"
                  >
                    <Typography variant="caption">{item.caption}</Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

const listTop = [
  {
    title: "Used Space",
    bgrLogo: "bgr-item-yellow",
    icons: <FilterNoneIcon className="logo-icon" />,
    iconCaption: <WarningIcon style={{ fontSize: "18px", color: "red" }} />,
    body: "49/50GB",
    colorCaption: "red",
    caption: "Get more space",
  },
  {
    title: "Revenue",
    bgrLogo: "bgr-item-green",
    icons: <StoreIcon className="logo-icon" />,
    iconCaption: <DateRangeIcon style={{ fontSize: "18px", color: "#999" }} />,
    body: "$34,245",
    colorCaption: "#999",
    caption: "Last 24 Hours",
  },
  {
    title: "Fixed Issues",
    bgrLogo: "bgr-item-red",
    icons: <ErrorOutlineIcon className="logo-icon" />,
    iconCaption: <LocalOfferIcon style={{ fontSize: "18px", color: "#999" }} />,
    body: "75",
    colorCaption: "#999",
    caption: "Tracked from Github",
  },
  {
    title: "Follwers",
    bgrLogo: "bgr-item-blue",
    icons: <AccessibilityIcon className="logo-icon" />,
    iconCaption: <UpdateIcon style={{ fontSize: "18px", color: "#999" }} />,
    body: "+245",
    colorCaption: "#999",
    caption: "Just Updated",
  },
];
