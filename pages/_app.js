import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from 'theme';
import config from 'content/config/config.json';

const { fonts } = config;

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { googleFontsUrl, customFontName } = fonts;

  return (
    <ChakraProvider theme={theme}>
      <Head>
        {googleFontsUrl && <link href={googleFontsUrl} rel="stylesheet" />}
        {customFontName && (
          <style>
            {`@font-face {
              font-family: '${customFontName}';
              src: url('/fonts/${customFontName}.ttf') format('truetype');
            }`}
          </style>
        )}
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
