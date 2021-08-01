import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import "./styles.scss";
import MemberInput from "./MemberInput";
import MemberAvatar from "./MemberAvatar";
import { acGetUsersRequest, acUpdateUserRequest } from "./../../Actions";
import { Switch, Route } from "react-router-dom";
import AccoutDetail from "./AccountDetail";
import ChangePassword from "./ChangePassword";

export default function MemberShip() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    id: "",
    code: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    country: "",
    date: "",
    image: "",
  });
  const [save, setSave] = useState(false);

  useEffect(() => {
    dispatch(acGetUsersRequest());
  }, []);

  useEffect(() => {
    var current = JSON.parse(localStorage.getItem("username"));
    if (users.length > 0) {
      var index = users.findIndex((user) => user.id === current);
      var user = users[index];
      setInputValue({
        code: user.code ? user.code : "",
        firstName: user.firstName ? user.firstName : "",
        lastName: user.lastName ? user.lastName : "",
        username: user.username ? user.username : "",
        email: user.email ? user.email : "",
        country: user.country ? user.country : "",
        password: user.password || "",
        id: user.id,
        image: user.image ? user.image : "",
        date: user.date,
      });
    }
  }, [users]);

  const handleFile = (e) => {
    var file = e.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onloadend = () => {
      setInputValue({
        ...inputValue,
        image: fr.result,
      });
    };
  };

  const inputList = [
    {
      width: 12,
      label: "Personal Invite Code",
      type: "text",
      name: "code",
      value: inputValue.code,
      place: "Customize your Personal Invite Code",
      caption:
        "PLEASE NOTE: Once you save the code, it can't be changed later, so please make sure it's what you want.",
    },
    {
      width: 6,
      label: "First Name",
      type: "text",
      value: inputValue.firstName,
      name: "firstName",
      place: "",
      caption: "",
    },
    {
      width: 6,
      label: "Last Name",
      type: "text",
      value: inputValue.lastName,
      place: "",
      caption: "",
      name: "lastName",
    },
    {
      width: 12,
      label: "Nickname",
      type: "text",
      value: inputValue.username,
      place: "",
      caption: "",
      name: "username",
    },
    {
      width: 12,
      label: "Email",
      type: "text",
      disabled: true,
      value: inputValue.email,
      place: "",
      caption: "",
      name: "email",
    },
    {
      width: 12,
      label: "Country/Region",
      type: "text",
      value: inputValue.country,
      place: "",
      name: "country",
      caption: "",
    },
  ];

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(acUpdateUserRequest(inputValue));
    setSave(true);
    setTimeout(() => {
      setSave(false);
    }, 5000);
  };

  return (
    <Box className="container-fluid body-account">
      <Box className="container h-100 body-account-content">
        <Grid container className="" spacing={3}>
          <Grid item xs={12} md={4} sx={{ marginTop: "120px" }}>
            <MemberAvatar
              handleFile={handleFile}
              username={inputValue.username}
              image={inputValue.image}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Switch>
              <Route path="/membership/accountinfo">
                <AccoutDetail
                  handleChange={handleChange}
                  inputList={inputList}
                  save={save}
                  handleSave={handleSave}
                />
              </Route>
              <Route path="/membership/changePassword">
                <ChangePassword />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
