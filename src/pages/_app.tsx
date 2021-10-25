import { ChakraProvider } from '@chakra-ui/react';
import { CustomTheme } from '../theme/theme';

import Head from 'next/head';

import '@fontsource/roboto';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={CustomTheme}>
      <Head>
        <title>Boilerplate</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
