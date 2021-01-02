import Projects from 'components/Projects';
import Skills from 'components/Skills';
import { educationItems, experienceItems, authorName, skills } from 'data/site-data';
import Head from 'next/head';
import { SectionWrapper, Profile, Experience } from '../components';

export default function Home() {
  return (
    <div className="main font-sans flex flex-wrap">
      <Head>
        <title>My profile - {authorName}</title>
        <link rel="icon" href="/favicon.ico" />
        <link data-n-head="ssr" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&amp;display=swap" defer />
      </Head>

      <Profile />

      <SectionWrapper id="projects" title="Projects" fullWidth={true}>
        <Projects githubName="mcerven" />
      </SectionWrapper>

      <SectionWrapper id="skills" title="Skills" fullWidth={true}>
        <Skills skills={skills} />
      </SectionWrapper>

      <SectionWrapper id="experience" title="Experience" fullWidth={false}>
        <Experience experienceItems={experienceItems} />
      </SectionWrapper>

      <SectionWrapper id="education" title="Education" fullWidth={false}>
        <Experience experienceItems={educationItems} />
      </SectionWrapper>
    </div>
  );
}
