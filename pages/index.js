  import React, { useState, useEffect } from 'react';

  import Booking from '../components/booking'; // If using relative path instead of alias
  // import Booking from './components/Booking'; // If Booking component is in the same directory
  import {
    Box,
    Typography,
    Button,
    Grid,
    Paper,
    Card,
    Avatar,
    Stack,
    Chip,
  } from '@mui/material';
  import { keyframes, Global, css } from '@emotion/react';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import PsychologyIcon from '@mui/icons-material/Psychology';
  import HealingIcon from '@mui/icons-material/Healing';
  import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
  import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
  import WhatsAppIcon from '@mui/icons-material/WhatsApp';
  import { Tooltip } from '@mui/material';
  import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import { motion } from 'framer-motion';
  


  const heroImages = [
    '/images/hero.jpeg',
    '/images/hero1.jpeg',
    '/images/hero2.jpeg',
    '/images/hero3.jpeg',
    '/images/hero4.jpeg',
  ];

  const slideIn = keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  `;

  const slideOut = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  `;

  export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const [prevImage, setPrevImage] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [shakingBoxes, setShakingBoxes] = useState({});

    useEffect(() => {
      const interval = setInterval(() => {
        setAnimating(true);
        setPrevImage(currentImage);
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [currentImage]);

    useEffect(() => {
      if (animating) {
        const timer = setTimeout(() => setAnimating(false), 1000);
        return () => clearTimeout(timer);
      }
    }, [animating]);

    return (
      <Box sx={{ bgcolor: 'background.default', fontFamily: 'Inter, sans-serif', fontSize: '1.05rem' }}>
        <Global
          styles={css`
            @keyframes slideRight {
              0% { transform: translateX(0); }
              100% { transform: translateX(30px); }
            }
            @keyframes shake {
              0% { transform: translateX(0); }
              20% { transform: translateX(-10px); }
              40% { transform: translateX(10px); }
              60% { transform: translateX(-6px); }
              80% { transform: translateX(6px); }
              100% { transform: translateX(0); }
            }
          `}
        />
        <Global
  styles={css`
    @keyframes zoomIn {
      0% {
        background-size: 100%;
      }
      100% {
        background-size: 110%;
      }
    }
  `}
/>
 {/* Global keyframes for zoom animation */}
 <Global
        styles={css`
          @keyframes zoomIn {
            0% {
              background-size: 100%;
            }
            100% {
              background-size: 110%;
            }
          }

          @media (max-width: 768px) {
            .about-section {
              background-attachment: scroll !important;
            }
          }
        `}
      />


     {/* Hero Section */}
<Box sx={{ height: { xs: '100vh', md: '110vh' }, overflow: 'hidden', position: 'relative' }}>
  {prevImage !== null && animating && (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${heroImages[prevImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        animation: `${slideOut} 1s ease-in-out`,
        zIndex: 0,
      }}
    />
  )}
  <Box
    sx={{
      height: '100%',
      width: '100%',
      backgroundImage: `url(${heroImages[currentImage]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      animation: animating ? `${slideIn} 1s ease-in-out` : 'none',
      zIndex: 1,
    }}
  />
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      bgcolor: 'rgba(0,0,0,0.6)',
      zIndex: 2,
    }}
  />

  <Box
    sx={{
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
      px: { xs: 2, sm: 4 },
      py: { xs: 10, md: 20 },
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}
  >
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontWeight: 1000,
        fontFamily: 'Playfair Display, serif',
        fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
        mb: 2,
      }}
    >
      Your Path to Holistic Health
    </Typography>

    <Typography
      variant="h6"
      sx={{
        fontWeight: 600,
        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
        mb: 3,
        maxWidth: { xs: '90%', md: '70%' },
      }}
    >
      Compassionate care in wellness, internal medicine & emotional health
    </Typography>

    <Button
      variant="contained"
      color="primary"
      size="medium"
      href="#services"
      sx={{
        px: { xs: 3, sm: 4, md: 5 },
        py: { xs: 1.5, sm: 2 },
        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
        borderRadius: '8px',
        fontWeight: 700,
        mt: 2,
      }}
    >
      Explore Our Services
    </Button>
  </Box>
</Box>


  {/* About Section */}
<Box
  className="about-section"
  sx={{
    minHeight: { xs: 'auto', md: '80vh' },
    px: { xs: 2, sm: 4, md: 10 },
    py: { xs: 8, sm: 10, md: 12 },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundImage: 'url(/images/youth.png)',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: { xs: 'scroll', md: 'fixed' },
    backgroundColor: '#f0fdf4',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: 2,
    overflow: 'hidden',
    zIndex: 0,
    animation: 'zoomIn 5s ease-in-out infinite alternate',
    position: 'relative',
  }}
>
  {/* Overlay */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 50, 30, 0.5)',
      zIndex: 1,
    }}
  />

  {/* Content */}
  <Box sx={{ position: 'relative', zIndex: 2, color: '#fff', maxWidth: '900px' }}>
    <Typography
      variant="h4"
      component="h4"
      gutterBottom
      sx={{
        fontWeight: 700,
        fontFamily: 'Playfair Display, serif',
        color: '#7CFC00',
        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // ⬅️ Reduced sizes
        lineHeight: { xs: 1.3, md: 1.25 },
        mb: { xs: 2, md: 3 },
      }}
    >
      About Healthwise & Wellness
    </Typography>

    <Typography
  variant="h6"
  component="p"
  sx={{
    fontWeight: 'bold', // or 700
    fontFamily: 'Inter, sans-serif',
    color: '#f0f0f0',
    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
    lineHeight: { xs: 1.6, md: 1.7 },
    letterSpacing: '0.4px',
    textAlign: 'justify',
    px: { xs: 0, sm: 2 },
  }}
>
Our vision is to educate all people in natural health and show them that through proper diet, natural medication, and other modalities, they can achieve healing of the body, mind, and soul.
<br /><br />
Healthwise and Wellness was founded in 2010 and has proudly grown from strength to strength over the years. With continued research and development, we now have a client base of over 10,000 people, which continues to grow daily through word of mouth.
<br /><br />
We are also proud to offer youth-friendly psychotherapy and counseling services, creating a safe and supportive space for young people to explore mental wellness and emotional balance.
</Typography>

  </Box>
</Box>
{/* Our Services Section */}
<Box
  id="services"
  sx={{
    bgcolor: '#f9f9f9',
    py: { xs: 6, md: 10 },
    px: { xs: 1, sm: 3, md: 6 },
  }}
>
  <Typography
    variant="h4"
    align="center"
    color="primary"
    fontWeight={700}
    gutterBottom
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1,
      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.75rem' },
    }}
  >
    <LocalHospitalIcon
      sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: 'primary.main' }}
    />
    Our Services
  </Typography>

  <Typography
    variant="body1"
    align="center"
    color="textSecondary"
    fontWeight={500}
    sx={{
      mb: { xs: 5, md: 8 },
      px: { xs: 2, sm: 6, md: 12 },
      fontSize: { xs: '1rem', sm: '1.1rem' },
    }}
  >
    Visit our offices for personalized care and specialized wellness services tailored to your individual needs.
  </Typography>

  <Grid
    container
    spacing={4}
    justifyContent="center"
    alignItems="stretch"
  >
    {[
      {
        title: "Women's Health",
        icon: <FavoriteIcon />,
        color: '#ffffff',
        image: '/images/women-health.jpg',
        points: [
          'Fibroids and cysts', 'Period problems', 'Fertility support',
          'Perimenopause', 'Hormonal imbalance', 'Blood circulation',
          'PCOS', 'Mental Health Support', 'Reproductive Health',
        ],
      },
      {
        title: 'Psycho-Emotional',
        icon: <PsychologyIcon />,
        color: '#ffffff',
        image: '/images/mental-health.jpg',
        points: [
          'Addiction', 'Insomnia', 'Anxiety / Depression', 'Bipolar Disorder',
          'Schizophrenia', 'Mood Disorder', 'Obsessive Compulsive Disorder',
          'Brain fog', 'Anger issues', 'Overthinking', 'PTSD / CPTSD', 'ADD',
        ],
      },
      {
        title: 'Ayurvedic Medicine',
        icon: <HealingIcon />,
        color: '#ffffff',
        image: '/images/internal-medicine.jpg',
        points: [
          'Arthritis', 'Digestive issues', 'Respiratory problems', 'Metabolism',
          'Hypertension', 'Immunity boost', 'Diabetes',
        ],
      },
      {
        title: 'Complex Cases',
        icon: <LocalHospitalIcon />,
        color: '#ffffff',
        image: '/images/complex-cases.jpg',
        points: [
          'Neuropathy', 'Concussions', "Bell's Palsy", 'Cerebral Palsy',
          'Pre/Post surgery', 'Neurodevelopmental Disorder', 'Stroke rehab',
        ],
      },
    ].map((service, index) => (
      <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            bgcolor: '#0B5D1E',
            color: 'white',
            borderRadius: 4,
            boxShadow: 4,
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 6,
            },
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={service.image}
            alt={service.title}
            sx={{
              width: '100%',
              height: { xs: 180, sm: 220, md: 240 },
              objectFit: 'cover',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}
          />

          {/* Content */}
          <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Avatar
              sx={{
                bgcolor: 'white',
                color: '#139A43',
                width: 56,
                height: 56,
                mb: 2,
                boxShadow: 2,
              }}
            >
              {service.icon}
            </Avatar>

            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mb: 1, fontSize: { xs: '1.25rem', md: '1.4rem' } }}
            >
              {service.title}
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: 2,
                color: 'white',
                fontSize: { xs: '1rem', md: '1.05rem' },
                fontWeight: 400,
                mb: 0,
              }}
            >
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>
  {/* Top Decorative SVG */}
  <Box sx={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: 75, width: '100%' }}>
          <path d="M0,0V46.29c47.52,22,103.19,29.05,158.74,17.49C289.41,41.83,422,10.9,536,24.49s210.79,69.37,321.71,80.45C947.67,115.2,1076.26,90,1200,49.58V0Z" opacity=".25" fill="#32936F" />
          <path d="M0,0V15.81c47.52,22,103.19,29.05,158.74,17.49C289.41,11.35,422-19.58,536-5.99s210.79,69.37,321.71,80.45C947.67,85.72,1076.26,60.52,1200,20.1V0Z" opacity=".5" fill="#134611" />
          <path d="M0,0V5.63c47.52,22,103.19,29.05,158.74,17.49C289.41,1.17,422-29.76,536-16.17s210.79,69.37,321.71,80.45C947.67,70.54,1076.26,45.34,1200,4.92V0Z" fill="#FFFFFF" />
        </svg>
      </Box>
{/* Psychological Counseling Section */}
<Box
  mt={8}
  sx={{
    width: '100%',
    backgroundColor: '#FFFFFF',
    py: { xs: 6, md: 8 },
  }}
>
  <Paper
    elevation={8}
    sx={{
      width: '100%',
      borderRadius: 4,
      p: { xs: 3, md: 8 },
      textAlign: 'center',
      bgcolor: '#FFFFFF',
      mx: 'auto',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      border: '1px solid #E0E0E0',
    }}
  >
    <HealthAndSafetyIcon
      sx={{
        fontSize: 60,
        color: '#32936F',
        mb: 2,
      }}
    />

    <Typography
      variant="h4"
      sx={{
        color: '#134611',
        fontWeight: 700,
        gutterBottom: true,
        fontSize: { xs: '1.8rem', md: '2.4rem' },
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
      }}
    >
      Psychological Counseling
    </Typography>

    <Typography
      sx={{
        color: '#020402',
        fontWeight: 500,
        fontSize: { xs: '1rem', md: '1.125rem' },
        lineHeight: 1.8,
        mb: 3,
        maxWidth: '900px',
        mx: 'auto',
      }}
    >
      We provide comprehensive and personalized mental health and wellness consultancy.
    </Typography>

    {/* Service Chips */}
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      flexWrap="wrap"
      sx={{ mt: 2, mb: 4 }}
    >
      {[
        'Individual Therapy',
        'Couples Therapy',
        'Family Therapy',
        'Workplace Wellness',
        'Teen Wellness',
      ].map((label, index) => (
        <Chip
          key={index}
          label={label}
          sx={{
            bgcolor: '#32936F',
            color: '#FFFFFF',
            fontWeight: 600,
            px: 1.5,
            py: 1,
            m: 0.5,
            fontSize: '0.875rem',
            border: '1px solid #134611',
          }}
        />
      ))}
    </Stack>

    <Typography
      variant="h5"
      sx={{
        color: '#134611',
        fontWeight: 700,
        mt: 5,
        mb: 3,
        fontSize: { xs: '1.5rem', md: '2rem' },
        textShadow: '1px 1px 1px #eee',
      }}
    >
      Women Addiction Support & Preventive Training
    </Typography>

    <Typography
      sx={{
        color: '#020402',
        fontWeight: 500,
        fontSize: { xs: '1rem', md: '1.125rem' },
        lineHeight: 1.8,
        mb: 3,
        maxWidth: '900px',
        mx: 'auto',
      }}
    >
      We offer dedicated support for women affected by addiction and substance use. Our team
      conducts early interventions through home and community visits, offering compassionate
      alternatives before legal escalation. Structured training programs empower women with
      life skills to prevent dependency, with ongoing follow-ups ensuring lasting recovery.
    </Typography>

    {/* Testimonial Card */}
    <Card
      sx={{
        mt: 4,
        mx: 'auto',
        maxWidth: 600,
        p: 3,
        bgcolor: '#F9F9F9',
        borderLeft: '5px solid #32936F',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        textAlign: 'left',
      }}
    >
      <Typography variant="body1" fontStyle="italic" color="#134611">
        “The women’s support program helped me rebuild my life and reconnect with my family.
        The community outreach and follow-ups gave me hope again.”
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={700}
        sx={{ color: '#32936F', mt: 2 }}
      >
        — Jane Njoroge
      </Typography>
    </Card>

    {/* Research Note */}
    <Typography
      variant="body1"
      sx={{
        color: '#020402',
        fontStyle: 'italic',
        fontWeight: 500,
        fontSize: { xs: '1rem', md: '1.125rem' },
        mt: 4,
        maxWidth: '900px',
        mx: 'auto',
      }}
    >
      Backed by Research: Our approach integrates evidence-based practices in trauma-informed
      care and gender-specific recovery models. Studies show early, holistic, and culturally
      sensitive interventions significantly improve outcomes for women battling addiction.
    </Typography>

    {/* Call to Action */}
    <Typography
      variant="h6"
      sx={{ mt: 5, mb: 2, color: '#134611' }}
    >
      Ready to begin your journey to mental wellness?
    </Typography>

    <Button
      variant="contained"
      size="large"
      sx={{
        mt: 1,
        px: 5,
        py: 1.5,
        fontWeight: 700,
        fontSize: '1rem',
        borderRadius: 3,
        backgroundColor: '#32936F',
        '&:hover': {
          backgroundColor: '#134611',
        },
      }}
      href="#appointment"
    >
      Book a Support Session
    </Button>
  </Paper>
</Box>
{/* FAQ Section with Fade-In */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <Box mt={8} maxWidth="900px" mx="auto">
    <Typography
      variant="h5"
      sx={{
        mb: 3,
        color: '#134611',
        fontWeight: 700,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1,
      }}
    >
      Frequently Asked Questions
    </Typography>

    {[
      {
        question: 'Who can benefit from psychological counseling?',
        answer:
          'Anyone facing emotional, behavioral, or mental health challenges-such as stress, trauma, relationship issues, or addiction-can benefit from professional counseling.',
      },
      {
        question: 'Is counseling confidential?',
        answer:
          'Yes. All sessions are strictly confidential, and your privacy is fully protected by ethical and legal standards.',
      },
      {
        question: 'Do you offer virtual therapy sessions?',
        answer:
          'Absolutely. We offer secure virtual sessions for individuals, couples, and families who prefer or require remote support.',
      },
      {
        question: 'What should I expect during the first session?',
        answer:
          'The first session is a safe space to share your concerns and goals. Your therapist will listen, assess your needs, and suggest a personalized support plan.',
      },
    ].map((item, index) => (
      <Accordion
        key={index}
        sx={{
          mb: 2,
          border: '1px solid #E0E0E0',
          borderRadius: 2,
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
          bgcolor: '#F9F9F9',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#32936F' }} />}
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
          sx={{
            fontWeight: 700,
            color: '#134611',
          }}
        >
          {item.question}
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: '#FFFFFF', color: '#020402' }}>
          {item.answer}
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
</motion.div>
<Box
  sx={{
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 9999,
    '@media (max-width: 600px)': {
      bottom: 16,
      right: 16,
    },
  }}
>
  <Tooltip title="Chat with us on WhatsApp">
    <a
      href="https://wa.me/254796440777" // ✅ Use your number here
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Button
        variant="contained"
        sx={{
          bgcolor: '#25D366',
          color: '#ffffff',
          borderRadius: '50%',
          minWidth: 56,
          height: 56,
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          '&:hover': {
            bgcolor: '#128C7E',
          },
        }}
      >
        <WhatsAppIcon fontSize="medium" />
      </Button>
    </a>
  </Tooltip>
</Box>
<Booking/>

        {/* Keyframe Animation */}
        <style jsx global>{`
          @keyframes slideRight {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(30px);
            }
          }
        `}</style>
      </Box>
    );
  }
