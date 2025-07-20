import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// import Booking from '../components/Booking'; // if using relative path
const Booking = () => {
  return (
    <>
      {/* Book Appointment Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          id="appointment"
          sx={{
            mt: 10,
            px: { xs: 2, md: 10 },
            py: 8,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #134611, #32936F)',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            gutterBottom
            sx={{ textShadow: '1px 1px 2px #020402' }}
          >
            Book an Appointment
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              maxWidth: '600px',
              mx: 'auto',
              mb: 4,
              color: '#DFFFE6',
            }}
          >
            Schedule your personalized wellness session with our experts today.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="https://calendly.com/healthwisenutricare/30min"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 5,
              py: 1.8,
              fontSize: '1.1rem',
              borderRadius: '12px',
              bgcolor: '#020402',
              color: '#ffffff',
              '&:hover': {
                bgcolor: '#134611',
                boxShadow: '0 8px 20px rgba(19, 70, 17, 0.4)',
                transform: 'scale(1.03)',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            Book Now
          </Button>
        </Box>
      </motion.div>

      {/* Visit Our Offices Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          id="location"
          sx={{
            mt: 10,
            px: { xs: 2, md: 10 },
            py: 8,
            bgcolor: '#f0fdf4',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" color="#134611" fontWeight={800} gutterBottom>
            Visit Our Offices For A Consult
          </Typography>
          <Typography variant="h6" color="#020402" fontWeight={600} mb={2}>
            The Greatest Wealth is Health
          </Typography>
          <Typography variant="body1" color="textSecondary" fontWeight={500} mb={4}>
            Get In Touch With Us
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {/* Contact Info */}
            <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'left',
                  bgcolor: '#ffffff',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                }}
              >
                <Typography variant="h6" color="#134611" fontWeight={600} gutterBottom>
                  <PhoneIcon sx={{ mr: 1 }} />
                  Call us:
                </Typography>
                <Typography variant="body2" fontWeight={500} mb={2}>
                  <a href="tel:+254796440777" style={{ color: '#333', textDecoration: 'none' }}>
                    +254 796 440 777
                  </a>
                </Typography>

                <Typography variant="h6" color="#134611" fontWeight={600} gutterBottom>
                  <EmailIcon sx={{ mr: 1 }} />
                  Email:
                </Typography>
                <Typography variant="body2" fontWeight={500} mb={2}>
                  <a href="mailto:info@healthwiseandwellness.com" style={{ color: '#333', textDecoration: 'none' }}>
                    info@healthwiseandwellness.com
                  </a>
                </Typography>

                <Typography variant="h6" color="#134611" fontWeight={600} gutterBottom>
                  <LocationOnIcon sx={{ mr: 1 }} />
                  Locate Us:
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  DSM Building Centre<br />
                  Nairobi, Ground Floor<br />
                  Station Road, Kahawa West
                </Typography>
              </Paper>
            </Grid>

            {/* Map */}
            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  flexGrow: 1,
                  border: '3px solid #134611',
                  boxShadow: '0 10px 30px rgba(2, 4, 2, 0.2)',
                }}
              >
                <iframe
                  title="Healthwise Location"
                  src="https://www.google.com/maps?q=DSM%20Building%20Centre%20Station%20Road%20Kahawa%20West%20Nairobi&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};

export default Booking;
