import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Stack,
  Pagination,
} from "@material-ui/core";
import * as actions from "./../../../../../../Actions";

export default function TaskUsers() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  const checkUsers = (users) => {
    var result = null;
    var count = 0;

    users.forEach((user, index) => {
      if (
        moment(user.date).fromNow().indexOf("hours") !== -1 ||
        moment(user.date).fromNow().indexOf("hour") !== -1 ||
        moment(user.date).fromNow().indexOf("minutes") !== -1 ||
        moment(user.date).fromNow().indexOf("minute") !== -1 ||
        moment(user.date).fromNow().indexOf("seconds") !== -1 ||
        moment(user.date).fromNow().indexOf("second") !== -1
      ) {
        count++;
      }
    });

    count === 0 ? (result = false) : (result = true);
    return result;
  };

  useEffect(() => {
    dispatch(actions.acGetUsersRequest());
  }, []);

  var pageNumber = 0;
  for (let i = 1; i <= Math.ceil(users.length / postsPerPage); i++) {
    pageNumber++;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Box>
      <Box sx={{ minHeight: "400px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checkUsers(currentPosts) ? (
              currentPosts.map((user, index) => {
                if (
                  moment(user.date).fromNow().indexOf("hours") !== -1 ||
                  moment(user.date).fromNow().indexOf("hour") !== -1 ||
                  moment(user.date).fromNow().indexOf("minutes") !== -1 ||
                  moment(user.date).fromNow().indexOf("minute") !== -1 ||
                  moment(user.date).fromNow().indexOf("seconds") !== -1 ||
                  moment(user.date).fromNow().indexOf("second") !== -1
                ) {
                  return (
                    <TableRow key={index}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.date}</TableCell>
                    </TableRow>
                  );
                }
              })
            ) : (
              <TableRow>
                <TableCell colSpan={4}>
                  No users have registered within the last 24 hours
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
      <Box
        sx={{ padding: "10px 0", display: "flex", justifyContent: "center" }}
      >
        <Stack spacing={2}>
          <Pagination
            count={pageNumber}
            onClick={(e) => setCurrentPage(e.target.innerText)}
            hidePrevButton
            hideNextButton
          />
        </Stack>
      </Box>
    </Box>
  );
}
