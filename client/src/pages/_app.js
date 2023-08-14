import '@/styles/globals.css'
import '@/components/Layout'
import Layout from '@/components/Layout'
import Head from "next/head"; 

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Head>
        <title>Grab Grub : Satisfy Your Cravings, Instantly!</title>
        <meta
          name="description"
          content="Grab Grub , Best Food Delivery in Nepal"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}