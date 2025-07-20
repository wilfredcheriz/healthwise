'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Fade } from '@mui/material';

/**
 * @param {{ onComplete: () => void }} props
 */
const SpineLoader = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const textSequence = ['Welcome To', 'Health and Wellness'];

  useEffect(() => {
    const textTimer = setTimeout(() => {
      if (currentText < textSequence.length - 1) {
        setCurrentText(currentText + 1);
      }
    }, 1500);

    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [currentText, onComplete]);

  return (
    <Fade in={!isComplete} timeout={800}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'background.default',
          zIndex: 1300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          transition: 'opacity 0.8s',
        }}
      >
        {/* Spine Structure */}
        <Box sx={{ position: 'relative', mb: 6 }}>
          <Box
            sx={{
              width: '4px',
              height: 128,
              mx: 'auto',
              bgcolor: 'primary.main',
              borderRadius: 2,
              animation: 'glow 2s infinite alternate',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 16,
                  height: 8,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                  boxShadow: 3,
                  animation: `pulse 1s ease-in-out ${index * 0.2}s infinite`,
                  transform: `translateX(${Math.sin(index * 0.5) * 2}px)`,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Animated Text */}
        <Box sx={{ minHeight: 120, textAlign: 'center' }}>
          {textSequence.map((text, index) => (
            <Typography
              key={index}
              variant="h4"
              sx={{
                fontWeight: 'bold',
                opacity: index <= currentText ? 1 : 0,
                transform: index <= currentText ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s, transform 1s',
                background: 'linear-gradient(90deg, #43cea2, #185a9d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>

        {/* Loading Dots */}
        <Box sx={{ display: 'flex', gap: 1, mt: 4 }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                animation: `pulse 1.4s ${index * 0.4 + 2}s infinite`,
              }}
            />
          ))}
        </Box>
      </Box>
    </Fade>
  );
};

export default SpineLoader;
