import {
  Box,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { acGetUsersRequest, acUpdateUserRequest } from "./../../../Actions";

export default function ChangePassword() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();
  const [notifi, setNotifi] = useState("");
  const [err, setErr] = useState({
    oldPassword: "",
    newPassword: "",
    reNewPassword: "",
  });
  const [inputValue, setInputValue] = useState({
    oldPassword: "",
    newPassword: "",
    reNewPassword: "",
  });

  useEffect(() => {
    dispatch(acGetUsersRequest());
  }, [dispatch]);

  const listInput = [
    {
      label: "Old Password",
      value: inputValue.oldPassword,
      name: "oldPassword",
    },
    {
      label: "New Password",
      value: inputValue.newPassword,
      name: "newPassword",
    },
    {
      label: "Re-New Password",
      value: inputValue.reNewPassword,
      name: "reNewPassword",
    },
  ];

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckErr = () => {
    const current = localStorage.getItem("username");
    const index = users.findIndex((user) => user.id === +current);
    let check = true;
    const { oldPassword, newPassword, reNewPassword } = inputValue;
    var errFix = {
      oldPassword: "",
      newPassword: "",
      reNewPassword: "",
    };
    if (!oldPassword) {
      errFix = {
        ...errFix,
        oldPassword: "You have not entered your old password",
      };
      check = false;
    } else if (oldPassword !== users[index].password) {
      errFix = {
        ...errFix,
        oldPassword: "The old password entered is incorrect",
      };
      check = false;
    } else {
      errFix = { ...errFix, oldPassword: "" };
    }
    if (!newPassword) {
      errFix = {
        ...errFix,
        newPassword: "You have not entered a new password",
      };
      check = false;
    } else if (newPassword.length < 8) {
      errFix = {
        ...errFix,
        newPassword: "Your password is less than 8 characters",
      };
      check = false;
    } else {
      errFix = { ...errFix, newPassword: "" };
    }
    if (!reNewPassword) {
      errFix = {
        ...errFix,
        reNewPassword: "You have not re-entered the new password",
      };
      check = false;
    } else if (reNewPassword !== newPassword) {
      errFix = {
        ...errFix,
        reNewPassword: "Re-enter new incorrect password",
      };
      check = false;
    } else {
      errFix = { ...errFix, reNewPassword: "" };
    }
    setErr({ ...errFix });
    return check;
  };

  const handleSave = () => {
    const current = localStorage.getItem("username");
    const index = users.findIndex((user) => user.id === +current);
    var user = {
      ...users[index],
      password: inputValue.newPassword,
    };
    if (handleCheckErr()) {
      dispatch(acUpdateUserRequest(user));
      setNotifi("You have successfully updated your password!");
      setInputValue({
        oldPassword: "",
        newPassword: "",
        reNewPassword: "",
      });
    }
  };

  return (
    <Box className="container ">
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12} className="my-5 text-center">
          <Typography variant="h4" className="font-family-Ad" color="white ">
            Change My Password
          </Typography>
        </Grid>
        {listInput.map((item, index) => {
          return (
            <InputChange item={item} key={index} handleChange={handleChange} />
          );
        })}
        {(err.oldPassword || err.newPassword || err.reNewPassword) && (
          <Grid
            item
            xs={5}
            textAlign="center"
            className="active-border mt-3 py-2"
          >
            {err.oldPassword && (
              <Typography className="color-orange">
                {err.oldPassword}
              </Typography>
            )}
            {err.newPassword && (
              <Typography className="color-orange">
                {err.newPassword}
              </Typography>
            )}
            {err.reNewPassword && (
              <Typography className="color-orange">
                {err.reNewPassword}
              </Typography>
            )}
          </Grid>
        )}
        {notifi && (
          <Grid item xs={5} textAlign="center" className="mt-3">
            <Typography className="color-orange">{notifi}</Typography>
          </Grid>
        )}
        <Grid item xs={8} textAlign="center">
          <Link to="/membership/accountinfo" className="text-decoration-none">
            <Button className="background-orange my-4 px-5 mx-3 text-white">
              Go Back
            </Button>
          </Link>
          <Button
            className="background-orange my-4 px-5 text-white"
            onClick={handleSave}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

const InputChange = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Grid item xs={8}>
      <InputLabel sx={{ color: "#999" }}>{props.item.label}</InputLabel>
      <Input
        type={show ? "text" : "password"}
        className="form-control member-input"
        value={props.item.value}
        onChange={props.handleChange}
        name={props.item.name}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => setShow(!show)}>
              {show ? (
                <VisibilityIcon sx={{ color: "white" }} />
              ) : (
                <VisibilityOffIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </Grid>
  );
};
