import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skill.module.css';

export default function Skill({ src, alt }) {
  return (
    <div className="p-3">
      <img className={`${styles.skill__img} w-14 h-14 object-contain`}
        src={src} title={alt} alt={alt} loading="lazy" />
    </div>
  );
}
Skill.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
