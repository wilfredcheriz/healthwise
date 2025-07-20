// pages/contact.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  MenuItem,
  Button,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import {
  Phone,
  Mail,
  LocationOn,
  AccessTime,
  WhatsApp,
  Send,
  LocalHospital,
} from '@mui/icons-material';
import { useSnackbar } from 'notistack';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar("Message sent successfully! We'll get back to you within 24 hours.", { variant: 'success' });
    setFormData({ name: '', email: '', reason: '', message: '' });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #e0f2f1, #ffffff)', py: 10 }}>
      <Box textAlign="center" mb={6}>
        <LocalHospital fontSize="large" sx={{ color: '#2C6E49', mb: 2 }} />
        <Typography variant="h3" fontWeight="bold" sx={{ color: '#2C6E49' }}>Contact Us</Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="600px" mx="auto">
          Your health and wellness journey starts with a conversation. We're here to provide expert guidance and support.
        </Typography>
      </Box>

      <Grid container spacing={6} maxWidth="lg" mx="auto" px={2}>
        {/* Contact Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" mb={3} sx={{ color: '#2C6E49' }}>Get In Touch</Typography>
          <Typography color="text.secondary" mb={4}>
            Our dedicated healthcare professionals are ready to assist you with personalized health solutions and wellness guidance.
          </Typography>

          {[{
            icon: <Phone sx={{ color: '#2C6E49' }} />, label: 'Call us', value: '+254 796 440 777', href: 'tel:+254796440777'
          }, {
            icon: <Mail sx={{ color: '#2C6E49' }} />, label: 'Email', value: 'info@healthwiseandwellness.com', href: 'mailto:info@healthwiseandwellness.com'
          }, {
            icon: <LocationOn sx={{ color: '#2C6E49' }} />, label: 'Location', value: 'DSM Building Centre, Station Road, Kahawa West, Nairobi'
          }, {
            icon: <AccessTime sx={{ color: '#2C6E49' }} />, label: 'Operating Hours', value: 'Mon - Sat: 8:00 AM - 5:00 PM'
          }].map((info, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 2, borderLeft: '4px solid #2C6E49', pl: 2 }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box>{info.icon}</Box>
                <Box>
                  <Typography fontWeight="medium">{info.label}</Typography>
                  {info.href ? (
                    <Typography component="a" href={info.href} sx={{ color: '#2C6E49', textDecoration: 'none' }}>{info.value}</Typography>
                  ) : (
                    <Typography color="text.primary">{info.value}</Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}

          <Card sx={{ background: 'linear-gradient(to right, #43cea2, #2C6E49)', color: '#fff', mt: 4 }}>
            <CardContent textAlign="center">
              <Typography variant="subtitle1" mb={2}>Need immediate assistance?</Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#ffffff', color: '#2C6E49', '&:hover': { backgroundColor: '#e0f2f1' } }}
                startIcon={<WhatsApp sx={{ color: '#2C6E49' }} />}
                fullWidth
                href="https://wa.me/254796440777"
                target="_blank"
              >
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid #2C6E49' }}>
            <CardHeader title="Send us a message" avatar={<Send sx={{ color: '#2C6E49' }} />} />
            <CardContent>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Your Name"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />

                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />

                <FormControl fullWidth required>
                  <InputLabel>Reason for Contact</InputLabel>
                  <Select
                    value={formData.reason}
                    label="Reason for Contact"
                    onChange={(e) => handleInputChange('reason', e.target.value)}
                  >
                    <MenuItem value="Booking">Booking</MenuItem>
                    <MenuItem value="Health Advice">Health Advice</MenuItem>
                    <MenuItem value="Partnership">Partnership</MenuItem>
                    <MenuItem value="General">General Inquiry</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Your Message"
                  multiline
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />

                <Button type="submit" variant="contained" size="large" startIcon={<Send />} sx={{ backgroundColor: '#2C6E49', '&:hover': { backgroundColor: '#25643b' } }}>
                  Send Message
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
