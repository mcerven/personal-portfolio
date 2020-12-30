import React from 'react';
import PropTypes from 'prop-types';

export function SectionWrapper({ id, title, fullWidth, children }) {
  return (
    <div className={`mt-16 w-full ${!fullWidth && 'lg:pr-10 lg:w-1/2'}`}>
      <div id={id} className="section-anchor-offset absolute w-0 h-0"></div>
      <section>
        <h2 className="text-3xl font-semibold tracking-wide text-accent pb-5">{title}</h2>
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