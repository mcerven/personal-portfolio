import React from 'react';
import Skill from './Skill';

export default function Skills({skills}) {
  return (
    <div className="flex flex-wrap gap-7 justify-center">
      { skills.map(({src, alt}) => 
        <Skill key={alt} src={src} alt={alt} />
      )}
    </div>
  );
}
