import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
} from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function BookMedication() {
  const formRef = useRef(null);
  const router = useRouter();
  const { name, price } = router.query;

  const [selectedMedication, setSelectedMedication] = useState('');
  const [medicationPrice, setMedicationPrice] = useState('');
  const [favoriteMedicines, setFavoriteMedicines] = useState([]);
  const [formValues, setFormValues] = useState({
    fullName: '',
    contact: '',
    symptoms: '',
    date: '',
  });

  useEffect(() => {
    if (name) setSelectedMedication(name);
    if (price) setMedicationPrice(price);
  }, [name, price]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorite_medicines');
    if (storedFavorites) {
      try {
        const parsed = JSON.parse(storedFavorites);
        setFavoriteMedicines(parsed);
      } catch (e) {
        console.error('Failed to parse favorites:', e);
      }
    }
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const booking = {
      ...formValues,
      medication: selectedMedication,
      price: medicationPrice,
    };

    try {
      const response = await fetch('/api/sendBooking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        alert('✅ Booking submitted successfully!');
        setFormValues({
          fullName: '',
          contact: '',
          symptoms: '',
          date: '',
        });
        setSelectedMedication('');
        setMedicationPrice('');
      } else {
        const error = await response.json();
        alert(`❌ Failed: ${error?.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error(error);
      alert('❌ Something went wrong while sending your booking.');
    }
  };

  return (
    <>
      <Head>
        <title>Book Medication | Healthwise & Wellness</title>
        <meta
          name="description"
          content="Easily book your natural medication with Healthwise & Wellness. Personalized healing with certified wellness products."
        />
      </Head>

      {/* Hero Section */}
      <Box sx={{ bgcolor: '#EBF2FA', py: 10, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight={700} color="#04724D">
          Book Your Medication
        </Typography>
        <Typography variant="h6" mt={2} color="text.secondary">
          Start your journey to wellness with natural healing solutions.
        </Typography>
        <Button
          variant="contained"
          onClick={scrollToForm}
          sx={{ mt: 4, bgcolor: '#1B998B', color: 'white', px: 4, py: 1.5 }}
        >
          Get Started
        </Button>
      </Box>

      {/* Booking Form */}
      <Box sx={{ py: 8, px: { xs: 2, md: 10 }, bgcolor: '#ffffff' }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="#04724D"
          gutterBottom
        >
          Booking Form
        </Typography>

        {selectedMedication && (
          <Box textAlign="center" mb={2}>
            <Typography variant="h6" color="primary">
              Selected: {selectedMedication}
            </Typography>
            {medicationPrice && (
              <Typography variant="subtitle2">
                Price:{' '}
                {new Intl.NumberFormat('en-KE', {
                  style: 'currency',
                  currency: 'KES',
                }).format(Number(medicationPrice))}
              </Typography>
            )}
          </Box>
        )}

        <Box
          ref={formRef}
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 4,
            maxWidth: 700,
            mx: 'auto',
            p: 4,
            borderRadius: 2,
            bgcolor: '#EBF2FA',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                name="fullName"
                fullWidth
                required
                value={formValues.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone / Gmail"
                name="contact"
                fullWidth
                required
                value={formValues.contact}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Health Concerns / Symptoms"
                name="symptoms"
                fullWidth
                multiline
                rows={3}
                value={formValues.symptoms}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Preferred Medication"
                fullWidth
                value={selectedMedication}
                onChange={(e) => setSelectedMedication(e.target.value)}
              >
                {favoriteMedicines.length > 0 && (
                  <MenuItem disabled value="">
                    -- From Favorites --
                  </MenuItem>
                )}
                {favoriteMedicines.map((fav) => (
                  <MenuItem key={fav.id} value={fav.name}>
                    ⭐ {fav.name}
                  </MenuItem>
                ))}
                <MenuItem disabled value="">
                  -- Other Common Options --
                </MenuItem>
                <MenuItem value="Detox Cleanse">Detox Cleanse</MenuItem>
                <MenuItem value="Pain Relief">Pain Relief</MenuItem>
                <MenuItem value="Immune Boost">Immune Boost</MenuItem>
                <MenuItem value="Fertility Booster">Fertility Booster</MenuItem>
                <MenuItem value="Allergy Relief">Allergy Relief</MenuItem>
                <MenuItem value="Digestive Aid">Digestive Aid</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Preferred Date"
                name="date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formValues.date}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ bgcolor: '#1B998B', color: 'white', py: 1.5 }}
              >
                Submit Booking
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
