import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container
} from '@mui/material';

const contacts = [
  {
    name: 'Shri Ramesh Sinha',
    designation: 'Commissioner of Police, Ranchi',
    phone: '0651-2201234',
    email: 'ramesh.sinha@police.jh.gov.in',
  },
  {
    name: 'Ms. Kavita Yadav',
    designation: 'ACP - Women’s Safety, Bokaro',
    phone: '06542-2654321',
    email: 'kavita.yadav@police.jh.gov.in',
  },
  {
    name: 'Shri Arjun Mehta',
    designation: 'SP, Giridih',
    phone: '06532-2468101',
    email: 'arjun.mehta@police.jh.gov.in',
  },
  {
    name: 'Dr. Neeraj Sharma',
    designation: 'Cyber Crime Head, Ranchi',
    phone: '0651-2456789',
    email: 'neeraj.sharma@cyber.jh.gov.in',
  },
];

const ContactCard = ({ contact }) => (
  <Card sx={{ mb: 3, backgroundColor: '#f8f9fa' }}>
    <CardContent>
      <Typography variant="h6" color="primary" gutterBottom>
        {contact.name}
      </Typography>
      <Typography variant="subtitle1">{contact.designation}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        📞 {contact.phone}
      </Typography>
      <Typography variant="body2">✉️ {contact.email}</Typography>
    </CardContent>
  </Card>
);

export default function ContactUs() {
  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Our Officials
      </Typography>
      <Grid container spacing={3}>
        {contacts.map((contact, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ContactCard contact={contact} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
