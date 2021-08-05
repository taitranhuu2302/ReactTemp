import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import MemberInput from "../MemberInput";

const AccoutDetail = (props) => {
  return (
    <>
      <MemberInput
        handleChange={props.handleChange}
        inputList={props.inputList}
      />
      {props.save && (
        <Box sx={{ textAlign: "center", marginTop: "15px" }}>
          <Typography variant="subtitle1" sx={{ color: "#ff6400" }}>
            You have successfully modified !
          </Typography>
        </Box>
      )}
      <Box className="d-flex justify-content-center">
        <Button
          onClick={props.handleSave}
          className="background-orange my-4 px-5 text-white"
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default AccoutDetail;
