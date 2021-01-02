import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem({ title, subTitle, startDate, endDate, location, description, imgSrc }) {
  return (
    <article className="flex items-start space-x-3 p-3 text-primary rounded-md hover:bg-accentBg">
      <figure className="mt-1 min-w-max flex-initial">
        <img width="56" height="56" src={imgSrc} alt={subTitle} loading="lazy" />
      </figure>
      <div className="flex-1 flex flex-col flex-wrap">
        <h3 className="font-medium leading-normal">{title}</h3>
        <div className="leading-snug">
          {subTitle && (<p>{subTitle}</p>)}
          <p className="text-secondary">{startDate} – {endDate || 'Present'}</p>
          {location && (<p className="text-secondary">{location}</p>)}
          {description && (<p className="mt-1 leading-tight">{description}</p>)}
        </div>
      </div>
    </article>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
}
