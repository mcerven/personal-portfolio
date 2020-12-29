import Skills from 'components/Skills';
import { educationItems, experienceItems, skills } from 'data/site-data';
import Head from 'next/head';
import { Profile, Experience } from '../components';

export default function Home() {
  return (
    <div className="main font-sans flex flex-wrap">
      <Head>
        <title>My profile - Mario Cerven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
      <Experience title="Experience" experienceItems={experienceItems} />
      <Experience title="Education" experienceItems={educationItems} />
      <Skills skills={skills} />
    </div>
  )
}
