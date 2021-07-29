import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Button,
  Input,
  InputLabel,
  List,
  ListItem,
  Avatar,
  Typography,
  InputAdornment,
  IconButton,
  Stack,
} from "@material-ui/core";
import HeaderTask from "./../Home/Tasks/HeaderTask";
import {
  acGetUserAdminRequest,
  acUpdateUserAdminRequest,
} from "./../../../../Actions";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function Profile() {
  const usersAdmin = useSelector((state) => state.usersAdmin);
  const [showPassword, setShowPassword] = useState(false);
  const [updated, setUpdated] = useState(false);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    id: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    postalCode: "",
    about: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    dispatch(acGetUserAdminRequest());
  }, []);

  useEffect(() => {
    const userLocal = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : "";
    var i = -1;
    if (usersAdmin.length > 0) {
      usersAdmin.forEach((user, index) => {
        if (user.email === userLocal) {
          return (i = index);
        }
      });
    }
    if (i !== -1) {
      setInputValue({
        ...inputValue,
        id: usersAdmin[i].id,
        email: usersAdmin[i].email,
        password: usersAdmin[i].password,
        firstName: usersAdmin[i].firstName,
        lastName: usersAdmin[i].lastName,
        city: usersAdmin[i].city || "",
        country: usersAdmin[i].country || "",
        postalCode: usersAdmin[i].postalCode || "",
        about: usersAdmin[i].about || "",
      });
      setAvatar(usersAdmin[i].avatar);
      setFullName(`${usersAdmin[i].firstName} ${usersAdmin[i].lastName}`);
    }
  }, [usersAdmin]);

  const listInput = [
    {
      label: "Email Address",
      name: "email",
      width: 3,
      value: inputValue.email,
    },
    {
      label: "Password",
      name: "password",
      width: 3,
      value: inputValue.password,
    },
    {
      label: "First Name",
      width: 6,
      name: "firstName",
      value: inputValue.firstName,
    },
    {
      label: "Last Name",
      width: 6,
      name: "lastName",
      value: inputValue.lastName,
    },
    {
      label: "City",
      width: 4,
      name: "city",
      value: inputValue.city,
    },
    {
      label: "Country",
      width: 4,
      name: "country",
      value: inputValue.country,
    },
    {
      label: "Postal Code",
      width: 4,
      name: "postalCode",
      value: inputValue.postalCode,
    },
    {
      label: "About me",
      width: 12,
      name: "about",
      value: inputValue.about,
    },
  ];

  const onChangeAvatar = (e) => {
    const file = e.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onloadend = () => {
      setAvatar(fr.result);
    };
  };

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const updateProfile = () => {
    const userUpdate = {
      id: inputValue.id,
      email: inputValue.email,
      password: inputValue.password,
      firstName: inputValue.firstName,
      lastName: inputValue.lastName,
      city: inputValue.city,
      country: inputValue.country,
      postalCode: inputValue.postalCode,
      about: inputValue.about,
      avatar: avatar,
    };
    dispatch(acUpdateUserAdminRequest(userUpdate));
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false);
    }, 5000);
  };

  return (
    <Box className="body-admin m-0 pt-5  bgr-admin" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={1} className="ps-4 w-100">
        <Grid item xs={12} md={8} className="mb-5">
          <Box className="box" sx={{ minHeight: "476px" }}>
            <HeaderTask
              bgr="badge-purple"
              title="Edit Profile"
              position="start"
              caption="Complete your profile"
            />
            <Grid container spacing={2} className="py-4 px-3">
              <Grid item xs={6}>
                <InputLabel>Company</InputLabel>
                <Input
                  color="secondary"
                  className="w-100"
                  type="text"
                  disabled
                  value="How2Code"
                />
              </Grid>
              {listInput.map((item, index) => {
                return (
                  <Grid key={index} item xs={item.width}>
                    <InputLabel>{item.label}</InputLabel>
                    {item.name !== "password" ? (
                      <Input
                        color="secondary"
                        className="w-100"
                        type="text"
                        disabled={item.name === "email" ? true : false}
                        value={item.value || ""}
                        onChange={onChange}
                        name={item.name}
                      />
                    ) : (
                      <Input
                        color="secondary"
                        className="w-100"
                        type={showPassword ? "text" : "password"}
                        value={item.value || ""}
                        onChange={onChange}
                        name={item.name}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  </Grid>
                );
              })}
              <Grid item xs={12} className="mt-3">
                {updated && (
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography color="secondary" variant="body2">
                      You have successfully updated !
                    </Typography>
                  </Box>
                )}
                <Button
                  onClick={updateProfile}
                  variant="contained"
                  color="secondary"
                >
                  UPDATE PROFILE
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="box">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-46px",
              }}
            >
              <Avatar sx={{ width: "120px", height: "120px" }} src={avatar} />
            </Box>
            <Stack>
              <label
                htmlFor="contained-button-file"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "26px",
                }}
              >
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  onChange={onChangeAvatar}
                  type="file"
                  sx={{ display: "none" }}
                />
                <Button variant="contained" color="secondary" component="span">
                  Upload
                </Button>
              </label>
            </Stack>
            <List className="mt-4 pb-5">
              <ListItem sx={{ justifyContent: "center" }}>
                <Typography variant="h5">{fullName}</Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: "center" }}>
                <Typography>{inputValue.about}</Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: "center" }} className="mt-3">
                <Button className="w-25" variant="contained" color="secondary">
                  Follow me
                </Button>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
