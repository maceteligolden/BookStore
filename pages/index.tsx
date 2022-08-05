import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';

interface tab {
    title: string,
    content: any
}

const tabs: tab[] = [
    {title: "Summary", content: ""},
    {title: "Author", content: ""},
    {title: "Reviews", content: ""}
]

const Home: NextPage = () => {

  return (
      <>
        <Hero/>
      </>
  )
}

export default Home
