import type { NextPage } from 'next'
import Head from 'next/head'
import App from '../components/app';
import Navigation from '../components/navigation'
import Search from '../src/images/search.svg';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Forkify || younggeeks</title>
        <meta name="description" content="A simple web app that gets recipes of a given food" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <App />
    </div>
  )
}

export default Home