import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
    <Head>
  {/* ✅ Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />

  {/* ✅ Site Verification */}
  <meta name="google-site-verification" content="W589BpDNLiP0-hHv0xi0clvtRvggLE3FsQw4gE-Cgdc" />

  {/* ✅ Icons and Theme */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/logo192.png" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#4CAF50" />

  {/* ✅ Open Graph Meta Tags */}
  <meta property="og:title" content="Healthwise and Wellness" />
  <meta property="og:description" content="Your trusted platform for holistic health and wellness." />
  <meta property="og:image" content="https://healthwiseandwellness.vercel.app/logo512.png" />
  <meta property="og:url" content="https://healthwiseandwellness.vercel.app" />
  <meta property="og:type" content="website" />

  {/* ✅ Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Healthwise and Wellness" />
  <meta name="twitter:description" content="Your trusted platform for holistic health and wellness." />
  <meta name="twitter:image" content="https://healthwiseandwellness.vercel.app/logo512.png" />
</Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
