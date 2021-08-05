import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  acGetUsersRequest,
  getOrderRequest,
  updateOrderRequest,
  deleteOrderRequest,
} from "./../../../../Actions";
import OrderItem from "./../../../../Components/MemberShip/Order/OrderItem";

export default function Order() {
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acGetUsersRequest());
    dispatch(getOrderRequest());
  }, []);

  const handleAccept = (item) => {
    let newItem = {
      ...item,
      status: 1,
    };
    dispatch(updateOrderRequest(newItem));
  };

  const handleCancel = (item) => {
    if (item.status !== -1) {
      let newItem = {
        ...item,
        status: -1,
      };
      dispatch(updateOrderRequest(newItem));
      return;
    }
  };
  const handleDelete = (id) => {
    dispatch(deleteOrderRequest(id));
  };

  return (
    <Box
      className="body-admin m-0 pt-5 px-3 bgr-admin"
      sx={{ minHeight: "100vh" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>List Order</TableCell>
            <TableCell colSpan="2">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <OrderItem item={item} color="text-dark" />
                </TableCell>
                <TableCell>
                  <Button
                    disabled={item.status === 1}
                    onClick={() => handleAccept(item)}
                  >
                    Accept
                  </Button>
                </TableCell>
                <TableCell>
                  {item.status !== -1 ? (
                    <Button onClick={() => handleCancel(item)}>Cancel</Button>
                  ) : (
                    <Button color="error" onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
}
