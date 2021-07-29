import React from "react";
import {
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function TabelTaskItem(props) {
  return (
    <>
      <TableRow>
        <TableCell>
          <Checkbox
            checked={props.work.checked ? true : false}
            onChange={(e) => props.onCheck(e, props.work)}
            color="secondary"
          />
        </TableCell>
        <TableCell>
          <Typography
            variant="body1"
            className={props.work.role === "Doing" ? null : "text-through"}
            sx={props.work.checked === true ? { color: "#999" } : {}}
          >
            {props.work.work}
          </Typography>
          <Typography variant="caption" color="#999">
            {props.work.date}
          </Typography>
        </TableCell>
        <TableCell align="right">
          {props.work.checked === true ? (
            <Tooltip title="Delete" placement="top">
              <Button onClick={() => props.deleteWork(props.work.id)}>
                <CloseIcon color="error" />
              </Button>
            </Tooltip>
          ) : null}
        </TableCell>
      </TableRow>
    </>
  );
}
