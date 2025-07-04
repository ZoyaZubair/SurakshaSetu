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
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        SurakshaSetu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function PoliceSign() {

  const [data, setData] = React.useState({
    username: "",
    password: ""
  })

  function onchange(eve) {
    const name = eve.target.name;
    const value = eve.target.value;
    setData((prev) => {
        return {...prev, [name]: value};
    });
}


async function handleClick(event) {
  event.preventDefault();

  console.log(data);
  
  const configuration = await {
    method: "post",
    url: "https://surakshasetu-backend.onrender.com/police-login",
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  axios(configuration).then((result) => {
    cookies.set("POLICETOKEN", result.data.token, {
      path: "/",
    });
    alert("success");
    window.location.href = "/";
  }).catch((err) => {
    console.log(err);
  });
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
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
            Police Sign in
          </Typography>
          <Box component="form" onSubmit={handleClick} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              type="text"
              autoComplete="username"
              value={data.username}
              onChange={onchange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={data.password}
              onChange={onchange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Sign In
            </Button>
            <Grid container>
            <Grid item xs>
                <Link href="/login" variant="body2">
                  Citizen Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}