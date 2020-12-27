import Head from 'next/head';
import { Profile } from '../components';

export default function Home() {
  return (
    <div className="main font-sans">
      <Head>
        <title>My profile - Mario Cerven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
    </div>
  )
}
