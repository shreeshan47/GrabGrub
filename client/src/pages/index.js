import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>
    <Head>
        <title>Grab Grub : Satisfy Your Cravings, Instantly!</title>
        <meta
          name="description"
          content="Grab Grub , Best Food Delivery in Nepal"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Slider/>
    </div>
  )
}

export default Home
