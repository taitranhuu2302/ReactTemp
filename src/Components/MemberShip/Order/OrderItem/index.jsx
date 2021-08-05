import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import ListProductOrder from "./../ListProductOrder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function OrderItem({ item, color }) {
  return (
    <>
      <Accordion
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        className={color || "text-white"}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={color ? { color: "black" } : { color: "white" }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ textOverflow: "ellipsis" }}>{item.id}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={color || "text-white"}>STT</TableCell>
                <TableCell className={color || "text-white"}>
                  Name Product
                </TableCell>
                <TableCell className={color || "text-white"}>
                  Order Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item.list.map((item, index) => {
                return (
                  <ListProductOrder
                    color={color}
                    item={item}
                    index={index}
                    key={index}
                  />
                );
              })}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
