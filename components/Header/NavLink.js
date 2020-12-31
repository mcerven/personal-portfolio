import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function NavLink({ children, ...props }) {
  return (
    <li className="border-transparent border-b-2 hover:border-accent transition-colors-300">
      <Link {...props}>{children}</Link>
    </li>
  );
}

NavLink.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
};
