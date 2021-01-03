import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialMediaLink.module.css';

export default function SocialMediaLink({ title, href, children }) {
  return (
    <div className={styles.socialMediaLink}>
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
