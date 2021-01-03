import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialMediaLink.module.css';

export default function SocialMediaLink({ title, href, children }) {
  return (
    <a href={href} target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`${styles.socialMediaLink} p-0.5`}
    >
      {children}
    </a>
  );
}

SocialMediaLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
