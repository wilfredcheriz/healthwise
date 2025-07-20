import React from 'react';
import { Box, Typography, Avatar, Grid, Card } from '@mui/material';
import Head from 'next/head';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ScienceIcon from '@mui/icons-material/Science';
import SpaIcon from '@mui/icons-material/Spa';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Healthwise & Wellness</title>
        <meta
          name="description"
          content="Discover our journey, mission, and founder at Healthwise & Wellness. Empowering lives through holistic natural care since 2010."
        />
      </Head>

      {/* Hero Banner */}
      <Box sx={{ bgcolor: '#136F63', color: '#FDFFFC', py: 10, textAlign: 'center' }}>
        <Typography variant="h2" fontWeight={700}>About Us</Typography>
        <Typography
          variant="h4"
          mt={2}
          sx={{
            animation: 'colorCycle 6s infinite',
            fontWeight: 600,
            '@keyframes colorCycle': {
              '0%': { color: '#04F06A' },
              '25%': { color: '#70EE9C' },
              '50%': { color: '#4CB944' },
              '75%': { color: '#ACECA1' },
              '100%': { color: '#04F06A' },
            },
          }}
        >
          Empowering wellness through natural and holistic care since 2010
        </Typography>
      </Box>

      {/* Our Story */}
      <Box sx={{ px: { xs: 2, md: 10 }, py: 8, bgcolor: '#FDFFFC' }}>
        <Typography variant="h4" sx={{ color: '#4CB944' }} gutterBottom fontWeight={700} textAlign="center">
          Our Journey
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', color: '#000000' }} fontWeight={500}>
          Healthwise & Wellness was founded in 2010 with a mission to heal the body, mind, and soul through Natural Health Education.
          What began as a small initiative has grown into a trusted wellness brand serving over 10,000 people.
          <br /><br />
          We believe that through proper Diet, Natural Medication, Emotional Balance, and Spiritual Awareness, anyone can reclaim their well-being.
          Our practice is rooted in compassion, integrity, and a deep commitment to continuous learning and personalized care.
        </Typography>
      </Box>

      {/* Meet the Founder */}
      <Box sx={{ px: { xs: 2, md: 10 }, py: 8, bgcolor: 'primary.main' }}>
        <Typography variant="h4" sx={{ color: '#000F08' }} gutterBottom fontWeight={700} textAlign="center">
          Meet Our Founder
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, textAlign: 'center', bgcolor: '#FDFFFC', borderRadius: 4 }}>
              <Avatar
                src="/images/founder.png"
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6" fontWeight={700} sx={{ color: '#000000' }}>Joseph Wanjohi</Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Founder & Wellness Director
              </Typography>
              <Typography variant="body1" fontWeight={500} sx={{ color: '#000000' }}>
                Joseph Wanjohi is the founder of Healthwise and Wellness, a leading wellness center in Nairobi, Kenya. He holds a degree in Nutrition and Dietetics from Stellenbosch University, South Africa, and a diploma in Mental Health and Addiction Science from SAPTA College, Nairobi. He is also an International Certified Addiction Professional – Prevention (ICAP-P).
                <br /><br />
                Joseph has worked with diverse populations, including collaboration with the Defence Forces Wellness Centre (DFWC) in Nairobi, and is dedicated to holistic health models that integrate natural healing, mental wellness, and addiction prevention strategies.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Mission & Values */}
      <Box sx={{ py: 8, px: { xs: 2, md: 10 }, bgcolor: '#' }}>
        <Typography variant="h4" sx={{ color: '#000000' }} gutterBottom fontWeight={700} textAlign="center">
          Our Mission & Core Values
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', color: '#000000' }} fontWeight={500}>
          <strong>Mission:</strong> To guide individuals on their journey to holistic health through education, empowerment, and natural therapy practices.
        </Typography>

        {/* Icon-Based Values */}
        <Box mt={4} sx={{ display: 'grid', gap: 2, maxWidth: 600, mx: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SpaIcon sx={{ color: '#4CB944' }} />
            <Typography fontWeight={500}>Integrity in care</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightbulbIcon sx={{ color: '#4CB944' }} />
            <Typography fontWeight={500}>Empowerment through knowledge</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FavoriteIcon sx={{ color: '#E53935' }} />
            <Typography fontWeight={500}>Compassionate connection with clients</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ScienceIcon sx={{ color: '#4CB944' }} />
            <Typography fontWeight={500}>Commitment to research and innovation</Typography>
          </Box>
        </Box>
      </Box>
      {/* Testimonials Section */}
<Box sx={{ py: 10, px: { xs: 2, md: 10 }, bgcolor: '#F0FDF4', textAlign: 'center' }}>
  <Typography variant="h4" fontWeight={700} color="#136F63" gutterBottom>
    What Our Clients Say
  </Typography>
  <Typography
    variant="body1"
    fontWeight={500}
    sx={{ maxWidth: 800, mx: 'auto', mb: 6, color: '#000000' }}
  >
    Real stories from people whose lives have been transformed through our
    holistic wellness approach
  </Typography>

  <Grid container spacing={4} justifyContent="center">
    {[
      {
        name: 'Sarah M.',
        location: 'Nairobi, Kenya',
        quote:
          "Joseph's holistic approach\ntransformed my health completely.\nThe natural remedies and nutritional guidance\nhelped me overcome chronic fatigue.",
      },
      {
        name: 'David K.',
        location: 'Mombasa, Kenya',
        quote:
          "The mental wellness support I received\nwas life-changing.\nI learned to manage stress naturally\nand found inner peace through spiritual guidance.",
      },
      {
        name: 'Grace W.',
        location: 'Kisumu, Kenya',
        quote:
          "After years of struggling with addiction,\nthe prevention strategies and emotional balance techniques\ngave me hope and a new lease on life.",
      },
    ].map((testimonial, index) => (
      <Grid item xs={12} md={4} key={index}>
        <Card
          sx={{
            p: 3,
            borderRadius: 4,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
            bgcolor: '#FFFFFF',
            height: 320,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: 'Segoe UI, sans-serif',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          {/* Star Rating */}
          <Box sx={{ color: '#FFB400', mb: 2 }}>{'★★★★★'}</Box>

          {/* Testimonial Text with Italics and Line Breaks */}
          <Typography
            variant="body2"
            sx={{
              flexGrow: 1,
              color: '#333333',
              fontSize: '1rem',
              fontStyle: 'italic',
              whiteSpace: 'pre-line',
              textAlign: 'left',
              lineHeight: 1.6,
            }}
          >
            "{testimonial.quote}"
          </Typography>

          {/* Author Info */}
          <Box mt={3} textAlign="left">
            <Typography variant="subtitle2" fontWeight={700} color="#000000">
              {testimonial.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {testimonial.location}
            </Typography>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>


      {/* Impact Statistics */}
      <Box sx={{ py: 8, px: { xs: 2, md: 10 }, textAlign: 'center', bgcolor: '#', color: '#000F63' }}>
        <Typography variant="h4" sx={{ color: '#70EE9C' }} gutterBottom fontWeight={700}>
          Our Impact
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" sx={{ color: '#04F06A' }}>10K+</Typography>
            <Typography fontWeight={500}>Clients Empowered</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" sx={{ color: '#04F06A' }}>15+</Typography>
            <Typography fontWeight={500}>Years of Healing</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" sx={{ color: '#04F06A' }}>98%</Typography>
            <Typography fontWeight={500}>Client Satisfaction</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
