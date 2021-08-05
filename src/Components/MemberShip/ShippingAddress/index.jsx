import {
  Box,
  Button,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

export default function ShippingAddress(props) {
  var { users } = props;
  const history = useHistory();
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    provice: "",
    postCode: "",
    phoneNumber: "",
  });

  useEffect(() => {
    var id = JSON.parse(localStorage.getItem("username"));
    var index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      let user = users[index];
      setValue({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        addressLine1: user.addressLine1 || "",
        addressLine2: user.addressLine2 || "",
        city: user.city || "",
        provice: user.provice || "",
        postCode: user.postCode || "",
        phoneNumber: user.phoneNumber || "",
      });
    }
  }, [users]);

  const handleChange = (e) => {
    let name = e.target.name;
    let valueChange = e.target.value;
    setValue({
      ...value,
      [name]: valueChange,
    });
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} className="mt-5 mb-4 text-center">
          <Typography variant="h4" className="font-family-Ad" color="white">
            Shipping Address
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ color: "#999" }}>First Name*</InputLabel>
          <Input
            type="text"
            className="member-input form-control  shadow-none"
            name="firstName"
            value={value.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ color: "#999" }}>Last Name*</InputLabel>
          <Input
            type="text"
            className="member-input form-control  shadow-none"
            name="lastName"
            value={value.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={{ color: "#999" }}>Address Line 1*</InputLabel>
          <Input
            type="text"
            className="member-input form-control  shadow-none"
            name="addressLine1"
            value={value.addressLine1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={{ color: "#999" }}>
            Address Line 2 (Optional)
          </InputLabel>
          <Input
            type="text"
            className="member-input form-control  shadow-none"
            value={value.addressLine2}
            name="addressLine2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel sx={{ color: "#999" }}>City*</InputLabel>
          <Input
            type="text"
            className="member-input form-control  shadow-none"
            value={value.city}
            name="city"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel sx={{ color: "#999" }}>State/Provice*</InputLabel>
          <Input
            type="text"
            className="member-input form-control  shadow-none"
            value={value.provice}
            name="provice"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel sx={{ color: "#999" }}>Zip Code/Post Code*</InputLabel>
          <Input
            type="text"
            className="member-input form-control  shadow-none"
            value={value.postCode}
            name="postCode"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={{ color: "#999" }}>Phone Number*</InputLabel>
          <Input
            type="text"
            className="member-input form-control  shadow-none"
            value={value.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      {props.save && (
        <Box sx={{ textAlign: "center", marginTop: "15px" }}>
          <Typography variant="subtitle1" sx={{ color: "#ff6400" }}>
            You have successfully modified !
          </Typography>
        </Box>
      )}
      <Box className="d-flex justify-content-center">
        <Button
          onClick={goBack}
          className="background-orange my-4 px-5 mx-3 text-white"
        >
          Go Back
        </Button>
        <Button
          className="background-orange my-4 px-5 text-white"
          onClick={() => props.handleShipping(value)}
        >
          Save
        </Button>
      </Box>
    </>
  );
}
