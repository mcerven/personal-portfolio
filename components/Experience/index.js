import React from 'react';
import ListItem from './ListItem';

export default function Experience({ experienceItems }) {
  return (
    <div className="flex flex-col">
      {experienceItems.map(exp => <ListItem key={exp.id} {...exp} />)}
    </div>
  );
}
