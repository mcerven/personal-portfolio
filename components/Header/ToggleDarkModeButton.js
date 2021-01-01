import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleDarkModeButton({ isDarkTheme, setIsDarkTheme }) {
  const imageUrl = isDarkTheme
    ? "https://www.flaticon.com/svg/static/icons/svg/1829/1829191.svg"
    : "https://www.flaticon.com/svg/static/icons/svg/1829/1829241.svg";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="w-5 h-5 ml-5 focus:outline-none select-none"
      onClick={() => setIsDarkTheme(value => !value)}
    >
      <img src={imageUrl} alt="Brightness" />
    </button>
  );
}

ToggleDarkModeButton.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
}
