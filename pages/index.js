import Repositories from 'components/Repositories';
import Skills from 'components/Skills';
import { educationItems, experienceItems, skills } from 'data/site-data';
import { SectionWrapper, Profile, Experience } from '../components';

export default function Home() {
  return (
    <div className="main font-sans flex flex-wrap">
      <Profile />

      <SectionWrapper id="repositories" title="Repositories" fullWidth={true}>
        <Repositories githubName="mcerven" />
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
