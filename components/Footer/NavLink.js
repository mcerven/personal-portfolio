import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function NavLink({ children, ...props }) {
  return (
    <li className="hover:text-onSecondaryBgAccent">
      <Link {...props}>{children}</Link>
    </li>
  );
}

NavLink.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
};
