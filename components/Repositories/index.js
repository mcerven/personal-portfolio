import React from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';

export default function Repositories({ repositories, colors }) {
  if (!repositories || !repositories.length) return null;

  return (
    <div className="flex flex-row flex-wrap">
      { repositories.map((repo, index) =>
        <Repository key={index} languageColor={colors && colors[repo.language]?.color} {...repo} />
      )}
    </div>
  );
}

Repositories.propTypes = {
  repositories: PropTypes.array.isRequired,
  colors: PropTypes.object.isRequired,
};
