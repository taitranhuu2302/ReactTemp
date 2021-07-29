import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";
import HeaderTask from "./../Home/Tasks/HeaderTask";

import {
  acGetUsersRequest,
  acUpdateUserRequest,
  DeleteUserRequest,
} from "./../../../../Actions";
import User from "./User";

export default function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acGetUsersRequest());
  }, []);

  const onSave = (user) => {
    dispatch(acUpdateUserRequest(user));
  };

  const onDelete = (id) => {
    dispatch(DeleteUserRequest(id));
  };

  return (
    <Box className="body-admin bgr-admin py-5 px-4" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box className="box">
            <HeaderTask bgr="badge-purple" title="Users" position="start" />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle1" color="initial">
                      STT
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" color="initial">
                      Username
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" color="initial">
                      Email Address
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" color="initial">
                      Password
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" color="initial">
                      Date
                    </Typography>
                  </TableCell>
                  <TableCell colSpan="2"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => {
                  return (
                    <User
                      user={user}
                      onSave={onSave}
                      onDelete={onDelete}
                      index={index + 1}
                      key={index}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
