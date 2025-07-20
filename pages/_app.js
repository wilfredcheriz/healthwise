import React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { GlobalStyles } from '@mui/system';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpineLoader from '@/components/SpineLoader';

// Theme generator
const getTheme = (mode) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary: { main: '#4CAF50' },
        secondary: { main: '#F44336' },
        background: {
          default: mode === 'dark' ? '#121212' : '#ffffff',
          paper: mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
        },
        text: {
          primary: mode === 'dark' ? '#ffffff' : '#000000',
        },
      },
      typography: {
        fontSize: 18,
        fontFamily: 'Inter, sans-serif',
        allVariants: {
          fontFamily: 'Inter, sans-serif',
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              fontFamily: 'Inter, sans-serif',
            },
          },
        },
      },
    })
  );

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [mode, setMode] = React.useState('light');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // Set theme mode
    const storedMode = localStorage.getItem('themeMode');
    if (storedMode === 'dark' || storedMode === 'light') {
      setMode(storedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }

    // Show loader only once on first visit to homepage
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (router.pathname === '/' && !hasLoaded) {
      setLoading(true);
      sessionStorage.setItem('hasLoaded', 'true');
    }
  }, [router.pathname]);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <>
      <Head>
        <title>Healthwise</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
            html: { scrollBehavior: 'smooth', fontSize: '18px' },
            body: {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.5,
              minHeight: '100vh',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            },
          }}
        />

        {loading ? (
          <SpineLoader onComplete={handleLoaderComplete} />
        ) : (
          <>
            <Navbar toggleTheme={toggleColorMode} currentMode={mode} />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </ThemeProvider>
    </>
  );
}
