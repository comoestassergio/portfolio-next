import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import React from 'react'

import { AnimatePresence } from 'framer-motion'

import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps, router }) {

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </Layout>
      <Analytics />
    </>
  )
}
