import {
  List,
  ListItemButton,
  Divider,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import RoomIcon from "@material-ui/icons/Room";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import TocIcon from "@material-ui/icons/Toc";
import React from "react";

export default function SideBar(props) {
  let location = useLocation();
  return (
    <>
      <List className="side-list d-flex flex-column align-items-center">
        <ListItemButton alignItems="center" component="a" to="/">
          <ListItemIcon sx={{ width: 200 }}>
            <img
              src="https://vn.aorus.com/Z490-soar-to-new-heights/assets/images/logo-aorus.png"
              alt=""
              className="w-100"
            />
          </ListItemIcon>
        </ListItemButton>
        <Divider sx={{ color: "#999", width: 260, marginBottom: 2 }} />
        {listSideItem.map((item, index) => {
          return (
            <Button
              key={index}
              className={
                location.pathname === item.to
                  ? `list-item-side ${props.bgrColor}`
                  : "list-item-side"
              }
            >
              <Link className="list-item-link" to={item.to}>
                <ListItemIcon className="icon-side">{item.icon}</ListItemIcon>
                <ListItemText sx={{ textAlign: "start", paddingLeft: "10px" }}>
                  {item.label}
                </ListItemText>
              </Link>
            </Button>
          );
        })}
      </List>
      <div className="background">
        <img src={props.image} alt="" />
      </div>
    </>
  );
}

const listSideItem = [
  {
    label: "Dashborad",
    icon: <ViewQuiltIcon />,
    to: "/admin",
  },
  {
    label: "UserProfile",
    icon: <PersonIcon />,
    to: "/admin/profile",
  },
  {
    label: "Users",
    icon: <PeopleAltIcon />,
    to: "/admin/users",
  },
  {
    label: "Products",
    icon: <TocIcon />,
    to: "/admin/list-products",
  },
  {
    label: "Typography",
    icon: <AssignmentIcon />,
    to: "/admin/typography",
  },
  {
    label: "Icons",
    icon: <EmojiEmotionsIcon />,
    to: "/admin/icons",
  },
  {
    label: "Maps",
    icon: <RoomIcon />,
    to: "/admin/maps",
  },
  {
    label: "Notifications",
    icon: <NotificationsIcon />,
    to: "/admin/notifications",
  },
];
