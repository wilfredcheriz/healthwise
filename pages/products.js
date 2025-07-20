// pages/medicines.js

import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Button,
  Chip,
  Tooltip,
  Badge as MuiBadge,
} from '@mui/material';
import {
  Search,
  FilterList,
  ShoppingCart,
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material';

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const meds = [
        {
        id: 1,
        name: 'PUNARNAVA tablets 60',
        category: "Women's Health",
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Traditionally used for urinary tract disorders.<br />
  Also for edema, joint pain, and supportive therapy in female reproductive health.<br />
  <strong>What it helps:</strong> Reduces water retention.<br />
  Supports kidney function.<br />
  Alleviates menstrual discomfort.<br />
  Helps manage muscle and joint stiffness.<br />
  <strong>Typical dosage:</strong> One or two tablets twice daily after meals.<br />
  Caution if pregnant or on diuretics.
</div>
`,
        price: 1200,
        image: 'https://kalonji.co.ke/cdn/shop/products/Punarnava.jpg2.jpg?v=1675070997',
        tags: ['Doctor Recommended', 'Premium'],
        rating: 4.9,
        inStock: true,
      },
         {
        id: 2,
        name: 'Organic Maca Root Powder',
        category: 'Psycho-Emotional',
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Often suggested for mild hormone imbalances, low libido, and fatigue.<br />
  <strong>What it helps:</strong> Boosts energy and stamina.<br />
  Supports hormonal balance.<br />
  Enhances sexual function.<br />
  May improve mood and memory.<br />
  <strong>Dosage/Caution:</strong> 1–3 g/day.<br />
  Begin with small doses.<br />
  Avoid if pregnant or with hormone-sensitive conditions.
</div>
`,
        price: 1300,
        image: 'https://m.media-amazon.com/images/I/71cozwsqk+L._UF1000,1000_QL80_.jpg',
        tags: ['Natural', 'Calming'],
        rating: 4.5,
        inStock: true,
      },
       {
        id: 3,
        name: 'Kanchnar Guggul Tablets 60s',
        category: 'Ayurvedic Medicine',
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Commonly used for enlarged thyroid (goitre), metabolism issues, and chronic inflammation.<br />
  <strong>What it helps:</strong> Regulates thyroid function.<br />
  Improves lipid metabolism.<br />
  Supports weight management.<br />
  Promotes detoxification.<br />
  <strong>Dosage/Caution:</strong> 1–2 tablets twice daily with warm water.<br />
  Not recommended during pregnancy or for those on thyroid medication.
</div>
`,
        price: 1600,
        image: 'https://kalonji.co.ke/cdn/shop/files/KanchnarGuggulTablets.jpg?v=1710613983',
        tags: ['Vitamin C', 'Immunity'],
        rating: 4.4,
        inStock: true,
      },
         {
        id: 4,
        name: 'Black Strap Molasses',
        category: 'Psycho-Emotional',
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Used as an adjunct in iron-deficiency anemia and pediatric constipation.<br />
  <strong>What it helps:</strong> Rich in iron, calcium, magnesium, potassium, B6 and antioxidants.<br />
  Supports hemoglobin, digestion, bone health.<br />
  Aids in stable blood sugar, stress relief, and anti-inflammatory support for joints.<br />
  <strong>Dosage:</strong> About 1 tbsp/day; use unsulfured type.
</div>
`,
        price: 1200,
        image: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/9876362/1.jpg?0728',
        tags: ['Natural'],
        rating: 4.3,
        inStock: true,
      },
       {
        id: 5,
        name: 'Himalayan Pink Salt',
        category: 'Ayurvedic Medicine',
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Used for mild respiratory conditions and maintaining electrolyte balance.<br />
  <strong>What it helps:</strong> Supplies sodium, calcium, potassium, and magnesium.<br />
  Supports hydration, muscle and nerve function, digestion, circulation, and bone health.<br />
  <strong>Caution:</strong> Sodium-rich; consume in moderation.
</div>
`,
        price: 1300,
        image: 'https://www.healthyu.co.ke/wp-content/uploads/2020/12/Himalayan-Pink-Salt-1kg.jpg',
        tags: ['Mineral-Rich'],
        rating: 4.2,
        inStock: true,
      },
       {
        id: 6,
        name: 'Daynee Enzyme Coffee Fast Slimming Tea',
        category: 'Ayurvedic Medicine',
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Marketed for weight management as an adjunct to diet/exercise.<br />
  <strong>What it helps:</strong> May provide a metabolic boost via caffeine.<br />
  Might slightly aid fat breakdown during digestion.<br />
  <strong>Dosage/Caution:</strong> One cup/day; high caffeine may cause jitters or insomnia.
</div>
`,
        price: 1600,
        image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/9771204/1.jpg?5168',
        tags: ['Slimming', 'Natural'],
        rating: 4.4,
        inStock: true,
      },
      
       {
        id: 7,
        name: 'Ayurveda Redefined Pile-30',
        category: 'Psycho-Emotional',
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Traditionally used to reduce inflammation, bleeding, and swelling in piles.<br />
  <strong>What it helps:</strong> Astringent and soothing effects ease perianal symptoms.<br />
  Supports vein health.<br />
  <strong>Dosage:</strong> 1–2 tablets twice daily post meals.
</div>
`,
        price: 1200,
        image: 'https://ayurvedastoreonline.com/cdn/shop/files/Pile-30_4564ea91-6177-45b6-bd12-14ef2c27d597_1024x1024.png?v=1719469709',
        tags: ['Natural', 'Calming'],
        rating: 4.5,
        inStock: true,
      },
        {
        id: 8,
        name: 'Shatavari Tablets',
        category: "Women's Health",
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Tonifier for hormonal balance and female reproductive support.<br />
  <strong>What it helps:</strong> Antioxidant and anti-inflammatory.<br />
  Supports immune health, digestion, and stress relief.<br />
  May ease PMS, menopause, infertility, and lactation issues.<br />
  <strong>Dosage:</strong> One 500 mg tablet twice daily.
</div>
`,
        price: 1600,
        image: 'https://kalonji.co.ke/cdn/shop/products/Shatavari.jpg2.jpg?v=1710734505g',
        tags: ['Natural', 'Ayurvedic'],
        rating: 4.5,
        inStock: true,
      },
      {
        id: 9,
        name: 'HARIDRA tablets 60',
        category: 'Psycho-Emotional',
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Used for mild to moderate inflammation such as joint pain, digestion, and skin conditions.<br />
  <strong>What it helps:</strong> Anti-inflammatory and antioxidant.<br />
  Promotes joint mobility, gut health, and mood balance.<br />
  <strong>Dosage:</strong> 500 mg curcumin twice daily with meals.
</div>
`,
        price: 1400,
        image: 'https://kalonji.co.ke/cdn/shop/files/EKJeevanCurcumaLongaHaridraTablets.webp?v=1710479168',
        tags: ['Natural', 'Calming'],
        rating: 4.5,
        inStock: true,
      },
      {
        id: 10,
        name: 'Olivita Extra Virgin Olive Oil 1L',
        category: 'Psycho-Emotional',
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong> Recommended in Mediterranean diet for cardiovascular and metabolic health.<br />
  <strong>What it helps:</strong> Rich in oleic acid and polyphenols.<br />
  Supports heart, brain, and skin.<br />
  Acts as anti-inflammatory and source of healthy fats.<br />
  <strong>Dosage:</strong> 1–2 tbsp/day in moderation.
</div>
`,
        price: 2000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9QPlw4OjBMs_Er52GT__edJdcTSyl5F5Tw&s',
        tags: ['Natural', 'Calming'],
        rating: 4.5,
        inStock: true,
      },
  
      {
        id: 11,
        name: 'Super B-Complex with C Tablets',
        category: 'Internal Medicine',
        description: `
<div style="line-height: 1.6;">
  <strong>Prescription use:</strong><br />
  Prevents or treats deficiencies caused by poor diet.<br />
  Also used for illness, alcoholism, or pregnancy.<br /><br />

  <strong>What it treats:</strong><br />
  Boosts red blood cell production.<br />
  Enhances energy metabolism.<br />
  Supports brain function.<br />
  Supports nerve and immune function.<br />
  May relieve mood swings.<br />
  Useful for premenstrual symptoms.<br />
  May reduce migraine frequency.<br /><br />

  <strong>Typical dosage:</strong><br />
  One tablet daily with food.
</div>
`,
        price: 2800,
        image: 'https://bfasset.costco-static.com/U447IH35/as/wz3n3xbbtc6hg5jhp58xws3s/100112668-847__1?auto=webp&format=jpg&width=600&height=600&fit=bounds&canvas=600,600',
        tags: ['Bestseller', 'Doctor Recommended'],
        rating: 4.8,
        inStock: true,
      },
      {
        id: 12,
        name: 'Dandelion Root',
        category: 'Psycho-Emotional',
     description: `
<div style="line-height: 1.6;">
  Herbal tonic from Taraxacum officinale root.<br />
  <strong>Use:</strong> Supports liver, kidney, digestion, skin health.<br />
  <strong>Helps:</strong> Aids blood sugar, reduces inflammation, detoxifies.<br />
  <strong>Dosage:</strong> 1–2 cups/day. Avoid with gallstones or diuretics.
</div>
`,
        price: 1000,
        image: 'https://img.kilimall.com/c/public/store/100001874/goods/image/101105525.jpg',
        tags: ['Natural', 'Calming'],
        rating: 4.5,
        inStock: true,
      },
         {
        id: 13,
        name: 'KIRKLAND VITAMIN D3 2000 IU 600 SOFTGELS',
        category: 'Psycho-Emotional',
        description: `
<div style="line-height: 1.6;">
  High-potency D3 supplement (cholecalciferol).<br />
  <strong>Use:</strong> Prevents vitamin D deficiency, supports bones.<br />
  <strong>Helps:</strong> Improves calcium absorption, immunity, mood.<br />
  <strong>Dosage:</strong> 1 softgel/day. Avoid >4000 IU unless advised.
</div>
`,

        price: 2500,
        image: 'https://www.wisechoicesupplements.ph/wp-content/uploads/2020/08/Kirkland-Signature-Extra-Strength-Vitamin-D3-50-mcg-600-Softgels-Dietary-Supplement.jpg',
        tags: ['Natural', 'Calming'],
        rating: 4.5,
        inStock: true,
      },
       {
        id: 14,
        name: 'Slim Green coffee with Ganoderma',
        category: 'Psycho-Emotional',
    description: `
<div style="line-height: 1.6;">
  Instant green coffee with Reishi mushroom.<br />
  <strong>Use:</strong> Weight & metabolism support.<br />
  <strong>Helps:</strong> Regulates glucose, boosts antioxidants.<br />
  <strong>Dosage:</strong> 400 mg up to 2× daily. Watch caffeine side effects.
</div>
`,

        price: 2000,
        image: 'https://m.media-amazon.com/images/I/71S1eFNJiJS._AC_SL1500_.jpg',
        tags: ['Natural', 'Calming'],
        rating: 4.5,
        inStock: true,
      },
       {
        id: 15,
        name: 'Moroccan Argan Oil Natural with Vitamin C & E',
        category: 'Psycho-Emotional',
      description: `
<div style="line-height: 1.6;">
  Cold-pressed oil enriched with vitamins C & E.<br />
  <strong>Use:</strong> Hydrates skin, scalp, nails.<br />
  <strong>Helps:</strong> Strengthens hair, protects from UV damage.<br />
  <strong>Dosage:</strong> 2 drops topically or 1 tbsp in diet.
</div>
`,

        price: 800,
        image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/4841841/1.jpg?3901',
        tags: ['Natural', 'Calming'],
        rating: 4.5,
        inStock: true,
      },
       {
        id: 16,
        name: 'Organic Castor Oil 100Ml',
        category: 'Psycho-Emotional',
    description: `
<div style="line-height: 1.6;">
  Cold-pressed Ricinus communis oil.<br />
  <strong>Use:</strong> Laxative, skin and joint care.<br />
  <strong>Helps:</strong> Relieves constipation, soothes skin, eases cramps.<br />
  <strong>Dosage:</strong> 1 tsp orally or apply topically. Avoid in pregnancy.
</div>
`,

        price: 2000,
        image: 'https://healthhub.ke/image/cache/catalog/hh_products/OILS/IDEAL%20CASTOR%20OIL%2050ML-1000x1000.jpg',
        tags: ['Natural', 'Calming'],
        rating: 4.5,
        inStock: true,
      },
    ];
    

    setMedicines(meds);
  }, []);

  const categories = ['All', "Women's Health", 'Psycho-Emotional', 'Ayurvedic Medicine'];

  const filteredMedicines = medicines.filter((med) => {
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
    const matchesSearch =
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleBookNow = (medicine) => {
    if (!medicine.inStock) {
      alert(`${medicine.name} is currently unavailable.`);
      return;
    }
    const favoriteMeds = medicines.filter((med) => favorites.includes(med.id));
    localStorage.setItem('favorite_medicines', JSON.stringify(favoriteMeds));
    window.location.href = `/book-medication?name=${encodeURIComponent(medicine.name)}&price=${medicine.price}`;
  };

  return (
    <Box sx={{ minHeight: '100vh', background: '#f9fafb', py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#1a1a1a' }}>
          Premium <span style={{ color: '#2a9d8f' }}>Medicines</span>
        </Typography>
        <Typography variant="h6" sx={{ color: '#333', opacity: 0.8 }}>
          Explore a curated selection of professional-grade medicines and natural supplements.
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center" mb={4} px={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            placeholder="Search medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            sx={{ backgroundColor: '#ffffff', borderRadius: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#2a9d8f' }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            sx={{ backgroundColor: '#ffffff', borderRadius: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FilterList sx={{ color: '#2a9d8f' }} />
                </InputAdornment>
              ),
            }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={4} px={4}>
        {filteredMedicines.length === 0 ? (
          <Grid item xs={12} textAlign="center">
            <Typography variant="h6" color="text.secondary">
              No medicines found.
            </Typography>
          </Grid>
        ) : (
          filteredMedicines.map((medicine) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={medicine.id}>
              <Card
                elevation={3}
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  height: 440,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 30px rgba(42, 157, 143, 0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 180,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f3f4f6',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={medicine.image}
                    alt={medicine.name}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </Box>

                {!medicine.inStock && (
                  <MuiBadge
                    badgeContent="Out of Stock"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      '& .MuiBadge-badge': {
                        backgroundColor: '#333333',
                        color: '#ffffff',
                      },
                    }}
                  />
                )}

                <CardContent sx={{ px: 2, py: 1, flexGrow: 1 }}>
                  <Box mb={1} display="flex" gap={1} flexWrap="wrap">
                    {medicine.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: tag === 'Bestseller' ? '#2a9d8f' : '#1a1a1a',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          borderRadius: '8px',
                        }}
                      />
                    ))}
                  </Box>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {medicine.name}
                  </Typography>
                  <Typography variant="caption" color="primary.main">
                    {medicine.category}
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: '#f9fafb',
                      borderRadius: 2,
                      padding: 1,
                      maxHeight: 120,
                      overflowY: 'auto',
                      fontSize: '0.8rem',
                      whiteSpace: 'pre-line',
                      color: '#333',
                      mt: 1,
                    }}
                    dangerouslySetInnerHTML={{ __html: medicine.description }}
                  />
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" sx={{ color: '#2a9d8f', fontWeight: 'bold' }}>
                    {new Intl.NumberFormat('en-KE', {
                      style: 'currency',
                      currency: 'KES',
                    }).format(medicine.price)}
                  </Typography>
                  <Box>
                    <Tooltip title={favorites.includes(medicine.id) ? 'Remove from Favorites' : 'Add to Favorites'}>
                      <IconButton onClick={() => toggleFavorite(medicine.id)}>
                        {favorites.includes(medicine.id) ? <Favorite color="error" /> : <FavoriteBorder />}
                      </IconButton>
                    </Tooltip>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#2a9d8f',
                        '&:hover': { backgroundColor: '#21867a' },
                        borderRadius: 2,
                        textTransform: 'none',
                      }}
                      disabled={!medicine.inStock}
                      onClick={() => handleBookNow(medicine)}
                      startIcon={<ShoppingCart />}
                      size="small"
                    >
                      Book
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Medicines;