import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  CardMedia,
  Grid,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const categoryColors = {
  Technology: '#64F58D',
  Marketing: '#0CCE6B',
  Business: '#141301',
};

const EventCard = ({ title, description, image, category, date, time, location }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <Card
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        backgroundColor: '#F3F3F4',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      {/* Image Section with Overlay */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: { xs: '100%', md: 300 },
            height: { xs: 200, md: '100%' },
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.4))',
          }}
        />
      </Box>

      {/* Content Section */}
      <Box sx={{ flex: 1 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {/* Category Chip */}
          <Chip
            label={category}
            sx={{
              backgroundColor: categoryColors[category] || '#64F58D',
              color: '#141301',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              width: 'fit-content',
              mb: 1,
            }}
          />

          {/* Title */}
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#141301' }}>
            {title}
          </Typography>

          {/* Description with "Read More" */}
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                WebkitLineClamp: showFull ? 'none' : 3,
                transition: 'all 0.3s ease',
                color: '#141301',
              }}
            >
              {description}
            </Typography>
            {description.length > 100 && (
              <Box
                component="button"
                onClick={() => setShowFull(!showFull)}
                sx={{
                  mt: 0.5,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#0CCE6B',
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {showFull ? 'Show Less' : 'Read More'}
              </Box>
            )}
          </Box>

          {/* Event Info Grid */}
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#141301' }}>
                <LocationOnIcon fontSize="small" />
                {location}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#141301' }}>
                <CalendarTodayIcon fontSize="small" />
                {date}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#141301' }}>
                <AccessTimeIcon fontSize="small" />
                {time}
              </Typography>
            </Grid>
          </Grid>

          {/* CTA Button */}
          <Box sx={{ mt: 2 }}>
            <Box
              component="button"
              sx={{
                backgroundColor: '#0CCE6B',
                color: '#141301',
                px: 3,
                py: 1,
                borderRadius: 2,
                fontSize: '0.85rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#64F58D',
                  boxShadow: '0 4px 12px rgba(0, 204, 107, 0.3)',
                },
              }}
            >
              View Details
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default EventCard;
