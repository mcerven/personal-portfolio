import React from 'react';
import PropTypes from 'prop-types';

export default function Skills({skills}) {
  return (
    <section>
      <h2 className="">Skills</h2>
      <div className="flex flex-wrap gap-7 justify-center">
        { skills.map(({src, alt}) => 
          <Skill key={alt} src={src} alt={alt} />
        )}
      </div>
    </section>
  );
}

function Skill({src, alt}) {
  return (
    <div>
      <img className="w-16 h-16 object-contain"
        src={src} title={alt} alt={alt} loading="lazy" />
    </div>
  );
}

Skill.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}