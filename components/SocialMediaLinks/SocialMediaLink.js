import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

export default function SocialMediaLink({ title, href, children }) {
  return (
    <div className="w-4 h-4 mr-2 hover:text-accent">
      <Link href={href}>
        <a title={title}>
          {children}
        </a>
      </Link>
    </div>
  );
}

SocialMediaLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
