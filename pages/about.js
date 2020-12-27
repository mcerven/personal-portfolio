import Head from 'next/head';

export default function About() {
  return (
    <div className="main">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex pt-6 text-primary">about</div>
    </div>
  )
}
