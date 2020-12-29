import React from 'react';
import ListItem from '../ListItem';

export function Experience({title, experienceItems}) {
  return (
    <div className="mt-10 w-full lg:pr-10 lg:w-1/2">
      <section>
        <h2 className="text-2xl text-accent pb-5">{title}</h2>
        <div className="flex flex-col">
          {experienceItems.map(exp => <ListItem key={exp.id} {...exp} />)}
        </div>
      </section>
    </div>
  );
}
