import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Nav/Sidebar'
import Feed from '../components/Timeline/Feed'
import Widgets from '../components/Timeline/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>not Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>

        <Sidebar/>

        <Feed/>

        <Widgets/>

      </main>
    </div>
  )
}

export default Home
