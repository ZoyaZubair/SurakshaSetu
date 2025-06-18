import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://wallpapercat.com/w/full/b/a/9/1209998-3840x2160-desktop-4k-glow-in-the-dark-background-photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.6)",
          zIndex: 0
        }}
      />

      {/* Main content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          bgcolor: "rgba(224, 182, 219, 0.92)",
          borderRadius: 3,
          p: 4,
          maxWidth: 700,
          textAlign: "center",
          boxShadow: 6
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
          alt="SurakshaSetu Logo"
          width={90}
          height={90}
          style={{ marginBottom: 16 }}
        />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome to SurakshaSetu
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          SurakshaSetu is your digital shield. Stay informed, stay alert, and report concerns in
          real-time. Connecting citizens with law enforcement for a safer, smarter tomorrow.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" color="primary" href="/register">
            Get Started
          </Button>
          <Button variant="outlined" color="secondary" href="/about">
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
