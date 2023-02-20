import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleDarkModeButton({ isDarkTheme, toggleTheme }) {
  const imgSrc = isDarkTheme
    ? "/assets/images/brightness/light.png"
    : "/assets/images/brightness/dark.png";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="w-6 h-6 ml-5 p-0.5 select-none focus:outline-none"
      onClick={toggleTheme}
    >
      <img src={imgSrc} alt="Brightness" />
    </button>
  );
}

ToggleDarkModeButton.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
