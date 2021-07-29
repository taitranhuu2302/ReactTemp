import React from "react";
import { Grid, Typography } from "@material-ui/core";
import InputForm from "./Input";

export default function MemberInput(props) {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} className="mt-5 mb-4 text-center">
          <Typography variant="h4" className="font-family-Ad" color="white ">
            My Account Details
          </Typography>
        </Grid>
        {props.inputList.map((item, index) => {
          return (
            <InputForm
              item={item}
              handleChange={props.handleChange}
              key={index}
            />
          );
        })}
      </Grid>
    </>
  );
}
