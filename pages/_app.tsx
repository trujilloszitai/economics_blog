import React from 'react'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  ) 
}

export default MyApp
