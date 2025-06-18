import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const WhiteTextTypography = styled(Typography)(() => ({
      color: "#FFFFFF"
    
  }));

export default function GuestFooter() {
  return (
    <Paper
      sx={{
        marginTop: '0',
        marginBottom: '0',
        width: '100%',
        position: '',
        bottom: 0,
        backgroundColor: 'black'
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1
          }}
        >

        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="textPrimary">
  <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
    <WhiteTextTypography variant="caption">
      About Us
    </WhiteTextTypography>
  </a> 
  | 
  <a href="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
    <WhiteTextTypography variant="caption">
      Contact Us
    </WhiteTextTypography>
  </a>
</Typography>

        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
          <WhiteTextTypography variant="caption">
            Copyright ©2025. Limited 
            </WhiteTextTypography>
            
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
