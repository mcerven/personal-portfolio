import Head from 'next/head';
import { Profile, Experience, Education } from '../components';

export default function Home() {
  return (
    <div className="main font-sans flex flex-wrap">
      <Head>
        <title>My profile - Mario Cerven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
      <Experience />
      <Education />
    </div>
  )
}
