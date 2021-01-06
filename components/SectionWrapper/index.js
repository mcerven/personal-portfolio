import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default function SectionWrapper({ id, title, fullWidth, children }) {
  return (
    <div className={`mt-20 w-full ${!fullWidth && 'lg:pr-10 lg:w-1/2'}`}>
      <div id={id} className={`${styles.sectionAnchorOffset} absolute w-0 h-0`}></div>
      <section>
        <h2 className="text-5xl font-light tracking-wide text-accent pb-5">{title}</h2>
        {children}
      </section>
    </div>
  );
}

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}