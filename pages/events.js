import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';
import EventCard from '@/components/EventCard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0CCE6B',
    },
    secondary: {
      main: '#64F58D',
    },
    background: {
      default: '#F3F3F4',
    },
    text: {
      primary: '#141301',
    },
  },
  typography: {
    h2: { fontWeight: 'bold', color: '#141301' },
    h4: { fontWeight: 'bold', color: '#141301' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `,
    },
  },
});

const EventsSection = () => {
  const allEvents = [
    {
      title: "Education Program",
      description:
        "We offer community-based prevention programs. We provide counseling for alcohol and drug substance use disorders (SUD), advocate for greater access to addiction and substance use treatment, and treat mental disorders such as depression, trauma (Post-Traumatic Stress Disorder), and anxiety disorders using a trauma-informed approach.",
      image: "/images/caregiving1.jpeg",
      category: "Education",
    },
    {
      title: "Yoga & Physical Wellness Sessions",
      description:
        "This immersive wellness experience is crafted for individuals seeking holistic health through movement. Led by certified instructors, the program includes guided yoga, aerobics, and functional fitness sessions to enhance physical health and emotional clarity.",
      image: "/images/yoga.jpeg",
      category: "Fitness",
    },
    {
      title: "Caregiving Skills Training",
      description:
        "Essential training for family and professional caregivers focusing on empathy, emergency first aid, and elderly support.",
      image: "/images/caregiving.jpeg",
      category: "Caregiving",
    },
    {
      title: "Community Building Workshop",
      description:
        "This event fosters social cohesion and community leadership through dialogue, shared experiences, and collaborative problem-solving.",
      image: "/images/build.jpeg",
      category: "Unity",
    },
    {
      title: "Youth Empowerment Program",
      description:
        "A transformative initiative designed to equip young individuals with essential life and leadership skills. This program focuses on building confidence, enhancing public speaking abilities, and fostering goal-setting techniques. Through mentorship, workshops, and interactive sessions, youth are empowered to become proactive leaders and positive change-makers within their communities and beyond.",
      image: "/images/community.jpeg",
      category: "Empowerment",
    },
    {
      title: "Mental Health & Addiction Recovery",
      description:
        "A supportive, trauma-informed program that integrates professional therapy, addiction education, and peer-led recovery narratives. It focuses on healing the whole person—emotionally, mentally, and spiritually—through evidence-based practices, compassionate care, and structured support systems. Participants gain the tools and resilience needed for long-term recovery and improved mental well-being.",
      image: "/images/youth.png",
      category: "MentalHealth",
    },
    {
      title: "Women Addiction Support & Preventive Training",
      description:
        "A safe and empowering space tailored for women impacted by addiction. This program offers gender-sensitive trauma care, comprehensive relapse prevention strategies, and the development of peer-led support groups. It aims to foster healing, resilience, and long-term recovery through education, counseling, and community-based approaches focused on women's unique experiences.",
      image: "/images/woman-addiction.jpeg",
      category: "WomenEmpowerment",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#F3F3F4', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #0CCE6B, #64F58D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Program Highlights
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6, mb: 4 }}
            >
              A look at our most impactful community wellness, mental health, and empowerment events.
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: 'linear-gradient(45deg, #0CCE6B, #64F58D)',
                mx: 'auto',
                borderRadius: 2,
              }}
            />
          </Box>

          <Grid container spacing={4} alignItems="stretch">
            {allEvents.map((event, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: 'flex',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <EventCard {...event} />
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Link href="/" passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  display: 'inline-block',
                  background: 'linear-gradient(45deg, #0CCE6B, #64F58D)',
                  color: '#141301',
                  border: 'none',
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(12,206,107,0.3)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(12,206,107,0.4)',
                  },
                }}
                aria-label="View all events"
              >
                View All Events
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default EventsSection;
