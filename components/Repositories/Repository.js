import React from 'react';
import PropTypes from 'prop-types';
import LibraryIcon from './LibraryIcon';

export default function Repository({ name, html_url, description, language, languageColor }) {
  return (
    <div data-aos="fade-up" className="w-full md:w-1/2 lg:w-1/3">
      <div className="h-full p-2 text-primary">
        <div className="flex flex-col border rounded p-3 h-full">
          <a href={html_url} target="_blank" rel="noopener noreferrer" className="flex space-x-1 text-lg font-medium">
            <LibraryIcon className="w-4" />
            <span>{name}</span>
          </a>
          <p className="py-2 text-secondary flex-1 overflow-hidden break-words" style={{ minHeight: '3rem' }}>
            {description}
          </p>
          <p className="flex items-center space-x-1">
            <span className="w-4 h-4 rounded-full" style={{ background: languageColor }}></span>
            <span>{language}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string.isRequired,
  languageColor: PropTypes.string,
};
