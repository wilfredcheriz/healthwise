import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import DiscordIcon from '@mui/icons-material/Forum'; // Replace with real Discord icon if needed
import TwitterIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Send';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const iconData = [
    { label: 'Discord', icon: <DiscordIcon fontSize="large" />, href: '#' },
    { label: 'Twitter', icon: <TwitterIcon fontSize="large" />, href: '#' },
    { label: 'Telegram', icon: <TelegramIcon fontSize="large" />, href: '#' },
    { label: 'YouTube', icon: <YouTubeIcon fontSize="large" />, href: '#' },
    { label: 'Reddit', icon: <RedditIcon fontSize="large" />, href: '#' },
    { label: 'GitHub', icon: <GitHubIcon fontSize="large" />, href: '#' },
    { label: 'LinkedIn', icon: <LinkedInIcon fontSize="large" />, href: 'https://www.linkedin.com/in/healthwise-and-wellness-4b495a374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  ];

  return (
    <Box sx={{ bgcolor: '#036016', color: '#fff', pt: 4, pb: 6 }}>
      <Grid container spacing={2} justifyContent="center">
        {iconData.map((item, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: 2,
              border: '1px solid #057C22',
              '&:hover': {
                backgroundColor: '#058F2A',
              },
            }}
          >
            <Box sx={{ color: '#fff' }}>{item.icon}</Box>
            <Typography variant="subtitle1" mt={1}>
              <Link href={item.href} color="inherit" underline="none">
                {item.label}
              </Link>
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Footer Text */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="white">
          Copyright © healthwiseandwellness2025 &nbsp;|&nbsp;
          <Link href="#" color="inherit" underline="hover">
            Healthwise Privacy Policy
          </Link>
          &nbsp;|&nbsp;
          <Link href="#" color="inherit" underline="hover">
            Terms
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
