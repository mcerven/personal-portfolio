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
      className="w-6 h-6 ml-5 p-0.5 select-none focus:outline-none"
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
