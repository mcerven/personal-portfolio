import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Project({ name, html_url, description, language, languageColor }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="h-full p-2 text-primary">
        <div className="flex flex-col border rounded p-3 h-full">
          <div className="flex gap-2">
            <Link href={html_url}>
              <a className="text-lg font-medium">{name}</a>
            </Link>
          </div>
          <p className="py-2 text-secondary flex-1 overflow-hidden break-words" style={{minHeight: '3rem'}}>
            {description}
          </p>
          <p className="flex items-center gap-1">
            <span className="w-4 h-4 rounded-full" style={{background: languageColor}}></span>
            <span>{language}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string.isRequired,
  languageColor: PropTypes.string,
};
