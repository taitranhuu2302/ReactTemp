import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../../../../../../Actions";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Fab,
  Box,
  Tooltip,
  Collapse,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  Stack,
  Pagination,
} from "@material-ui/core";
import moment from "moment";
import AddIcon from "@material-ui/icons/Add";
import TableTaskItem from "./TableTaskItem";

export default function TableTask() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [keyAdd, setKeyAdd] = useState("");
  const works = useSelector((state) => state.works);
  const dispatch = useDispatch();

  const date = new moment();
  const dateTime = date.format("L LTS");

  useEffect(() => {
    dispatch(actions.getWorkRequest());
  }, []);

  const addWork = () => {
    var workObj = {
      work: keyAdd,
      role: "Doing",
      date: dateTime,
    };
    if (!workObj.work) {
      return;
    }
    dispatch(actions.addWorkRequest(workObj));
    setKeyAdd("");
  };

  const deleteWork = (id) => {
    dispatch(actions.deleteWorkRequest(id));
  };

  const onCheck = (e, work) => {
    var check = e.target.checked;
    var workNew = {};
    if (check) {
      workNew = {
        checked: check,
        id: work.id,
        work: work.work,
        role: "Done",
        date: work.date,
      };
      dispatch(actions.updateWorkRequest(workNew));
    } else {
      workNew = {
        checked: check,
        id: work.id,
        work: work.work,
        role: "Doing",
        date: work.date,
      };
      dispatch(actions.updateWorkRequest(workNew));
    }
  };

  var pageNumber = 0;
  for (let i = 1; i <= Math.ceil(works.length / postsPerPage); i++) {
    pageNumber++;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = works.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ minHeight: "422px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3}>
                <Collapse timeout="auto" unmountOnExit in={open}>
                  <FormControl variant="standard" className="w-100">
                    <InputLabel>Add Work</InputLabel>
                    <Input
                      type="text"
                      value={keyAdd}
                      className="w-100"
                      onChange={(e) => setKeyAdd(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <Button onClick={() => addWork()}>
                            <AddIcon />
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Collapse>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((work, index) => {
              return (
                <TableTaskItem
                  key={index}
                  onCheck={onCheck}
                  work={work}
                  deleteWork={deleteWork}
                />
              );
            })}
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
            color="secondary"
            hidePrevButton
            hideNextButton
          />
        </Stack>
      </Box>
      <Tooltip title="Add" placement="top">
        <Fab
          color="secondary"
          onClick={() => setOpen(!open)}
          sx={{ position: "absolute", top: "-65px", right: "10px" }}
          className="button-add"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}
