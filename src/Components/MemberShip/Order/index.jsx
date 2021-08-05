import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import OrderItem from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderRequest, deleteOrderRequest } from "./../../../Actions";

export default function Order({ users }) {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getOrderRequest());
  }, []);
  const idCurrent = JSON.parse(localStorage.getItem("username"));
  const history = useHistory();
  const handleCancel = (id) => {
    dispatch(deleteOrderRequest(id));
  };

  const checkStatus = (status) => {
    let result = null;
    if (status === 0) {
      result = "Watting";
    } else if (status === 1) {
      result = "Accepted";
    } else {
      result = "Canceled";
    }
    return result;
  };

  return (
    <>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} className="my-5 text-center">
          <Typography variant="h4" className="font-family-Ad" color="white ">
            My Products
          </Typography>
        </Grid>
        {order.length === 0 && (
          <Grid item xs={8} textAlign="center">
            <Typography variant="h6" color="white" className="mb-5">
              You have not ordered yet
            </Typography>
            <Button
              className="background-orange text-white w-75"
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>
          </Grid>
        )}
        {order.length > 0 && (
          <Grid item xs={12}>
            <Table sx={{ background: "rgba(0,0,0,0.7)" }}>
              <TableHead>
                <TableRow>
                  <TableCell className="text-white">ID Order</TableCell>
                  <TableCell className="text-white">Date Order</TableCell>
                  <TableCell className="text-white">Status</TableCell>
                  <TableCell className="text-white"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((item, index) => {
                  if (item.userid === idCurrent) {
                    return (
                      <TableRow key={index}>
                        <TableCell className="p-0 w-75">
                          <OrderItem item={item} />
                        </TableCell>
                        <TableCell className="p-0 w-25">
                          <Typography color="white">
                            {item.created_at}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography color="white">
                            {checkStatus(item.status)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Button
                            disabled={item.status === 1 ? true : false}
                            onClick={() => handleCancel(item.id)}
                            className={
                              item.status === 1
                                ? "text-secondary"
                                : "text-white"
                            }
                            sx={{ border: "1px solid #fff" }}
                          >
                            Cancel
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  }
                })}
              </TableBody>
            </Table>
          </Grid>
        )}
      </Grid>
    </>
  );
}
