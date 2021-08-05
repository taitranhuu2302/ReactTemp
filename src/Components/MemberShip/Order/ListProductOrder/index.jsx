import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

export default function ListProductOrder({ index, item, color }) {
  return (
    <>
      <TableRow>
        <TableCell className={color || "text-white"}>{index + 1}</TableCell>
        <TableCell className={color || "text-white"}>{item.name}</TableCell>
        <TableCell className={color || "text-white"}>
          {item.created_at}
        </TableCell>
      </TableRow>
    </>
  );
}
