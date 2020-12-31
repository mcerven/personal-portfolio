import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { authorName } from 'data/site-data';
import NavLink from './NavLink';
import routes from '../../data/routes';
import ToggleDarkModeButton from './ToggleDarkModeButton';

export function Header({ isDarkTheme, setIsDarkTheme }) {
  return (
    <header className="sticky top-0 z-30 bg-primaryBg transition-colors-300">
      <div className="container header-height pt-2 pb-1 flex flex-row items-center justify-between">
        <div className="text-accent">
          <Link href="/">
            <a aria-label="Home" title="Home" className="hidden sm:flex flex-wrap space-x-2 items-center">
              <img className="rounded-full w-10 h-10 object-contain border-2 border-accent" src="/assets/images/profile/profile-picture.jpg" alt="Profile picture" />
              <span>{authorName}</span>
            </a>
          </Link>
        </div>
        <nav className="flex items-center justify-end flex-wrap" aria-label="Header navbar" role="navigation">
          <ul className="flex flex-row justify-end space-x-5 text-primary text-base font-medium">
            { routes.map(({href, text}) => 
              <NavLink key={href} href={href}>{text}</NavLink>
            )}
          </ul>
          <ToggleDarkModeButton isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
}
