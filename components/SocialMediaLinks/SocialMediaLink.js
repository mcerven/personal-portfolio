import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

export default function SocialMediaLink({ title, href, children }) {
  return (
    <div className="opacity-75 hover:opacity-100">
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
