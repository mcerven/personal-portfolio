import Experience from 'components/Experience';
import Profile from 'components/Profile';
import Repositories from 'components/Repositories';
import SectionWrapper from 'components/SectionWrapper';
import Skills from 'components/Skills';
import { githubName, educationItems, experienceItems, skills } from 'data/site-data';


export default function Home({ repositories, colors }) {
  return (
    <div className="main font-sans flex flex-wrap">
      <Profile />

      <SectionWrapper id="repositories" title="Repositories" fullWidth={true}>
        <Repositories repositories={repositories} colors={colors} />
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

export async function getServerSideProps(context) {
  const repositories = await fetchRepositories(githubName);
  const colors = await fetchColors();

  return {
    props: {
      repositories,
      colors,
    },
  }
}

async function fetchRepositories(githubName) {
  try {
    const res = await fetch(`https://api.github.com/users/${githubName}/repos`);
    const data = await res.json();
    return data;
  }
  catch(err) {
    console.error(err);
  }
}

async function fetchColors() {
  try {
    const res = await fetch(`https://raw.githubusercontent.com/ozh/github-colors/master/colors.json`);
    const data = await res.json();
    return data;
  }
  catch(err) {
    console.error(err);
  }
}
