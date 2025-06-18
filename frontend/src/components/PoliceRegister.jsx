// src/components/PoliceRegister.jsx
import React, { useState } from "react";
import {
  Container, TextField, Button, Typography, Box, Paper
} from "@mui/material";
import axios from "axios";

function PoliceRegister() {
  const [formData, setFormData] = useState({
    username: "",
    city: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://surakshasetu-backend.onrender.com/police-register", formData);
      alert("Police registered successfully!");
      window.location.href = "/police"; // redirect to login
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          Police Registration
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            name="username"
            onChange={handleChange}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="City"
            name="city"
            onChange={handleChange}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default PoliceRegister;
