import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { authorName } from 'data/site-data';
import ToggleDarkModeButton from './ToggleDarkModeButton';
import HeaderLinks from './HeaderLinks';

export function Header({ isDarkTheme, setIsDarkTheme }) {
  return (
    <header className="sticky top-0 z-30 bg-primaryBg transition-colors-300">
      <div className="container header-height pt-2 pb-1 flex flex-row items-center justify-between">
        <div className="flex w-full justify-between items-center">
          <Link href="/">
            <a aria-label="Home" title="Home" className="flex flex-wrap space-x-2 items-center text-accent">
              <img className="rounded-full w-10 h-10 object-contain border-2 border-accent" src="/assets/images/profile/profile-picture.jpg" alt="Profile picture" />
              <span>{authorName}</span>
            </a>
          </Link>
          <ToggleDarkModeButton isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        </div>
        <HeaderLinks />
      </div>
    </header>
  );
}

Header.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
}
