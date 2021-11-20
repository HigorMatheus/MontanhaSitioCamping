/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '@/styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Montanha Sitio Camping</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
