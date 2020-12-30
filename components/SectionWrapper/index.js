import React from 'react';
import PropTypes from 'prop-types';

export function SectionWrapper({ title, fullWidth, children }) {
  return (
    <div className={`mt-14 w-full ${!fullWidth && 'lg:pr-10 lg:w-1/2'}`}>
      <section>
        <h2 className="text-3xl font-semibold tracking-wide text-accent pb-5">{title}</h2>
        {children}
      </section>
    </div>
  );
}

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}