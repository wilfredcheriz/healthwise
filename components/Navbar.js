import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Slide from '@mui/material/Slide';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Medicines', href: '/products' },
  { label: 'Events', href: '/events' },

  { label: 'Contact', href: '/contact' },
  { label: 'About', href: '/about' },
];

const CustomMenuIcon = () => (
  <Box
    sx={{
      width: 40,
      height: 40,
      borderRadius: '12px',
      backgroundColor: '#b3ff00',
      border: '2px solid #0011ff',
      boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          sx={{
            width: 16,
            height: 3,
            backgroundColor: '#0011ff',
            borderRadius: 1,
          }}
        />
      ))}
    </Box>
  </Box>
);

export default function Navbar({ toggleTheme, currentMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          backgroundColor: currentMode === 'dark' ? '#121212' : '#036016',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          {/* Logo + Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" passHref legacyBehavior>
              <Box
                component={motion.a}
                initial={{ x: -30, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Image
                  src="/images/LOGO.jpeg"
                  alt="Healthwise Logo"
                  width={40}
                  height={40}
                  style={{ borderRadius: '50%' }}
                />
              </Box>
            </Link>
            <Typography
              variant="h6"
              sx={{
                ml: 1,
                fontWeight: 'bold',
                color: 'white',
                whiteSpace: 'nowrap',
              }}
            >
            HEALTHWISE 
            </Typography>
          </Box>

          {/* Nav Items (Desktop) & Hamburger (Mobile) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Mobile Hamburger */}
            <Box sx={{ display: { sm: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ padding: 0 }}
              >
                <CustomMenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              {navItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <Button
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: isActive ? '#ffeb3b' : '#fff',
                      mx: 1,
                      fontWeight: isActive ? 700 : 500,
                      position: 'relative',
                      transition: 'color 0.3s ease-in-out',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: isActive ? '100%' : '0%',
                        height: '2px',
                        bottom: -2,
                        left: 0,
                        backgroundColor: isActive ? '#ffeb3b' : 'white',
                        transition: 'width 0.4s ease, background-color 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                      '&:hover': {
                        color: '#f5f5f5',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
              <Tooltip title="Toggle Theme">
                <IconButton sx={{ ml: 2, color: 'white' }} onClick={toggleTheme}>
                  {currentMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Fullscreen Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        transitionDuration={600}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            height: '100%',
            backgroundColor: currentMode === 'dark' ? '#121212' : '#036016',
            boxShadow: 'none',
          },
        }}
      >
        <Slide direction="down" in={mobileOpen} mountOnEnter unmountOnExit timeout={500}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 12,
              duration: 0.5,
            }}
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Drawer Header */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                Healthwise
              </Typography>
              <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Drawer Menu Items */}
            <List sx={{ flexGrow: 1, justifyContent: 'center' }}>
              {navItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <ListItem
                    button
                    key={item.label}
                    onClick={() => {
                      router.push(item.href);
                      handleDrawerToggle(); // Auto-close
                    }}
                    sx={{
                      color: 'white',
                      px: 3,
                      my: 1,
                      borderRadius: 1,
                      backgroundColor: isActive
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: '1.3rem',
                          fontWeight: 600,
                          textAlign: 'center',
                          width: '100%',
                        },
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>

            {/* Theme Toggle */}
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Tooltip title="Toggle Theme">
                <IconButton onClick={toggleTheme} sx={{ color: 'white' }}>
                  {currentMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </Box>
          </motion.div>
        </Slide>
      </Drawer>
    </Box>
  );
}
