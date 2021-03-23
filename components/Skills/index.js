import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';

export default function Skills({ skills }) {
  return (
    <div data-aos="fade-up" className="flex flex-wrap justify-center">
      { skills.map(({src, alt}) => 
        <Skill key={alt} src={src} alt={alt} />
      )}
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};
