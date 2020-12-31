import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

export default function SocialMediaLink({ title, href, children }) {
  return (
    <div className="social-media-link">
      <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
        {children}
      </a>
    </div>
  );
}

SocialMediaLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
