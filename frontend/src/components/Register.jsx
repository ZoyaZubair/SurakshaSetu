import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom'; 

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        SurakshaSetu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const [regData, setRegData] = React.useState({
    name: '',
    aadhar: '',
    dob: '2000-01-01',
    city: '',
    phoneno: '',
    email: '',
    password: '',
  });

  function onchange(e) {
    const { name, value } = e.target;
    setRegData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(regData);

    const config = {
      method: 'post',
      url: 'http://localhost:3004/register',
      data: regData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    axios(config)
      .then((result) => {
        alert('Submitted successfully!');
        window.location.href = '/login';
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to submit');
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register as Citizen
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="name" required fullWidth label="Name" value={regData.name} onChange={onchange} />
              </Grid>
              <Grid item xs={12}>
                <TextField name="aadhar" required fullWidth label="Aadhar" type="number" value={regData.aadhar} onChange={onchange} />
              </Grid>
              <Grid item xs={12}>
                <TextField name="dob" required fullWidth label="Date of Birth" type="date" value={regData.dob} onChange={onchange} InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="city-label">City</InputLabel>
                  <Select labelId="city-label" id="city" name="city" value={regData.city} label="City" onChange={onchange}>
                    <MenuItem value="Ranchi">Ranchi</MenuItem>
                    <MenuItem value="Bokaro">Bokaro</MenuItem>
                    <MenuItem value="Girdih">Giridih</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField name="phoneno" required fullWidth label="Phone Number" type="number" value={regData.phoneno} onChange={onchange} />
              </Grid>
              <Grid item xs={12}>
                <TextField name="email" required fullWidth label="Email" type="email" value={regData.email} onChange={onchange} />
              </Grid>
              <Grid item xs={12}>
                <TextField name="password" required fullWidth label="Password" type="password" value={regData.password} onChange={onchange} />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Register
            </Button>

            {/* Divider and Link to Police Register */}
            <Typography variant="body2" align="center" sx={{ mt: 2, mb: 1 }}>
              — or —
            </Typography>
            <Button
              component={RouterLink}
              to="/police-register"
              fullWidth
              variant="outlined"
              color="secondary"
              sx={{ mb: 2 }}
            >
              Register as Police
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
