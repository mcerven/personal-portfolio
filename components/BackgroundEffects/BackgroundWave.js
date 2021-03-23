import * as React from 'react';
import PropTypes from 'prop-types';

export default function BackgroundWave({topColor, bottomColor}) {
  return (
    <svg viewBox="0 0 1536 96">
      <path className="transition-colors-300"
        d="M0 0h1536v96H0z"
        style={{ fill: topColor }} />
      <path className="transition-colors-300"
        d="M 1536,96 L 0,96 L 0,36 S 268.8,19.650000000000016 384,21 S 652.8,40.05 768,45 S 1036.8,55.80000000000003 1152,54 S 1478.4,36.150000000000006 1536,33 z"
        style={{ fill: bottomColor }} />
    </svg>
  );
}

BackgroundWave.propTypes = {
  topColor: PropTypes.string.isRequired,
  bottomColor: PropTypes.string.isRequired,
};
