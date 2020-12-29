import React from 'react';
import PropTypes from 'prop-types';

export function ExperienceItem({ title, company, startDate, endDate, location, imgSrc }) {
  return (
    <article className="flex gap-3 p-3 hover:bg-gray-200 text-primary rounded-md">
      <div>
        <img width="56" height="56" src={imgSrc} loading="lazy" alt={company} />
      </div>
      <div className="flex flex-col">
        <h3>{title}</h3>
        <p>{company}</p>
        <p>{startDate} – {endDate || 'Present'}</p>
        <p>{location}</p>
      </div>
    </article>
  );
}

ExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  location: PropTypes.string,
  imgSrc: PropTypes.string,
}