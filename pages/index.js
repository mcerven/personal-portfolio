import Skills from 'components/Skills';
import { educationItems, experienceItems, skills } from 'data/site-data';
import Head from 'next/head';
import { SectionWrapper, Profile, Experience } from '../components';

export default function Home() {
  return (
    <div className="main font-sans flex flex-wrap">
      <Head>
        <title>My profile - Mario Cerven</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
      </Head>

      <Profile />

      <SectionWrapper title="Skills" fullWidth={true}>
        <Skills skills={skills} />
      </SectionWrapper>

      <SectionWrapper title="Experience" fullWidth={false}>
        <Experience experienceItems={experienceItems} />
      </SectionWrapper>

      <SectionWrapper title="Education" fullWidth={false}>
        <Experience experienceItems={educationItems} />
      </SectionWrapper>
    </div>
  )
}
