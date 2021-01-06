import React from 'react';
import Repository from './Repository';

export default function Repositories({ repositories, colors }) {
  if (!repositories || repositories.length <= 0) return null;

  return (
    <div className="flex flex-row flex-wrap">
      { repositories.map((repo) =>
          <Repository key={repo.id} languageColor={colors && colors[repo.language]?.color} {...repo} />
      )}
    </div>
  );
}
