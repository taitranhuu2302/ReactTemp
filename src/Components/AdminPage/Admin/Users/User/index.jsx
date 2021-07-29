import React, { useState, useEffect } from "react";
import {
  TableRow,
  TableCell,
  Input,
  InputAdornment,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import moment from "moment";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
export default function User(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    setPassword(props.user.password);
  }, []);
  const onChange = (e) => {
    setPassword(e.target.value);
  };

  const onSave = () => {
    var user = {
      id: props.user.id,
      username: props.user.username,
      email: props.user.email,
      password: password,
      date: props.user.date,
    };
    props.onSave(user);
  };

  const onDelete = () => {
    props.onDelete(props.user.id);
  };

  return (
    <TableRow>
      <TableCell>{props.index}</TableCell>
      <TableCell>{props.user.username}</TableCell>
      <TableCell>{props.user.email}</TableCell>
      <TableCell>
        <Input
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          value={password || ""}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
      </TableCell>
      <TableCell>
        <Typography variant="subtitle2">{props.user.date}</Typography>
        <Typography variant="caption">
          {moment(props.user.date).fromNow()}
        </Typography>
      </TableCell>
      <TableCell colSpan={2}>
        <Button onClick={onSave}>
          <CreateIcon color="secondary" />
        </Button>
        <Button onClick={onDelete}>
          <DeleteIcon color="secondary" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
