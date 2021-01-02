import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';

async function fetchProjects(githubName, setProjects) {
  try {
    const res = await fetch(`https://api.github.com/users/${githubName}/repos`);
    const newProjects = await res.json();
    setProjects(newProjects);
  }
  catch(err) {
    console.error(err);
  }
}

async function fetchColors(setColors) {
  try {
    const res = await fetch(`https://raw.githubusercontent.com/ozh/github-colors/master/colors.json`);
    const newColors = await res.json();
    setColors(newColors);
  }
  catch(err) {
    console.error(err);
  }
}

export default function Projects({ githubName }) {
  const [projects, setProjects] = useState([]);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    fetchProjects(githubName, setProjects);
  }, []);

  useEffect(() => {
    fetchColors(setColors);
  }, []);

  if (!projects || projects.length <= 0) return null;

  return (
    <div className="flex flex-row flex-wrap">
      { projects.map((project) =>
          <Repository key={project.id} languageColor={colors && colors[project.language]?.color} {...project} />
      )}
    </div>
  );
}

Projects.propTypes = {
  githubName: PropTypes.string.isRequired,
}
