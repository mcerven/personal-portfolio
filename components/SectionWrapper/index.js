import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default function SectionWrapper({ id, title, fullWidth, children }) {
  return (
    <section id={id} className={`${styles.SectionWrapper} w-full ${!fullWidth && 'lg:pr-10 lg:w-1/2'}`}>
      <h2 data-aos="fade-up" className="text-5xl font-light tracking-wide text-accent pb-5">{title}</h2>
      {children}
    </section>
  );
}

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}