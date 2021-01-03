import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';

async function fetchRepositories(githubName, setRepositories) {
  try {
    const res = await fetch(`https://api.github.com/users/${githubName}/repos`);
    const newRepositories = await res.json();
    setRepositories(newRepositories);
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

export function Repositories({ githubName }) {
  const [repositories, setRepositories] = useState([]);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    fetchRepositories(githubName, setRepositories);
  }, []);

  useEffect(() => {
    fetchColors(setColors);
  }, []);

  if (!repositories || repositories.length <= 0) return null;

  return (
    <div className="flex flex-row flex-wrap">
      { repositories.map((repo) =>
          <Repository key={repo.id} languageColor={colors && colors[repo.language]?.color} {...repo} />
      )}
    </div>
  );
}

Repositories.propTypes = {
  githubName: PropTypes.string.isRequired,
}
