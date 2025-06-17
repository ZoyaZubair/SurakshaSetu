import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function AboutUs() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About SurakshaSetu
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Empowering citizens. Assisting law enforcement. Ensuring safety.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="body1" paragraph>
          <strong>SurakshaSetu</strong> is a community-driven platform designed to bridge the gap between citizens and law enforcement agencies. In a world where quick reporting and prompt response are crucial, SurakshaSetu offers an intuitive interface for civilians to report crimes, raise alerts, and connect with nearby police stations.
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform not only helps in reducing the communication gap but also supports transparency, accountability, and faster redressal. Whether you're a citizen in need of help or a police officer managing case data, SurakshaSetu simplifies the process.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Key Features:
        </Typography>
        <ul>
          <li><Typography variant="body1">Real-time FIR and complaint registration</Typography></li>
          <li><Typography variant="body1">Police login and verification system</Typography></li>
          <li><Typography variant="body1">User-friendly dashboard for tracking complaints</Typography></li>
          <li><Typography variant="body1">Secure data handling and privacy protection</Typography></li>
        </ul>
      </Box>

      <Box>
        <Typography variant="body1">
          Our mission is to create a safe and secure environment for everyone by utilizing technology to foster trust, cooperation, and transparency between citizens and the police.
        </Typography>
      </Box>
    </Container>
  );
}
