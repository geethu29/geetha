import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    eventName: "",
    emailId: "",
  });

  const { name, eventName, emailId } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/adduser", userData);
    // setUserData({ name: "", eventName: "", emailId: "" });
    navigate("/HomePage");
  };

  return (
    <Container>
      <Box>
        <h1>REGISTER</h1>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              value={name}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="Event Name"
              name="eventName"
              value={eventName}
              onChange={handleData}
            />
            <TextField
              label="Email Address"
              name="emailId"
              value={emailId}
              variant="outlined"
              onChange={handleData}
            />

            <Stack direction={"row"} spacing={2}>
              <Button color="success" type="submit" variant="contained">
                SUBMIT
              </Button>
              <Button href="/HomePage" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddUser;
