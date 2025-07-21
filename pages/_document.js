import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ✅ Google Fonts: Inter */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          
          {/* ✅ Google Search Console Verification */}
         <meta name="google-site-verification" content="W589BpDNLiP0-hHv0xi0clvtRvggLE3FsQw4gE-Cgdc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
