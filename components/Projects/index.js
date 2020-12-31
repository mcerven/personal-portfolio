import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

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

  return (
    <div className="flex flex-row flex-wrap">
      { projects.map((project) =>
        <Project key={project.id} languageColor={colors[project.language]?.color} {...project} />
      )}
    </div>
  );
}

Projects.propTypes = {
  githubName: PropTypes.string.isRequired,
}